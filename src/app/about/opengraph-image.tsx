import { ImageResponse } from "next/og";

export const alt = "About Bilal Ahmed";
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
        <div style={{ fontSize: 28, color: "#a3a3a3", marginBottom: 24 }}>BILAL AHMED</div>
        <div style={{ fontSize: 58, fontWeight: 800, lineHeight: 1.08 }}>About Bilal Ahmed</div>
      </div>
    ),
    size,
  );
}
