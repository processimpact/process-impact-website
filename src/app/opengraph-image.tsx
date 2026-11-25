import { ImageResponse } from "next/og";

export const alt = "Process Impact: ICS/OT Offensive Security & Training";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#dcd6d1",
          color: "#18181b",
        }}
      >
        <div style={{ width: 120, height: 12, background: "#a51a15", marginBottom: 48 }} />
        <div style={{ fontSize: 96, fontWeight: 700, color: "#a51a15", lineHeight: 1 }}>Process Impact</div>
        <div style={{ fontSize: 48, marginTop: 32 }}>ICS/OT Offensive Security &amp; Training</div>
        <div style={{ fontSize: 30, marginTop: 40, color: "#56565d" }}>
          Penetration testing, purple teaming and training for critical infrastructure
        </div>
      </div>
    ),
    size
  );
}
