interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  gravity: number;
}

export interface BurstOptions {
  count: number;
  colors: string[];
  speed: [number, number];
  /** Emission angle range in radians (0 = right, -PI/2 = up). */
  angle: [number, number];
  life: [number, number];
  size: [number, number];
  gravity?: number;
}

const rand = ([min, max]: [number, number]) => min + Math.random() * (max - min);

export class ParticleSystem {
  private particles: Particle[] = [];

  burst(x: number, y: number, opts: BurstOptions) {
    for (let i = 0; i < opts.count; i++) {
      const angle = rand(opts.angle);
      const speed = rand(opts.speed);
      const life = rand(opts.life);
      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life,
        maxLife: life,
        size: Math.round(rand(opts.size)),
        color: opts.colors[i % opts.colors.length],
        gravity: opts.gravity ?? 900,
      });
    }
  }

  /** `scroll` moves particles with the world so dust stays on the ground. */
  update(dt: number, scroll = 0) {
    for (const p of this.particles) {
      p.life -= dt;
      p.vy += p.gravity * dt;
      p.x += p.vx * dt - scroll;
      p.y += p.vy * dt;
    }
    this.particles = this.particles.filter((p) => p.life > 0);
  }

  draw(ctx: CanvasRenderingContext2D) {
    for (const p of this.particles) {
      ctx.globalAlpha = Math.max(0, p.life / p.maxLife);
      ctx.fillStyle = p.color;
      ctx.fillRect(Math.round(p.x), Math.round(p.y), p.size, p.size);
    }
    ctx.globalAlpha = 1;
  }

  clear() {
    this.particles = [];
  }
}
