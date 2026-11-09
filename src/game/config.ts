/**
 * Gameplay tuning. All distances are in logical world units; the canvas is
 * scaled so the world is always WORLD.height units tall.
 */

export const WORLD = {
  height: 420,
  groundY: 350,
  minWidth: 640,
  maxWidth: 1200,
} as const;

export const PLAYER = {
  x: 72,
  /** Size of one sprite pixel in world units. */
  pixelScale: 3,
  gravity: 2600,
  /** Gravity while holding "slide" in mid-air (fast fall). */
  fastFallGravity: 7200,
  jumpVelocity: 860,
  /** Upward velocity is capped to this once the jump button is released… */
  jumpCutVelocity: 380,
  /** …but only after the jump has lasted at least this long (min hop height). */
  minJumpHold: 0.07,
  /** A jump pressed this many seconds before landing still triggers. */
  jumpBuffer: 0.12,
  /** A quick slide tap lasts at least this long. */
  minSlideTime: 0.4,
} as const;

export const SPEED = {
  start: 380,
  max: 960,
  /** Units per second gained every second. */
  acceleration: 6.5,
  /** Background scroll speed on the title screen. */
  idle: 60,
} as const;

export const OBSTACLE = {
  size: 44,
  airSize: 40,
  /** Gap between the ground and the bottom of a flying obstacle. */
  airClearance: 38,
  /** Forgiveness: shrinks every obstacle hitbox on all sides. */
  hitboxInset: 6,
  /** Gap between patterns, in seconds of travel, at difficulty 0 and 1. */
  gapEasy: [0.95, 1.7],
  gapHard: [0.62, 1.05],
  firstSpawnDelay: 1.1,
  /** Share of obstacles drawn from the hazard pool (bugs, merge conflicts…). */
  hazardChance: 0.1,
} as const;

/** The score is tokens burned, counted in thousands (shown as "16K", "1.25M"). */
export const SCORE = {
  distancePerPoint: 30,
  /** The score blinks every `milestone` points. */
  milestone: 100,
  /** A "1.00M TOKENS BURNED!" toast appears every `release` points (1000K = 1M). */
  release: 1000,
} as const;

export const CRASH_FREEZE_SECONDS = 0.55;
