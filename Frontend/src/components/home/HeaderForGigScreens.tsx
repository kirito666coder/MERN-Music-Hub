import SearchBar from "./homeComponents/SearchBar"


const HeaderForGigScreens = () => {
  return (
    <div className="p-2">
      <h1 className="text-gray-500 text-xl font-bold flex gap-0.5">
        <i>
        Hello
        </i>
        <span className="text-sky-400 font-normal">Music</span>
      </h1>
      <SearchBar/>
    </div>
  )
}

export default HeaderForGigScreens
