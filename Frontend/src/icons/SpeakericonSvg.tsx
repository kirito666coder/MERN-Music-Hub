const SpeakericonSvg = ({ active }: { active?: boolean }) => {
  const gradientId = "speakerGradient" + (active ? "-active" : "-inactive");

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 64 64">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d1d5db" />
          <stop offset="100%" stopColor={active ? "#3b82f6" : ""} />
        </linearGradient>
      </defs>

      <path fill={`url(#${gradientId})`} d="M8 24v16h8l12 12V12L16 24H8z" />
      <path d="M36 28a6 6 0 0 1 0 8" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2" />
      <path d="M42 26a10 10 0 0 1 0 12" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2" />
      <path d="M48 22a14 14 0 0 1 0 20" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2" />
    </svg>
  );
};

export default SpeakericonSvg;

