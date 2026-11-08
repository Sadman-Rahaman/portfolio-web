import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name}: computer science, business and building things`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default social card: flat paper ground (no gradients), name, hero statement, role. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#F4F4EF",
          color: "#17201B",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, color: "#59625D" }}>
          <div style={{ width: 16, height: 16, borderRadius: 999, background: "#1E4D3A" }} />
          {site.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 60, fontWeight: 400, lineHeight: 1.1 }}>
          <div>I'm a computer science student</div>
          <div>who enjoys building things, taking</div>
          <div>initiative and bringing people together.</div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#59625D" }}>
          Computer Science, BRAC University · Minor in Business
        </div>
      </div>
    ),
    size,
  );
}
