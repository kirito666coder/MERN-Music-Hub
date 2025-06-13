
const LikeIconSvg = ({active}:{active?:boolean}) => {
    const gradientId = "likeGradient" + (active ? "-active" : "-inactive")

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none">
  <defs>
    <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
     <stop offset="0%" stopColor={active ? "#f43f5e" : ""} />
      <stop offset="100%" stop-color={`${active?"#3b82f6":""}`} />
    </linearGradient>
  </defs>

  <path
    fill={`url(#${gradientId})`}
    d="M12 21c-.5 0-1-.2-1.4-.6C6 16.2 3 13.3 3 9.8 3 7.3 5 5.3 7.5 5.3c1.6 0 3.2.9 4.1 2.3
       .9-1.4 2.5-2.3 4.1-2.3C18.9 5.3 21 7.3 21 9.8c0 3.5-3 6.4-7.6 10.6-.4.4-.9.6-1.4.6z"
  />
</svg>

  )
}

export default LikeIconSvg
