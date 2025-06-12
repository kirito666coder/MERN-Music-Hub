const SongIconSvg = ({ active }: { active?: boolean }) => {
  const gradientId = "songGradient" + (active ? "-active" : "-inactive");

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
      stroke="currentColor" className="w-9 h-9">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d1d5db" />
          <stop offset="100%" stopColor={active ? "#3b82f6" : ""} />
        </linearGradient>
      </defs>
      <path stroke={`url(#${gradientId})`} strokeLinecap="round" strokeLinejoin="round"
        d="M9 18.75a3.75 3.75 0 1 1-3.75-3.75M9 18.75V6.562a.75.75 0 0 1 .577-.73l9-2.25a.75.75 0 0 1 .946.73v10.94a3.75 3.75 0 1 1-1.5-2.988V5.35L9 7.712v11.038z" />
    </svg>
  );
};

export default SongIconSvg;
