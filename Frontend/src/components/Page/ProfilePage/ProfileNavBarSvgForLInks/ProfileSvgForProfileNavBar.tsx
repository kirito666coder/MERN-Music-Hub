
const ProfileSvgForProfileNavBar = ({ active }: { active?: boolean }) => {
  const gradientId = "profileGradient" + (active ? "-active" : "-inactive");
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-9 h-9"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={active ? "#f43f5e" : "currentColor"} />
          <stop offset="100%" stopColor={active ? "#3b82f6" : "currentColor"} />
        </linearGradient>
      </defs>
      <path
        stroke={`url(#${gradientId})`}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0"
      />
    </svg>
  );
}

export default ProfileSvgForProfileNavBar

