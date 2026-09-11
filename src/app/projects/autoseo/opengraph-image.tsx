import { ImageResponse } from "next/og";

export const alt = "AutoSEO Case Study | AI SEO & Marketing Automation";
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
        <div style={{ fontSize: 26, color: "#a3a3a3", marginBottom: 24 }}>
          BILAL AHMED · CASE STUDY
        </div>
        <div style={{ fontSize: 54, fontWeight: 800, lineHeight: 1.08 }}>
          AutoSEO Case Study | AI SEO & Marketing Automation
        </div>
      </div>
    ),
    size,
  );
}
