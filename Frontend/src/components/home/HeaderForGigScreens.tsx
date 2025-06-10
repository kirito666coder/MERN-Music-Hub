import Logo from "./homeComponents/Logo"
import SearchBar from "./homeComponents/SearchBar"


const HeaderForGigScreens = () => {
  return (
    <div className="p-2 flex justify-around items-center gap-2">
      <Logo/>
      <SearchBar/>
    </div>
  )
}

export default HeaderForGigScreens
