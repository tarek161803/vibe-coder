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
}

export function obstacleTop(o: Obstacle, time: number): number {
  return o.airborne ? o.y + Math.sin(time * 3 + o.bobPhase) * 3 : o.y;
}

export function obstacleHitbox(o: Obstacle, time: number): Rect {
  const inset = OBSTACLE.hitboxInset;
  return {
    x: o.x + inset,
    y: obstacleTop(o, time) + inset,
    w: o.size - inset * 2,
    h: o.size - inset * 2,
  };
}

type PickTech = () => TechInfo;

interface Pattern {
  id: string;
  /** Difficulty (0..1) at which the pattern starts appearing. */
  minDifficulty: number;
  weight: number;
  build: (x: number, pick: PickTech) => Obstacle[];
}

const S = OBSTACLE.size;

const ground = (tech: TechInfo, x: number, row = 0): Obstacle => ({
  tech,
  x,
  y: WORLD.groundY - S * (row + 1),
  size: S,
  airborne: false,
  bobPhase: 0,
  hit: false,
});

const flying = (tech: TechInfo, x: number): Obstacle => ({
  tech,
  x,
  y: WORLD.groundY - OBSTACLE.airClearance - OBSTACLE.airSize,
  size: OBSTACLE.airSize,
  airborne: true,
  bobPhase: Math.random() * Math.PI * 2,
  hit: false,
});

/** Obstacle formations. Add new ones here to vary gameplay. */
const PATTERNS: Pattern[] = [
  { id: "single", minDifficulty: 0, weight: 5, build: (x, pick) => [ground(pick(), x)] },
  { id: "double", minDifficulty: 0.1, weight: 3, build: (x, pick) => [ground(pick(), x), ground(pick(), x + S)] },
  { id: "flying", minDifficulty: 0.15, weight: 3, build: (x, pick) => [flying(pick(), x)] },
  { id: "stack", minDifficulty: 0.25, weight: 2, build: (x, pick) => [ground(pick(), x, 0), ground(pick(), x, 1)] },
  {
    id: "triple",
    minDifficulty: 0.45,
    weight: 1.5,
    build: (x, pick) => [ground(pick(), x), ground(pick(), x + S), ground(pick(), x + S * 2)],
  },
];

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

export class ObstacleSpawner {
  private distanceToNext = 0;
  private lastTechId: string | null = null;
  private technologies: TechInfo[] = [];
  private hazards: TechInfo[] = [];

  constructor(pool: TechInfo[]) {
    this.addToPool(pool);
  }

  addToPool(techs: TechInfo[]) {
    for (const tech of techs) (tech.kind === "hazard" ? this.hazards : this.technologies).push(tech);
  }

  reset() {
    this.distanceToNext = SPEED.start * OBSTACLE.firstSpawnDelay;
    this.lastTechId = null;
  }

  /** Advances by `dx` world units and returns any newly spawned obstacles. */
  update(dx: number, speed: number, difficulty: number, spawnX: number): Obstacle[] {
    this.distanceToNext -= dx;
    if (this.distanceToNext > 0) return [];

    const available = PATTERNS.filter((p) => difficulty >= p.minDifficulty);
    const pattern = weightedPick(available, (p) => p.weight);
    const spawned = pattern.build(spawnX, () => this.pickTech());

    const patternWidth = Math.max(...spawned.map((o) => o.x + o.size)) - spawnX;
    const minGap = lerp(OBSTACLE.gapEasy[0], OBSTACLE.gapHard[0], difficulty);
    const maxGap = lerp(OBSTACLE.gapEasy[1], OBSTACLE.gapHard[1], difficulty);
    this.distanceToNext = patternWidth + speed * lerp(minGap, maxGap, Math.random());

    return spawned;
  }

  private pickTech(): TechInfo {
    const source =
      this.hazards.length > 0 && Math.random() < OBSTACLE.hazardChance ? this.hazards : this.technologies;
    const pool = source.filter((t) => t.id !== this.lastTechId);
    const tech = weightedPick(pool, (t) => t.spawnWeight ?? 1);
    this.lastTechId = tech.id;
    return tech;
  }
}
