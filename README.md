# Vibe Coder

A developer-themed endless runner inspired by the Chrome Dino game. Jump over and slide under
more than 1,100 technologies and computer science concepts (React, Kubernetes, Rust, PyTorch, Raft,
RISC-V…) and developer hazards (bugs, merge conflicts, CORS errors…). When you crash, the game shows a short lesson about whatever you hit.

Built with Next.js (App Router), TypeScript, Tailwind CSS and HTML5 Canvas. Everything runs on the
client. The only thing it stores is your high score and discovered entries, in `localStorage`.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Controls

| Action | Keyboard            | Touch            |
| ------ | ------------------- | ---------------- |
| Jump   | `Space` / `↑` / `W` | Tap              |
| Slide  | `↓` / `S`           | Swipe down       |
| Pause  | `P` / `Esc`         | Pause button     |
| Retry  | `Space` / `Enter`   | Try Again button |

Hold jump to jump higher. Stacked obstacles need a full jump. Pressing slide in mid-air drops you
to the ground faster.

## Project structure

```
src/
  app/                          Next.js layout, page, global styles and fonts
  components/
    VibeCoderGame.tsx           Mounts the engine; keyboard/touch input, sizing, overlays
    LessonModal.tsx             The lesson shown after a crash
    GameControls.tsx            Control hints and the pause button under the game
    TechLogo.tsx                Renders an obstacle's logo in the UI
  content/                      ★ Everything the player learns about (no game logic)
    index.ts                    Entry point: STARTER_OBSTACLES and loadCatalog()
    types.ts                    TechInfo, CatalogEntry, BrandIcon
    coreTechnologies.ts         23 well-known technologies, available from the first run
    hazards.ts                  Bugs, merge conflicts, CORS errors…
    catalog/                    ~1,100 more entries, one file per topic (lazy-loaded)
      programmingLanguages.ts, databases.ts, networking.ts, …
    logos.ts                    Builds logo SVGs: Simple Icons tiles and text badges
    brandIcons/*.generated.ts   Logos copied from Simple Icons by `npm run icons`
  game/                         The engine (knows nothing about specific technologies)
    engine.ts                   Game loop, state machine, collisions, HUD
    config.ts                   Tuning: physics, speed curve, spawn gaps, scoring
    types.ts                    Shared engine types
    entities/
      player.ts                 Player physics, hitboxes, animation
      obstacles.ts              Obstacle formations and the spawner
      particles.ts              Dust, crash burst, speed trail
    rendering/
      background.ts             Sky and stars; layers the clouds, city and road
      clouds.ts                 A few soft night clouds drifting behind the city
      skyline.ts                Developer city: server racks, code screens, neon signs, antennas
      road.ts                   Neon perspective grid floor (the running surface)
      character.ts              The vibe coder: vector drawing and animated poses
      logoAtlas.ts              Loads and caches obstacle logos for the canvas
  lib/
    progress.ts                 High score and discovered entries (localStorage)
scripts/
  generate-brand-icons.mts      Matches entries to Simple Icons and writes brandIcons/
```

## Adding a technology or hazard

The quickest way is to add an entry to the matching topic file in `src/content/catalog/`. The
format is `CatalogEntry` in `src/content/types.ts`. Then run:

```bash
npm run icons             # pull logos from Simple Icons for any new names
npm run icons -- --report # see which names matched and which didn't
```

If the name matches a [Simple Icons](https://simpleicons.org) title, the entry gets the real logo.
If not, it gets a text badge built from its `abbr` (1–2 characters, so it stays readable while moving) and `color`. For names that
differ, add to `ALIASES` in `scripts/generate-brand-icons.mts`. If the name matches a different
product (for example GNU Make and the Make automation platform), add it to `BLOCKLIST` there.

Core technologies live in `src/content/coreTechnologies.ts` and use `logo: brand("<id>")`.
Hazards live in `src/content/hazards.ts` and use a text badge, `logo: badgeLogo("BG", "#ef4444")`:

```ts
{
  id: "rust",
  name: "Rust",
  kind: "technology",          // or "hazard" for bugs, errors, etc.
  category: "Programming Language",
  color: "#f74c00",
  logo: brand("rust"),
  description: "…",
  highlights: ["…"],           // "What it's used for" (or "How to deal with it" for hazards)
  funFact: "…",
  url: "https://www.rust-lang.org",
  spawnWeight: 1,              // optional
}
```

That's all you need to do. The new entry starts spawning in the game and gets its own lesson modal.

To add a new obstacle formation, add an entry to `PATTERNS` in `src/game/entities/obstacles.ts`.

## Credits

Technology logos come from [Simple Icons](https://simpleicons.org) (CC0). The logos themselves are
trademarks of their respective owners.
