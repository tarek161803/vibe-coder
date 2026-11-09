import { PLAYER, WORLD } from "../config";
import type { PlayerSprites, Sprite } from "../rendering/playerSprites";
import type { Rect } from "../types";

export type PlayerPose = "idle" | "run" | "jump" | "slide";

export class Player {
  /** Feet position (bottom of the sprite). */
  y: number = WORLD.groundY;
  vy = 0;
  onGround = true;
  sliding = false;

  /** One-frame event flags, read by the engine for effects. */
  jumped = false;
  landed = false;

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
    this.jumped = this.landed = false;
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
    this.jumped = this.landed = false;
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
    this.sliding = this.onGround && (this.slideHeld || this.slideTimer > 0);
    if (this.sliding) this.slideTimer = Math.max(0, this.slideTimer - dt);

    this.runCycle += speed * dt;
  }

  hitbox(): Rect {
    if (this.sliding) {
      return { x: PLAYER.x + 4, y: this.y - 30, w: 56, h: 27 };
    }
    return { x: PLAYER.x + 10, y: this.y - 56, w: 28, h: 54 };
  }

  pose(isIdle: boolean): PlayerPose {
    if (this.sliding) return "slide";
    if (!this.onGround) return "jump";
    return isIdle ? "idle" : "run";
  }

  draw(ctx: CanvasRenderingContext2D, sprites: PlayerSprites, isIdle: boolean, flash: boolean) {
    const pose = this.pose(isIdle);
    let sprite: Sprite;
    if (flash) {
      sprite = pose === "slide" ? sprites.flash.slide : pose === "jump" ? sprites.flash.jump : sprites.flash.run;
    } else if (pose === "run") {
      sprite = Math.floor(this.runCycle / 30) % 2 === 0 ? sprites.runA : sprites.runB;
    } else {
      sprite = sprites[pose];
    }

    const scale = PLAYER.pixelScale;
    const w = sprite.width * scale;
    const h = sprite.height * scale;
    const x = pose === "slide" ? PLAYER.x - 4 : PLAYER.x;
    // Idle breathing bob.
    const bob = isIdle && pose === "idle" ? Math.round(Math.sin(performance.now() / 300)) : 0;

    // Ground shadow shrinks as the player rises.
    const height = WORLD.groundY - this.y;
    const shadowScale = Math.max(0.35, 1 - height / 220);
    ctx.fillStyle = "rgba(0, 0, 0, 0.35)";
    ctx.beginPath();
    ctx.ellipse(x + w / 2, WORLD.groundY + 2, (w / 2) * shadowScale, 4 * shadowScale, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(sprite.canvas, Math.round(x), Math.round(this.y - h + bob), w, h);
  }
}
