/**
 * Pixel-art sprites for the vibe coder, defined as character grids.
 * Each character maps to a palette color; "." is transparent.
 */

const PALETTE: Record<string, string> = {
  h: "#3b2416", // hair
  H: "#6b4329", // hair highlight
  s: "#f1c27d", // skin
  S: "#d39a5c", // skin shadow
  e: "#1b1b2f", // eye
  g: "#22d3ee", // headphones
  G: "#0e7490", // headphones shade
  p: "#8b5cf6", // hoodie
  P: "#6d28d9", // hoodie shade
  w: "#f5f3ff", // hoodie strings
  j: "#1e40af", // jeans
  J: "#172554", // jeans shade
  k: "#f8fafc", // sneakers
  K: "#ef4444", // sneaker accent
};

const HEAD = [
  "....GggggggG....",
  "...GhhhhhhhhG...",
  "...hhHHhhhhhhh..",
  "..GGhhhhhssss...",
  "..ggGhhhsssess..",
  "..ggGhhsssssssS.",
  "..GGhhSsssssss..",
  "....hSSsssss....",
];

const TORSO_FORWARD = [
  "....pppppppp....",
  "...ppwpppwppp...",
  "...pPpwpppwppss.",
  "...pPppppppppss.",
  "...pPpppppppp...",
  "...PPPPPPPPPP...",
  "....jjjjjjjj....",
];

const TORSO_BACK = [
  "....pppppppp....",
  "...ppwpppwppp...",
  ".sspPpwpppwppp..",
  ".ssPPppppppppp..",
  "...pPpppppppp...",
  "...PPPPPPPPPP...",
  "....jjjjjjjj....",
];

const LEGS_STRIDE = [
  "...jjjjj.jjjj...",
  "..jjjJ....jjjj..",
  ".jjjJ......jjj..",
  ".jjJ.......jjj..",
  "kkkK.......kkkKK",
];

const LEGS_PASS = [
  "....jjjjjjjj....",
  "...JJjj..jjj....",
  ".kkJ.....jjj....",
  ".kK......jjj....",
  ".........kkkKK..",
];

const LEGS_JUMP = [
  "...jjjjjjjjjj...",
  "..jjjJ...jjjjj..",
  ".jjjJ.....kkkKK.",
  ".kkK............",
  "................",
];

const LEGS_IDLE = [
  "....jjjj.jjjj...",
  "....jjjJ.jjjJ...",
  "....jjj..jjj....",
  "....jjj..jjj....",
  "...kkkK.kkkKK...",
];

const SLIDE = [
  "...............GgggggG",
  "..............GhhhhhhG",
  "..............hhHhhhhh",
  "...pppppppp..GGhhhssss",
  "..ppwpppwpppggGhhsssess",
  ".pPpwpppwpppggGhsssssss",
  ".pPpppppppppGGhSsssss..",
  "..PPPPPPPPPPPsss.......",
  "..jjjjjjjjjjjss........",
  ".jjjJ....jjjjjjj.......",
  "kkkK.........jjjj......",
  ".............kkkKK.....",
];

export interface Sprite {
  canvas: HTMLCanvasElement;
  /** Size in sprite pixels. */
  width: number;
  height: number;
}

function buildSprite(rows: string[], tint?: string): Sprite {
  const width = Math.max(...rows.map((row) => row.length));
  const height = rows.length;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d")!;
  rows.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      const color = PALETTE[row[x]];
      if (!color) continue;
      ctx.fillStyle = tint ?? color;
      ctx.fillRect(x, y, 1, 1);
    }
  });
  return { canvas, width, height };
}

export interface PlayerSprites {
  runA: Sprite;
  runB: Sprite;
  jump: Sprite;
  idle: Sprite;
  slide: Sprite;
  /** White silhouettes used for the hit flash. */
  flash: { run: Sprite; jump: Sprite; slide: Sprite };
}

export function createPlayerSprites(): PlayerSprites {
  const runA = [...HEAD, ...TORSO_FORWARD, ...LEGS_STRIDE];
  const runB = [...HEAD, ...TORSO_BACK, ...LEGS_PASS];
  const jump = [...HEAD, ...TORSO_BACK, ...LEGS_JUMP];
  const idle = [...HEAD, ...TORSO_FORWARD, ...LEGS_IDLE];
  return {
    runA: buildSprite(runA),
    runB: buildSprite(runB),
    jump: buildSprite(jump),
    idle: buildSprite(idle),
    slide: buildSprite(SLIDE),
    flash: {
      run: buildSprite(runA, "#ffffff"),
      jump: buildSprite(jump, "#ffffff"),
      slide: buildSprite(SLIDE, "#ffffff"),
    },
  };
}
