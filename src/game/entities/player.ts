import { PLAYER, WORLD } from "../config";
import {
  drawCharacter,
  FLASH_PALETTE,
  idlePose,
  jumpPose,
  PALETTE,
  runPose,
  slidePose,
} from "../rendering/character";
import type { Rect } from "../types";

export type PlayerPose = "idle" | "run" | "jump" | "slide";

/** Where the character is drawn, relative to PLAYER.x, when upright and when sliding. */
const RUN_ANCHOR = 24;
const SLIDE_ANCHOR = 26;

/** World units covered by one full running stride (two steps). */
const RUN_STRIDE = 64;

export class Player {
  /** Feet position (bottom of the sprite). */
  y: number = WORLD.groundY;
  vy = 0;
  onGround = true;
  sliding = false;

  /** One-frame event flags, read by the engine for effects. */
  jumped = false;
  landed = false;
  /** A running foot just touched down. */
  stepped = false;
  /** A slide just started. */
  slid = false;

  private jumpHeld = false;
  private slideHeld = false;
  private jumpBufferTimer = 0;
  private slideTimer = 0;
  private airTime = 0;
  private runCycle = 0;

  reset() {
    this.y = WORLD.groundY;
    this.vy = 0;
    this.onGround = true;
    this.sliding = false;
    this.jumped = this.landed = this.stepped = this.slid = false;
    this.jumpHeld = this.slideHeld = false;
    this.jumpBufferTimer = this.slideTimer = this.airTime = this.runCycle = 0;
  }

  pressJump() {
    this.jumpHeld = true;
    this.jumpBufferTimer = PLAYER.jumpBuffer;
  }

  releaseJump() {
    this.jumpHeld = false;
  }

  pressSlide() {
    this.slideHeld = true;
    this.slideTimer = PLAYER.minSlideTime;
  }

  releaseSlide() {
    this.slideHeld = false;
  }

  update(dt: number, speed: number) {
    this.jumped = this.landed = this.stepped = this.slid = false;
    this.jumpBufferTimer = Math.max(0, this.jumpBufferTimer - dt);

    if (this.jumpBufferTimer > 0 && this.onGround) {
      this.vy = -PLAYER.jumpVelocity;
      this.onGround = false;
      this.sliding = false;
      this.jumpBufferTimer = 0;
      this.slideTimer = 0;
      this.airTime = 0;
      this.jumped = true;
    }

    if (!this.onGround) {
      this.airTime += dt;
      // Variable jump height: releasing early cuts the ascent short.
      if (
        !this.jumpHeld &&
        this.airTime > PLAYER.minJumpHold &&
        this.vy < -PLAYER.jumpCutVelocity
      ) {
        this.vy = -PLAYER.jumpCutVelocity;
      }
      const gravity = this.slideHeld ? PLAYER.fastFallGravity : PLAYER.gravity;
      this.vy += gravity * dt;
      this.y += this.vy * dt;
      if (this.y >= WORLD.groundY) {
        this.y = WORLD.groundY;
        this.vy = 0;
        this.onGround = true;
        this.landed = true;
      }
    }

    // A slide pressed mid-air is buffered until landing.
    const wasSliding = this.sliding;
    this.sliding = this.onGround && (this.slideHeld || this.slideTimer > 0);
    if (this.sliding) this.slideTimer = Math.max(0, this.slideTimer - dt);
    this.slid = this.sliding && !wasSliding;

    // A foot plants when its leg is fully forward: a quarter stride in, then every half stride.
    const step = (RUN_STRIDE * PLAYER.scale) / 2;
    const before = Math.floor((this.runCycle - step / 2) / step);
    this.runCycle += speed * dt;
    const after = Math.floor((this.runCycle - step / 2) / step);
    this.stepped = this.onGround && !this.sliding && after > before;
  }

  hitbox(): Rect {
    // Defined around the drawing's anchor point so they scale with the character.
    const s = PLAYER.scale;
    if (this.sliding) {
      return { x: PLAYER.x + SLIDE_ANCHOR - 22 * s, y: this.y - 30 * s, w: 56 * s, h: 27 * s };
    }
    return { x: PLAYER.x + RUN_ANCHOR - 14 * s, y: this.y - 56 * s, w: 28 * s, h: 54 * s };
  }

  pose(isIdle: boolean): PlayerPose {
    if (this.sliding) return "slide";
    if (!this.onGround) return "jump";
    return isIdle ? "idle" : "run";
  }

  draw(ctx: CanvasRenderingContext2D, isIdle: boolean, flash: boolean, time: number) {
    const pose = this.pose(isIdle);
    const anchorX = PLAYER.x + (pose === "slide" ? SLIDE_ANCHOR : RUN_ANCHOR);

    // Ground shadow shrinks as the player rises.
    const height = WORLD.groundY - this.y;
    const shadowScale = Math.max(0.35, 1 - height / 220);
    const shadowWidth = (pose === "slide" ? 30 : 17) * PLAYER.scale;
    ctx.fillStyle = "rgba(0, 0, 0, 0.35)";
    ctx.beginPath();
    ctx.ellipse(anchorX, WORLD.groundY + 2, shadowWidth * shadowScale, 4 * shadowScale, 0, 0, Math.PI * 2);
    ctx.fill();

    const stride = (this.runCycle / (RUN_STRIDE * PLAYER.scale)) * Math.PI * 2;
    const characterPose =
      pose === "slide"
        ? slidePose(time)
        : pose === "jump"
          ? jumpPose(this.vy, time)
          : pose === "idle"
            ? idlePose(time)
            : runPose(stride, time);
    drawCharacter(ctx, anchorX, this.y, characterPose, flash ? FLASH_PALETTE : PALETTE, PLAYER.scale);
  }
}
