import type { TechInfo } from "@/content/types";
import { OBSTACLE, SPEED, WORLD } from "../config";
import type { Rect } from "../types";

export interface Obstacle {
  tech: TechInfo;
  x: number;
  /** Resting top position; flying obstacles bob around it. */
  y: number;
  size: number;
  airborne: boolean;
  bobPhase: number;
  hit: boolean;
  /** Set once the obstacle has scrolled fully behind the player. */
  passed: boolean;
  /**
   * Tiles that touch (stacks, doubles, triples) share one set of corner brackets.
   * One tile carries the group's box (relative to itself); the others carry null and draw none.
   */
  bracket: { dx: number; dy: number; w: number; h: number; hazard: boolean; multi: boolean } | null;
}

export function obstacleTop(o: Obstacle, time: number): number {
  return o.airborne ? o.y + Math.sin(time * 3 + o.bobPhase) * 3 : o.y;
}

export function obstacleHitbox(o: Obstacle, time: number): Rect {
  const inset = OBSTACLE.hitboxInset;
  const top = obstacleTop(o, time);
  // Flying obstacles hang from an energy pillar that reaches the top of the
  // screen, so they can't be jumped over — only slid under.
  const y = o.airborne ? 0 : top + inset;
  return {
    x: o.x + inset,
    y,
    w: o.size - inset * 2,
    h: top + o.size - inset - y,
  };
}

type PickTech = () => TechInfo;

/** What the player has to do: jump (ground), slide (air), or both in sequence (combo). */
type PatternKind = "ground" | "air" | "combo";

interface Pattern {
  id: string;
  kind: PatternKind;
  /** Difficulty (0..1 while speeding up, 1..2 in overdrive) at which the pattern starts appearing. */
  minDifficulty: number;
  weight: number;
  /** Weight at difficulty 2, blended in as difficulty rises, so easy formations thin out late in a run. */
  lateWeight?: number;
  /** `speed` lets combos space their parts in time, so they stay fair at any pace. */
  build: (x: number, pick: PickTech, speed: number) => Obstacle[];
}

const S = OBSTACLE.size;
const A = OBSTACLE.airSize;
/** Seconds of travel between the two halves of a combo (verified fair at min and max speed). */
const COMBO_GAP = 0.7;
/** Seconds of travel between two back-to-back gates. */
const GATE_GAP = 0.3;

const ground = (tech: TechInfo, x: number, row = 0): Obstacle => ({
  tech,
  x,
  y: WORLD.groundY - S * (row + 1),
  size: S,
  airborne: false,
  bobPhase: 0,
  hit: false,
  passed: false,
  bracket: null,
});

const flying = (tech: TechInfo, x: number): Obstacle => ({
  tech,
  x,
  y: WORLD.groundY - OBSTACLE.airClearance - A,
  size: A,
  airborne: true,
  bobPhase: Math.random() * Math.PI * 2,
  hit: false,
  passed: false,
  bracket: null,
});

const touches = (a: Obstacle, b: Obstacle) =>
  !a.airborne &&
  !b.airborne &&
  a.x <= b.x + b.size &&
  b.x <= a.x + a.size &&
  a.y <= b.y + b.size &&
  b.y <= a.y + a.size;

/** Groups touching tiles and gives one tile per group the bracket for the whole group. */
function assignBrackets(obstacles: Obstacle[]) {
  const unvisited = new Set(obstacles);
  for (const start of obstacles) {
    if (!unvisited.has(start)) continue;
    unvisited.delete(start);
    const group = [start];
    for (let i = 0; i < group.length; i++) {
      for (const o of unvisited) {
        if (!touches(group[i], o)) continue;
        unvisited.delete(o);
        group.push(o);
      }
    }
    const left = Math.min(...group.map((o) => o.x));
    const top = Math.min(...group.map((o) => o.y));
    const lead = group[0];
    for (const o of group) o.bracket = null;
    lead.bracket = {
      dx: left - lead.x,
      dy: top - lead.y,
      w: Math.max(...group.map((o) => o.x + o.size)) - left,
      h: Math.max(...group.map((o) => o.y + o.size)) - top,
      hazard: group.some((o) => o.tech.kind === "hazard"),
      multi: group.length > 1,
    };
  }
}

/** Obstacle formations. Add new ones here to vary gameplay. */
const PATTERNS: Pattern[] = [
  // Jump
  { id: "single", kind: "ground", minDifficulty: 0, weight: 4, lateWeight: 1, build: (x, pick) => [ground(pick(), x)] },
  { id: "double", kind: "ground", minDifficulty: 0.1, weight: 2.5, lateWeight: 1, build: (x, pick) => [ground(pick(), x), ground(pick(), x + S)] },
  { id: "stack", kind: "ground", minDifficulty: 0.25, weight: 2, build: (x, pick) => [ground(pick(), x, 0), ground(pick(), x, 1)] },
  {
    id: "triple",
    kind: "ground",
    minDifficulty: 0.45,
    weight: 1.2,
    build: (x, pick) => [ground(pick(), x), ground(pick(), x + S), ground(pick(), x + S * 2)],
  },
  {
    id: "quad",
    kind: "ground",
    minDifficulty: 0.65,
    weight: 1,
    build: (x, pick) => [0, 1, 2, 3].map((i) => ground(pick(), x + S * i)),
  },
  {
    id: "tower",
    kind: "ground",
    minDifficulty: 0.75,
    weight: 1,
    build: (x, pick) => [ground(pick(), x, 0), ground(pick(), x, 1), ground(pick(), x, 2)],
  },
  // Slide
  // Always a single flying obstacle: two side by side would read as one odd block.
  { id: "gate", kind: "air", minDifficulty: 0, weight: 5, lateWeight: 1.5, build: (x, pick) => [flying(pick(), x)] },
  // Two gates close together: a quick slide tap stands back up in between, so hold it.
  {
    id: "gate-gate",
    kind: "air",
    minDifficulty: 0.6,
    weight: 1.2,
    build: (x, pick, speed) => [flying(pick(), x), flying(pick(), x + A + speed * GATE_GAP)],
  },
  // Jump then slide, and slide then jump
  {
    id: "jump-slide",
    kind: "combo",
    minDifficulty: 0.3,
    weight: 1.5,
    build: (x, pick, speed) => [ground(pick(), x), flying(pick(), x + S + speed * COMBO_GAP)],
  },
  {
    id: "slide-jump",
    kind: "combo",
    minDifficulty: 0.35,
    weight: 1.5,
    build: (x, pick, speed) => [flying(pick(), x), ground(pick(), x + A + speed * COMBO_GAP)],
  },
  // Overdrive only: three moves in a row.
  {
    id: "jump-slide-jump",
    kind: "combo",
    minDifficulty: 1.1,
    weight: 1.2,
    build: (x, pick, speed) => {
      const gap = speed * COMBO_GAP;
      return [ground(pick(), x), flying(pick(), x + S + gap), ground(pick(), x + S + A + gap * 2)];
    },
  },
  {
    id: "slide-jump-slide",
    kind: "combo",
    minDifficulty: 1.3,
    weight: 1,
    build: (x, pick, speed) => {
      const gap = speed * COMBO_GAP;
      return [flying(pick(), x), ground(pick(), x + A + gap), flying(pick(), x + A + S + gap * 2)];
    },
  },
];

/**
 * Weight multiplier that keeps the sequence varied: the same formation rarely
 * repeats back to back, and long runs of one kind (all jumps / all slides) are
 * rare. Repeats aren't banned outright, so the order never becomes predictable.
 */
function varietyFactor(pattern: Pattern, lastId: string | null, recentKinds: PatternKind[]): number {
  const streak = recentKinds.filter((k) => k === pattern.kind).length;
  const kindFactor = streak === 0 ? 1.6 : streak === 1 ? 0.6 : 0.12;
  return pattern.id === lastId ? kindFactor * 0.25 : kindFactor;
}

function weightedPick<T>(items: T[], weightOf: (item: T) => number): T {
  const total = items.reduce((sum, item) => sum + weightOf(item), 0);
  let roll = Math.random() * total;
  for (const item of items) {
    roll -= weightOf(item);
    if (roll <= 0) return item;
  }
  return items[items.length - 1];
}

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/**
 * Deals items like a shuffled deck: every item comes up once before any
 * repeats. Items with spawnWeight < 1 are included in each new deck with that
 * probability, so niche entries still appear less often.
 */
class ShuffleBag {
  private all: TechInfo[] = [];
  private deck: TechInfo[] = [];
  /** Recently dealt ids, kept out of the start of the next deck. */
  private recent: string[] = [];

  get size() {
    return this.all.length;
  }

  add(items: TechInfo[]) {
    this.all.push(...items);
    // New items join the current deck right away, mixed into what's left.
    this.deck.push(...items.filter((t) => Math.random() < (t.spawnWeight ?? 1)));
    shuffle(this.deck);
  }

  /** Next item, never the same as `avoid` when there's any alternative. */
  next(avoid: string | null): TechInfo {
    if (this.deck.length === 0) this.refill();
    let item = this.deck.pop()!;
    if (item.id === avoid) {
      // Deck ran out on the item we're avoiding: start the next deck early.
      if (this.deck.length === 0) this.refill();
      const swap = this.deck.findIndex((t) => t.id !== avoid);
      if (swap >= 0) [item, this.deck[swap]] = [this.deck[swap], item];
    }
    this.recent.push(item.id);
    if (this.recent.length > this.all.length / 2) this.recent.shift();
    return item;
  }

  private refill() {
    const dealt = this.all.filter((t) => Math.random() < (t.spawnWeight ?? 1));
    const fresh = shuffle(dealt.length > 0 ? dealt : [...this.all]);
    // Cards are dealt from the end, so put recently seen items at the front:
    // they come up last, and a new deck never opens with something just seen.
    const recent = new Set(this.recent);
    this.deck = [...fresh.filter((t) => recent.has(t.id)), ...fresh.filter((t) => !recent.has(t.id))];
  }
}

function shuffle<T>(items: T[]): T[] {
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}

export class ObstacleSpawner {
  private distanceToNext = 0;
  private lastTechId: string | null = null;
  // The decks persist across runs, so a new run doesn't repeat what you just saw.
  private technologies = new ShuffleBag();
  private hazards = new ShuffleBag();
  private lastPatternId: string | null = null;
  /** Kinds of the last two formations, newest last. */
  private recentKinds: PatternKind[] = [];

  constructor(pool: TechInfo[]) {
    this.addToPool(pool);
  }

  addToPool(techs: TechInfo[]) {
    this.technologies.add(techs.filter((t) => t.kind !== "hazard"));
    this.hazards.add(techs.filter((t) => t.kind === "hazard"));
  }

  reset() {
    this.distanceToNext = SPEED.start * OBSTACLE.firstSpawnDelay;
    this.lastTechId = null;
    this.lastPatternId = null;
    this.recentKinds = [];
  }

  /** Advances by `dx` world units and returns any newly spawned obstacles. */
  update(dx: number, speed: number, difficulty: number, spawnX: number): Obstacle[] {
    this.distanceToNext -= dx;
    if (this.distanceToNext > 0) return [];

    const available = PATTERNS.filter((p) => difficulty >= p.minDifficulty);
    const lateness = Math.min(1, difficulty / 2);
    const pattern = weightedPick(
      available,
      (p) => lerp(p.weight, p.lateWeight ?? p.weight, lateness) * varietyFactor(p, this.lastPatternId, this.recentKinds),
    );
    this.lastPatternId = pattern.id;
    this.recentKinds = [...this.recentKinds, pattern.kind].slice(-2);
    const spawned = pattern.build(spawnX, () => this.pickTech(), speed);

    const patternWidth = Math.max(...spawned.map((o) => o.x + o.size)) - spawnX;
    // Gaps tighten from easy to hard while speeding up, then from hard to overdrive at top speed.
    const [from, to, t] =
      difficulty <= 1
        ? [OBSTACLE.gapEasy, OBSTACLE.gapHard, difficulty]
        : [OBSTACLE.gapHard, OBSTACLE.gapOverdrive, difficulty - 1];
    const minGap = lerp(from[0], to[0], t);
    const maxGap = lerp(from[1], to[1], t);
    this.distanceToNext = patternWidth + speed * lerp(minGap, maxGap, Math.random());

    assignBrackets(spawned);
    return spawned;
  }

  private pickTech(): TechInfo {
    const useHazard = this.hazards.size > 0 && Math.random() < OBSTACLE.hazardChance;
    const tech = (useHazard ? this.hazards : this.technologies).next(this.lastTechId);
    this.lastTechId = tech.id;
    return tech;
  }
}
