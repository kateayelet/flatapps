import { ImageResponse } from "next/og";

export const alt = "Flatapps — The file is the truth.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#101E3A",
          color: "#F2EDE6",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", gap: 18 }}>
          <div
            style={{
              width: 78,
              height: 88,
              borderRadius: 20,
              background: "#F2EDE6",
            }}
          />
          <div
            style={{
              width: 78,
              height: 88,
              borderRadius: 20,
              background: "#00E5CC",
            }}
          />
          <div
            style={{
              width: 78,
              height: 88,
              borderRadius: 20,
              background: "#F2EDE6",
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 68,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
            }}
          >
            The file is the truth.
          </div>
          <div
            style={{
              marginTop: 18,
              color: "#C4BDB2",
              fontSize: 28,
              letterSpacing: "-0.02em",
            }}
          >
            Flatapps · flatapp.is · the app is a tool
          </div>
        </div>
      </div>
    ),
    size,
  );
}
