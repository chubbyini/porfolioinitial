import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
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
          backgroundColor: "#090D16",
          borderRadius: "8px",
          border: "1.5px solid #F59E0B",
          position: "relative",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="60" cy="60" r="50" stroke="#F59E0B" strokeWidth="6" />
          <circle cx="60" cy="60" r="38" stroke="#FBBF24" strokeWidth="2.5" strokeDasharray="4 6" strokeOpacity="0.7" />
          <polygon points="60,20 67,53 60,60 53,53" fill="#F59E0B" />
          <polygon points="60,100 67,67 60,60 53,67" fill="#B45309" />
          <polygon points="100,60 67,67 60,60 67,53" fill="#FBBF24" />
          <polygon points="20,60 53,67 60,60 53,53" fill="#D97706" />
          <circle cx="60" cy="60" r="7" fill="#090D16" stroke="#F59E0B" strokeWidth="2" />
          <circle cx="60" cy="60" r="3" fill="#FFFFFF" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
