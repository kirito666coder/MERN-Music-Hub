
const LibraryiconSvg = ({active}:{active?:boolean}) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="grayBlue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#d1d5db" />
      <stop offset="100%" stop-color={`${active?"#3b82f6":""}`} />
    </linearGradient>
  </defs>

  <rect x="10" y="12" width="8" height="40" rx="1" fill="url(#grayBlue)" />

  <rect x="22" y="12" width="8" height="40" rx="1" fill="url(#grayBlue)" />

  <polygon points="36,12 44,12 54,52 46,52" fill="url(#grayBlue)" />
</svg>

  )
}

export default LibraryiconSvg
