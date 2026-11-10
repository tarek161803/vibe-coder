import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Vibe Coder: a neon pixel endless runner where every crash is a lesson";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Social share card: the pixel runner icon beside the logo and tagline, on the game's neon backdrop. */
export default async function Image() {
  const icon = await readFile(join(process.cwd(), "src/app/icon.svg"));
  const iconSrc = `data:image/svg+xml;base64,${icon.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 64,
          padding: "0 80px",
          color: "#e2e8f0",
          background:
            "radial-gradient(900px 480px at 50% -10%, rgba(124,58,237,0.45), transparent 70%), radial-gradient(700px 420px at 100% 100%, rgba(236,72,153,0.22), transparent 70%), radial-gradient(700px 420px at 0% 100%, rgba(34,211,238,0.2), transparent 70%), #05060d",
        }}
      >
        <img src={iconSrc} width={300} height={300} alt="" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 108,
              fontWeight: 800,
              letterSpacing: -2,
              backgroundImage: "linear-gradient(90deg, #f0abfc, #a78bfa 45%, #67e8f9)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            VIBE_CODER
          </div>
          <div style={{ display: "flex", marginTop: 12, fontSize: 34, letterSpacing: 6, color: "#67e8f9" }}>
            {"// EVERY CRASH IS A LESSON"}
          </div>
          <div style={{ display: "flex", marginTop: 36, maxWidth: 640, fontSize: 30, lineHeight: 1.4, color: "#cbd5e1" }}>
            Jump and slide past React, Docker, Git and 1,100+ technologies. Crash into one and learn what it is.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
