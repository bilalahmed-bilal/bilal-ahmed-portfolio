import { ImageResponse } from "next/og";

export const alt = "Bilal Ahmed — Full-Stack Developer & SaaS Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0a0a0a",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#a3a3a3",
            marginBottom: 24,
          }}
        >
          BILAL AHMED
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.05,
          }}
        >
          Full-Stack Developer
          <br />& SaaS Builder
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 30,
            marginTop: 28,
            color: "#c4c4c4",
          }}
        >
          SaaS · AI · Automation · Business Systems
        </div>
      </div>
    ),
    size,
  );
}
