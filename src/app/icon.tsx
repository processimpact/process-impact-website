import { ImageResponse } from "next/og";

// Placeholder monogram favicon in brand colors. Replace with a square crop of the logo when available.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 34,
          fontWeight: 700,
          borderRadius: 12,
        }}
      >
        PI
      </div>
    ),
    size
  );
}
