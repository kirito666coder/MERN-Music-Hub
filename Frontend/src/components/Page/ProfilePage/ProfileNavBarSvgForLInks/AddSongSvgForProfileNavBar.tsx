import { useId } from "react";

const AddSongSvgForNavBar = ({ active }: { active?: boolean }) => {
  const uniqueId = useId(); // ensure gradient ID is unique
  const gradientId = `addSongGradient-${uniqueId}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="w-7 h-7"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={active ? "#f43f5e" : "currentColor"} />
          <stop offset="100%" stopColor={active ? "#3b82f6" : "currentColor"} />
        </linearGradient>
      </defs>

      {/* Plus Icon (Top Right) */}
      <path
        d="M21 20H11a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2Zm0-4H15a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2ZM19 8a1 1 0 0 1-1-1V6h-1a1 1 0 0 1 0-2h1V3a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2h-1v1a1 1 0 0 1-1 1Z"
        fill={`url(#${gradientId})`}
      />

      {/* Music Note Body */}
      <path
        d="M5 22a3 3 0 0 1-3-3 1 1 0 0 1 2 0 1 1 0 0 0 2 0v-1.91A4.73 4.73 0 0 1 2 12.5a4.4 4.4 0 0 1 3-4.31l1-.38V5a3 3 0 0 1 6 0 3.91 3.91 0 0 1-2.52 3.64L8 9.19v5.75a3.28 3.28 0 0 0 .64-.34A3.14 3.14 0 0 0 10 12a1 1 0 0 1 2 0 5.16 5.16 0 0 1-2.22 4.24A5.25 5.25 0 0 1 8 17v2a3 3 0 0 1-3 3ZM6 9.94l-.31.12A2.41 2.41 0 0 0 4 12.5 2.79 2.79 0 0 0 5.74 15L6 15ZM9 4a1 1 0 0 0-1 1v2.06l.78-.29A1.91 1.91 0 0 0 10 5a1 1 0 0 0-1-1Z"
        fill={`url(#${gradientId})`}
      />
    </svg>
  );
};

export default AddSongSvgForNavBar;
