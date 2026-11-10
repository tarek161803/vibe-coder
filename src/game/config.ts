/**
 * Gameplay tuning. All distances are in logical world units; the canvas is
 * scaled so the world is always WORLD.height units tall.
 */

export const WORLD = {
  height: 420,
  /** Where the player's feet and obstacles rest. */
  groundY: 380,
  /** Far edge of the road, where the city stands. Above groundY so the run happens *on* the road. */
  horizonY: 356,
  minWidth: 640,
  maxWidth: 1200,
} as const;

export const PLAYER = {
  x: 72,
  /** Size multiplier for the character drawing and its hitboxes. */
  scale: 1.35,
  gravity: 2600,
  /** Gravity while holding "slide" in mid-air (fast fall). */
  fastFallGravity: 7200,
  jumpVelocity: 860,
  /** Upward velocity is capped to this once the jump button is released… */
  jumpCutVelocity: 260,
  /** …but only after the jump has lasted at least this long (min hop height). */
  minJumpHold: 0.07,
  /** A jump pressed this many seconds before landing still triggers. */
  jumpBuffer: 0.12,
  /** A quick slide tap lasts at least this long. */
  minSlideTime: 0.4,
} as const;

export const SPEED = {
  start: 400,
  max: 1040,
  /** Units per second gained every second. */
  acceleration: 9,
} as const;

export const OBSTACLE = {
  size: 36,
  airSize: 34,
  /** Gap between the ground and the bottom of a flying obstacle (clears a sliding player). */
  airClearance: 58,
  /** Forgiveness: shrinks every obstacle hitbox on all sides. */
  hitboxInset: 5,
  /** Gap between patterns, in seconds of travel, at difficulty 0 and 1. */
  gapEasy: [0.85, 1.45],
  gapHard: [0.6, 0.95],
  /** Once top speed is reached the pressure keeps building: gaps tighten to this over `overdriveSeconds`. */
  gapOverdrive: [0.55, 0.75],
  overdriveSeconds: 45,
  firstSpawnDelay: 1.1,
  /** Share of obstacles drawn from the hazard pool (bugs, merge conflicts…). Kept low: there are only a few hazards. */
  hazardChance: 0.05,
} as const;

/** The score is tokens burned, counted in thousands (shown as "16K", "1.25M"). */
export const SCORE = {
  distancePerPoint: 30,
  /** The score blinks every `milestone` points. */
  milestone: 100,
  /** A "1.00M TOKENS BURNED!" toast appears every `release` points (1000K = 1M). */
  release: 1000,
  /** A "25 SKILLS DODGED!" toast appears every `dodgeMilestone` skills the player clears. */
  dodgeMilestone: 25,
} as const;

export const CRASH_FREEZE_SECONDS = 0.55;
