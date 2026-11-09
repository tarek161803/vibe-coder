/**
 * The vibe coder, drawn with vector shapes (crisp at any scale) and animated
 * with simple jointed limbs. Coordinates are world units relative to the
 * character's anchor point on the ground; +x is forward (right), +y is down.
 */

export interface CharacterPalette {
  outline: string;
  skin: string;
  blush: string;
  hair: string;
  hoodie: string;
  hoodieShade: string;
  hoodieTrim: string;
  jeans: string;
  jeansShade: string;
  shoe: string;
  shoeAccent: string;
  phones: string;
  phonesShade: string;
  eye: string;
}

export const PALETTE: CharacterPalette = {
  outline: "#140c2b",
  skin: "#f3c79b",
  blush: "rgba(244, 114, 182, 0.35)",
  hair: "#3b2416",
  hoodie: "#8b5cf6",
  hoodieShade: "#6d28d9",
  hoodieTrim: "#f5f3ff",
  jeans: "#2f5bd3",
  jeansShade: "#213f96",
  shoe: "#f8fafc",
  shoeAccent: "#ef4444",
  phones: "#22d3ee",
  phonesShade: "#0e7490",
  eye: "#140c2b",
};

/** Solid white silhouette used for the hit flash. */
export const FLASH_PALETTE: CharacterPalette = Object.fromEntries(
  Object.keys(PALETTE).map((key) => [key, "#ffffff"]),
) as unknown as CharacterPalette;

/**
 * A limb: `angle` of the upper segment measured from straight down
 * (+ swings forward), `bend` folds the lower segment (legs fold back, arms fold forward).
 */
interface Limb {
  angle: number;
  bend: number;
}

export interface CharacterPose {
  hipX: number;
  hipY: number;
  /** Torso tilt from vertical (+ leans forward). */
  lean: number;
  /** [back, front] */
  legs: [Limb, Limb];
  /** [back, front] */
  arms: [Limb, Limb];
  headTilt: number;
  /** Extra head offset, e.g. to sit the head up on the neck when reclined. */
  headOffset?: { x: number; y: number };
  eyesClosed: boolean;
}

const THIGH = 12;
const SHIN = 12;
const UPPER_ARM = 9;
const FOREARM = 8.5;
const TORSO = 19;
/** Shoulder to head centre: long enough to show a neck between hoodie and head. */
const NECK = 16;
const NECK_W = 6.5;
const HEAD_R = 9;
const LEG_W = 7;
const ARM_W = 5.5;
const TORSO_W = 15;
const OUTLINE = 1.6;
/** Hip height that puts the soles of a straight leg on the ground (leg + shoe). */
const STAND_HIP_Y = -26.6;

/** Seconds between blinks, and how long a blink lasts. */
const BLINK_EVERY = 3.2;
const BLINK_FOR = 0.12;
const blinking = (time: number) => time % BLINK_EVERY < BLINK_FOR;

// ── Poses ────────────────────────────────────────────────────────────────

/** `phase` advances 2π per stride. */
export function runPose(phase: number, time: number): CharacterPose {
  const leg = (p: number): Limb => ({
    angle: 0.62 * Math.sin(p) + 0.06,
    // Knee folds high while the leg swings forward (heel kick), straightens to push off.
    bend: 0.2 + 1.5 * Math.max(0, Math.cos(p)),
  });
  // Each arm swings with the opposite leg, elbow bent ~90° (a bit more on the forward swing).
  const arm = (p: number): Limb => ({
    angle: 0.8 * Math.sin(p) - 0.12,
    bend: 1.45 + 0.35 * Math.max(0, Math.sin(p)),
  });
  return {
    hipX: 0,
    // Body rises when the legs are spread apart (the airborne part of a running stride).
    hipY: STAND_HIP_Y - Math.abs(Math.sin(phase)) * 1.8,
    lean: 0.2,
    legs: [leg(phase), leg(phase + Math.PI)],
    arms: [arm(phase + Math.PI), arm(phase)],
    // Counter the lean so the head stays up, looking ahead.
    headTilt: -0.12,
    eyesClosed: blinking(time),
  };
}

/** `vy` < 0 while rising. */
export function jumpPose(vy: number, time: number): CharacterPose {
  const rising = vy < 0;
  return {
    hipX: 0,
    hipY: -26,
    lean: 0.12,
    legs: [
      { angle: rising ? -0.2 : 0.1, bend: rising ? 1.5 : 0.9 },
      { angle: rising ? 1.2 : 0.75, bend: rising ? 1.9 : 1.1 },
    ],
    arms: [
      { angle: -1.1, bend: 0.6 },
      { angle: rising ? 2.5 : 1.8, bend: 0.5 },
    ],
    headTilt: rising ? -0.15 : 0.05,
    eyesClosed: blinking(time),
  };
}

export function idlePose(time: number): CharacterPose {
  const breathe = Math.sin(time * 2.2) * 0.6;
  return {
    hipX: 0,
    hipY: STAND_HIP_Y,
    lean: 0.03,
    legs: [
      { angle: -0.09, bend: 0.06 },
      { angle: 0.09, bend: 0.06 },
    ],
    arms: [
      { angle: -0.12, bend: 0.35 + breathe * 0.05 },
      { angle: 0.12, bend: 0.4 + breathe * 0.05 },
    ],
    headTilt: breathe * 0.02,
    eyesClosed: blinking(time),
  };
}

/** Feet-first baseball slide: leaning back on one hand, front leg stretched out. */
export function slidePose(time: number): CharacterPose {
  const wobble = Math.sin(time * 30) * 0.03;
  return {
    hipX: -4,
    hipY: -10,
    lean: -1.1,
    legs: [
      { angle: 1.4, bend: 2.65 }, // tucked under
      { angle: 1.45 + wobble, bend: 0.05 }, // stretched forward
    ],
    arms: [
      { angle: -0.6, bend: -0.2 }, // planted behind
      { angle: 0.7, bend: 0.75 }, // hand resting on the thigh, clear of the face
    ],
    // Head tips back with the recline so he looks up and ahead (top-right).
    headTilt: -0.4,
    headOffset: { x: -2, y: -1 },
    eyesClosed: false,
  };
}

// ── Drawing ──────────────────────────────────────────────────────────────

const dir = (angle: number) => ({ x: Math.sin(angle), y: Math.cos(angle) });

function capsule(
  ctx: CanvasRenderingContext2D,
  points: { x: number; y: number }[],
  width: number,
  color: string,
  outline: string,
) {
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.beginPath();
  points.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)));
  ctx.strokeStyle = outline;
  ctx.lineWidth = width + OUTLINE * 2;
  ctx.stroke();
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.stroke();
}

function drawLeg(
  ctx: CanvasRenderingContext2D,
  hip: { x: number; y: number },
  limb: Limb,
  pal: CharacterPalette,
  shade: boolean,
) {
  const d1 = dir(limb.angle);
  const knee = { x: hip.x + d1.x * THIGH, y: hip.y + d1.y * THIGH };
  const shinAngle = limb.angle - limb.bend;
  const d2 = dir(shinAngle);
  const foot = { x: knee.x + d2.x * SHIN, y: knee.y + d2.y * SHIN };
  capsule(ctx, [hip, knee, foot], LEG_W, shade ? pal.jeansShade : pal.jeans, pal.outline);

  // Sneaker: points "forward" relative to the shin.
  ctx.save();
  ctx.translate(foot.x, foot.y);
  ctx.rotate(-shinAngle);
  ctx.beginPath();
  ctx.roundRect(-3.5, -2.5, 11, 5.5, 2.6);
  ctx.fillStyle = pal.shoe;
  ctx.strokeStyle = pal.outline;
  ctx.lineWidth = OUTLINE;
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = pal.shoeAccent;
  ctx.fillRect(-2.5, 1.4, 9, 1.6);
  ctx.restore();
}

function drawArm(
  ctx: CanvasRenderingContext2D,
  shoulder: { x: number; y: number },
  limb: Limb,
  pal: CharacterPalette,
  shade: boolean,
) {
  const d1 = dir(limb.angle);
  const elbow = { x: shoulder.x + d1.x * UPPER_ARM, y: shoulder.y + d1.y * UPPER_ARM };
  const d2 = dir(limb.angle + limb.bend);
  const hand = { x: elbow.x + d2.x * FOREARM, y: elbow.y + d2.y * FOREARM };
  capsule(ctx, [shoulder, elbow, hand], ARM_W, shade ? pal.hoodieShade : pal.hoodie, pal.outline);
  ctx.beginPath();
  ctx.arc(hand.x, hand.y, 2.7, 0, Math.PI * 2);
  ctx.fillStyle = pal.skin;
  ctx.strokeStyle = pal.outline;
  ctx.lineWidth = OUTLINE;
  ctx.fill();
  ctx.stroke();
}

function drawHead(ctx: CanvasRenderingContext2D, pose: CharacterPose, pal: CharacterPalette) {
  ctx.lineWidth = OUTLINE;
  ctx.strokeStyle = pal.outline;

  // Hair covers the back and top; the face is a skin circle shifted forward.
  ctx.beginPath();
  ctx.arc(0, 0, HEAD_R, 0, Math.PI * 2);
  ctx.fillStyle = pal.hair;
  ctx.fill();
  ctx.save();
  ctx.clip();
  ctx.beginPath();
  ctx.arc(3.2, 2.6, HEAD_R - 0.5, 0, Math.PI * 2);
  ctx.fillStyle = pal.skin;
  ctx.fill();
  // Fringe
  ctx.beginPath();
  ctx.moveTo(-2, -9);
  ctx.quadraticCurveTo(6, -9.5, 9.5, -3.5);
  ctx.lineTo(5.5, -4.2);
  ctx.lineTo(4.2, -2.2);
  ctx.lineTo(2.2, -4.4);
  ctx.closePath();
  ctx.fillStyle = pal.hair;
  ctx.fill();
  ctx.restore();
  ctx.beginPath();
  ctx.arc(0, 0, HEAD_R, 0, Math.PI * 2);
  ctx.stroke();

  // Eye + smile
  if (pose.eyesClosed) {
    ctx.beginPath();
    ctx.moveTo(3.6, 0.3);
    ctx.lineTo(6.2, 0.3);
    ctx.strokeStyle = pal.eye;
    ctx.lineWidth = 1.2;
    ctx.stroke();
  } else {
    ctx.beginPath();
    ctx.ellipse(5, 0, 1.25, 1.75, 0, 0, Math.PI * 2);
    ctx.fillStyle = pal.eye;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(5.4, -0.6, 0.45, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
  }
  // Cheek blush
  ctx.beginPath();
  ctx.ellipse(3.4, 3.4, 1.7, 1.1, 0, 0, Math.PI * 2);
  ctx.fillStyle = pal.blush;
  ctx.fill();
  ctx.beginPath();
  ctx.arc(5.6, 3.6, 1.8, 0.15 * Math.PI, 0.7 * Math.PI);
  ctx.strokeStyle = pal.eye;
  ctx.lineWidth = 1;
  ctx.stroke();

  // Headphones (side view): the band runs straight up from the ear cup over the
  // hair and ends right at the top of the head; the cup sits over the ear.
  const bandX = -1.6;
  const crownY = -Math.sqrt(HEAD_R * HEAD_R - bandX * bandX);
  ctx.beginPath();
  ctx.moveTo(bandX, -2.5);
  // The round cap (radius = half the outline width) brings the tip up to the crown.
  ctx.lineTo(bandX + 0.3, crownY + 2);
  ctx.lineCap = "round";
  ctx.strokeStyle = pal.outline;
  ctx.lineWidth = 4;
  ctx.stroke();
  ctx.strokeStyle = pal.phones;
  ctx.lineWidth = 2.2;
  ctx.stroke();
  ctx.beginPath();
  ctx.roundRect(-4.6, -3.2, 6, 8.4, 2.6);
  ctx.fillStyle = pal.phones;
  ctx.strokeStyle = pal.outline;
  ctx.lineWidth = OUTLINE;
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.roundRect(-3.2, -1.6, 2.6, 5.2, 1.2);
  ctx.fillStyle = pal.phonesShade;
  ctx.fill();
}

/** Draws the character with its anchor (between the feet, on the ground) at (x, y). */
export function drawCharacter(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  pose: CharacterPose,
  pal: CharacterPalette = PALETTE,
  scale = 1,
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);

  const hip = { x: pose.hipX, y: pose.hipY };
  const up = { x: Math.sin(pose.lean), y: -Math.cos(pose.lean) };
  const shoulder = { x: hip.x + up.x * TORSO, y: hip.y + up.y * TORSO };
  const neck = { x: shoulder.x + up.x * 3, y: shoulder.y + up.y * 3 };
  const head = {
    x: shoulder.x + up.x * NECK + 1.5 + (pose.headOffset?.x ?? 0),
    y: shoulder.y + up.y * NECK + (pose.headOffset?.y ?? 0),
  };
  const armRoot = { x: shoulder.x + up.x * -2.5, y: shoulder.y + up.y * -2.5 };

  // Back limbs first (darker), then body, front limbs, and the head on top.
  drawArm(ctx, armRoot, pose.arms[0], pal, true);
  drawLeg(ctx, hip, pose.legs[0], pal, true);

  // Hood bunched behind the neck
  ctx.beginPath();
  ctx.arc(neck.x - up.y * 3 - 0.5, neck.y + up.x * 3 + 1, 3.8, 0, Math.PI * 2);
  ctx.fillStyle = pal.hoodieShade;
  ctx.strokeStyle = pal.outline;
  ctx.lineWidth = OUTLINE;
  ctx.fill();
  ctx.stroke();

  // Neck: drawn before the torso so it rises out of the hoodie collar,
  // and it ends just inside the head, which is drawn over it.
  const toHead = { x: head.x - shoulder.x, y: head.y - shoulder.y };
  const toHeadLen = Math.hypot(toHead.x, toHead.y) || 1;
  const neckTop = {
    x: head.x - (toHead.x / toHeadLen) * (HEAD_R - 2),
    y: head.y - (toHead.y / toHeadLen) * (HEAD_R - 2),
  };
  capsule(ctx, [shoulder, neckTop], NECK_W, pal.skin, pal.outline);

  // The hoodie stops a little below the shoulder line so the neck shows above its collar.
  const collar = { x: shoulder.x - up.x * 3, y: shoulder.y - up.y * 3 };
  capsule(ctx, [hip, collar], TORSO_W, pal.hoodie, pal.outline);
  // Hem seam across the bottom of the hoodie
  const hem = { x: hip.x + up.x * 2.5, y: hip.y + up.y * 2.5 };
  const across = { x: -up.y, y: up.x };
  const halfHem = TORSO_W / 2 - 1.5;
  ctx.beginPath();
  ctx.moveTo(hem.x - across.x * halfHem, hem.y - across.y * halfHem);
  ctx.lineTo(hem.x + across.x * halfHem, hem.y + across.y * halfHem);
  ctx.strokeStyle = pal.hoodieShade;
  ctx.lineWidth = 1.6;
  ctx.stroke();
  // Hoodie strings and pocket
  ctx.strokeStyle = pal.hoodieTrim;
  ctx.lineWidth = 1.2;
  ctx.lineCap = "round";
  for (const offset of [1.5, 4.5]) {
    const sx = shoulder.x + -up.y * offset;
    const sy = shoulder.y + up.x * offset;
    ctx.beginPath();
    ctx.moveTo(sx, sy);
    ctx.lineTo(sx + -up.x * 6, sy + -up.y * 6);
    ctx.stroke();
  }
  ctx.strokeStyle = pal.hoodieShade;
  ctx.lineWidth = 1.4;
  ctx.beginPath();
  const px = hip.x + up.x * 5;
  const py = hip.y + up.y * 5;
  ctx.moveTo(px - up.y * -1, py + up.x * -1);
  ctx.lineTo(px - up.y * 6, py + up.x * 6);
  ctx.stroke();

  drawLeg(ctx, hip, pose.legs[1], pal, false);
  drawArm(ctx, armRoot, pose.arms[1], pal, false);

  // Head last, so an arm or shoulder never covers the face.
  ctx.save();
  ctx.translate(head.x, head.y);
  ctx.rotate(pose.lean * 0.5 + pose.headTilt);
  drawHead(ctx, pose, pal);
  ctx.restore();

  ctx.restore();
}
