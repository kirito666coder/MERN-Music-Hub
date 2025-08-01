
const AlbumPlaysongButton = () => {
  return (
    <button
    onClick={()=>{
        console.log('click inside album playsong button')
    }}
    className=" cursor-pointer w-13 h-13 flex items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-[#f43f5e] to-[#3b82f6] hover:brightness-110 transition-all duration-300">
        <svg
          className="w-7 h-7 fill-white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="5,3 19,12 5,21" />
        </svg>
      </button>
  )
}

export default AlbumPlaysongButton
