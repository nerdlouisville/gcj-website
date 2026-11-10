import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt = "Game Con Junction: Louisville's tabletop gaming convention, back in 2027";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Social share image, built at deploy time from the brand assets so it never
// carries a date. Replaces the old BizCard splash, which had the 2026 dates baked in.
export default async function OpenGraphImage() {
  const pub = path.join(process.cwd(), "public");
  const [logo, brushX, akira] = await Promise.all([
    readFile(path.join(pub, "images/logo-white.png")),
    readFile(path.join(pub, "images/brush-x.png")),
    readFile(path.join(pub, "fonts/AkiraExpanded.otf")),
  ]);
  const uri = (b: Buffer) => `data:image/png;base64,${b.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background: "#130e35",
        }}
      >
        <img
          src={uri(brushX)}
          width={600}
          height={600}
          alt=""
          style={{ position: "absolute", top: 15, left: 300, transform: "rotate(-2deg)" }}
        />
        <img src={uri(logo)} width={620} height={197} alt="" style={{ position: "absolute", top: 190, left: 290 }} />
        <div
          style={{
            position: "absolute",
            bottom: 34,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            fontFamily: "Akira",
            fontSize: 46,
            letterSpacing: 2,
            color: "#ffffff",
          }}
        >
          BACK IN 2027
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Akira", data: akira, style: "normal", weight: 700 }] },
  );
}
