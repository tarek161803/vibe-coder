import type { GameEvent } from "@/game/types";

/**
 * Synthesized sound effects and a chiptune loop (Web Audio, no audio files).
 * The AudioContext is created on the first user gesture via unlockAudio(),
 * since browsers block audio that starts without one.
 */

let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let noise: AudioBuffer | null = null;
let muted = false;

const MASTER_VOLUME = 0.5;
const MUSIC_VOLUME = 0.22;

export function unlockAudio() {
  if (typeof window === "undefined") return;
  if (!ctx) {
    try {
      ctx = new AudioContext();
    } catch {
      return; // Web Audio unavailable: the game just stays silent.
    }
    master = ctx.createGain();
    master.gain.value = muted ? 0 : MASTER_VOLUME;
    master.connect(ctx.destination);
    noise = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const data = noise.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  }
  if (ctx.state === "suspended") void ctx.resume();
}

export function setMuted(value: boolean) {
  muted = value;
  if (ctx && master) master.gain.setTargetAtTime(value ? 0 : MASTER_VOLUME, ctx.currentTime, 0.02);
}

const midiToHz = (note: number) => 440 * 2 ** ((note - 69) / 12);

/** One enveloped oscillator note, optionally sliding to `endHz`. */
function tone(
  type: OscillatorType,
  hz: number,
  start: number,
  duration: number,
  volume: number,
  endHz?: number,
  destination: AudioNode | null = master,
) {
  if (!ctx || !destination) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(hz, start);
  if (endHz) osc.frequency.exponentialRampToValueAtTime(endHz, start + duration);
  gain.gain.setValueAtTime(0, start);
  gain.gain.linearRampToValueAtTime(volume, start + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  osc.connect(gain).connect(destination);
  osc.start(start);
  osc.stop(start + duration + 0.02);
}

/** A burst of filtered white noise (whooshes, impacts). */
function hiss(
  start: number,
  duration: number,
  volume: number,
  filterHz: number,
  filterType: BiquadFilterType = "lowpass",
  destination: AudioNode | null = master,
) {
  if (!ctx || !destination || !noise) return;
  const src = ctx.createBufferSource();
  src.buffer = noise;
  const filter = ctx.createBiquadFilter();
  filter.type = filterType;
  filter.frequency.value = filterHz;
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(volume, start);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  src.connect(filter).connect(gain).connect(destination);
  src.start(start);
  src.stop(start + duration + 0.02);
}

export function playSfx(event: GameEvent) {
  if (!ctx || muted) return;
  const t = ctx.currentTime;
  switch (event) {
    case "jump":
      tone("square", 300, t, 0.14, 0.12, 720);
      break;
    case "slide":
      hiss(t, 0.22, 0.8, 1800);
      tone("triangle", 420, t, 0.18, 0.22, 140);
      break;
    case "crash":
      hiss(t, 0.45, 0.5, 2400);
      tone("sawtooth", 260, t, 0.5, 0.2, 50);
      break;
    case "tokens":
      [72, 76, 79, 84].forEach((n, i) => tone("square", midiToHz(n), t + i * 0.07, 0.12, 0.1));
      break;
    case "dodged":
      [79, 86].forEach((n, i) => tone("triangle", midiToHz(n), t + i * 0.09, 0.22, 0.18));
      break;
    case "overdrive":
      tone("sawtooth", 220, t, 0.7, 0.14, 880);
      tone("square", 110, t, 0.7, 0.08, 440);
      break;
  }
}

// ── Music ────────────────────────────────────────────────────────────────

/**
 * Four bars of driving runner music on a 16th-note grid: Am – F – C – G with
 * four-on-the-floor drums, a pumping octave bass, a 16th arpeggio and a lead.
 */
const CHORDS = [
  { bass: 45, arp: [69, 72, 76, 81] }, // Am
  { bass: 41, arp: [65, 69, 72, 77] }, // F
  { bass: 48, arp: [67, 72, 76, 79] }, // C
  { bass: 43, arp: [67, 71, 74, 79] }, // G
];
/** Lead melody in 8th notes, 8 per bar (MIDI numbers, 0 = rest). */
const MELODY = [
  76, 0, 76, 79, 81, 0, 79, 76,
  77, 0, 77, 76, 72, 0, 74, 76,
  79, 0, 79, 81, 84, 0, 81, 79,
  74, 0, 76, 79, 83, 81, 79, 74,
];
const STEPS_PER_BAR = 16;
const BASE_STEP = 60 / 160 / 4; // 16th notes at 160 BPM
const LOOKAHEAD = 0.12;

let musicGain: GainNode | null = null;
let timer = 0;
let step = 0;
let nextTime = 0;
let tempo = 1;

function playStep(s: number, t: number, length: number, out: AudioNode) {
  const bar = Math.floor(s / STEPS_PER_BAR) % CHORDS.length;
  const i = s % STEPS_PER_BAR;
  const chord = CHORDS[bar];

  // Drums: kick on every beat, snare on 2 and 4, hats on the off-beats.
  if (i % 4 === 0) tone("sine", 150, t, 0.16, 0.9, 40, out);
  if (i === 4 || i === 12) hiss(t, 0.12, 0.45, 1800, "highpass", out);
  if (i % 4 === 2) hiss(t, 0.05, 0.22, 7000, "highpass", out);
  else if (i % 2 === 1) hiss(t, 0.025, 0.08, 8000, "highpass", out);

  // Bass: 8th notes jumping between the root and its octave.
  if (i % 2 === 0) {
    const note = chord.bass + (i % 4 === 2 ? 12 : 0);
    tone("sawtooth", midiToHz(note), t, length * 1.7, 0.22, undefined, out);
  }

  // Arpeggio: chord tones cycling every 16th.
  tone("square", midiToHz(chord.arp[i % 4] + 12), t, length * 0.6, 0.035, undefined, out);

  // Lead on the 8th-note grid.
  if (i % 2 === 0) {
    const note = MELODY[bar * 8 + i / 2];
    if (note) tone("square", midiToHz(note), t, length * 1.6, 0.11, undefined, out);
  }
}

function schedule() {
  if (!ctx || !musicGain) return;
  while (nextTime < ctx.currentTime + LOOKAHEAD) {
    const length = BASE_STEP / tempo;
    playStep(step, nextTime, length, musicGain);
    nextTime += length;
    step++;
  }
}

export function startMusic() {
  if (!ctx || !master || timer) return;
  musicGain = ctx.createGain();
  musicGain.gain.value = MUSIC_VOLUME;
  musicGain.connect(master);
  nextTime = ctx.currentTime + 0.05;
  timer = window.setInterval(schedule, 25);
  schedule();
}

export function stopMusic() {
  window.clearInterval(timer);
  timer = 0;
  if (ctx && musicGain) {
    const gain = musicGain;
    gain.gain.setTargetAtTime(0, ctx.currentTime, 0.05);
    window.setTimeout(() => gain.disconnect(), 400);
  }
  musicGain = null;
}

/** Restarts the loop from the top on the next startMusic(). */
export function resetMusic() {
  step = 0;
  tempo = 1;
}

/** 1 = base tempo; the game speeds the music up as the run gets faster. */
export function setMusicTempo(rate: number) {
  tempo = rate;
}
