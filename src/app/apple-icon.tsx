import { ImageResponse } from "next/og";

// Placeholder monogram favicon in brand colors. Replace with a square crop of the logo when available.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#a51a15",
          color: "#ffffff",
          fontSize: 96,
          fontWeight: 700,
          borderRadius: 0,
        }}
      >
        PI
      </div>
    ),
    size
  );
}
