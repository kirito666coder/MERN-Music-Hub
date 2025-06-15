import { Outlet } from "react-router-dom"
import Header from "./Headers/Header"
import NavBar from "./NavBar/NavBar"

const MainLayout = () => {
  return (
    <>
      <Header/>

      <div className="flex flex-col md:flex-row h-[91vh]">
        
        <nav className="order-2 md:order-1 w-full md:w-35 md:h-full">
      <NavBar/>
        </nav>

        <main className="flex-1 order-1 md:order-2 overflow-y-scroll [scrollbar-width:0] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      <Outlet/>
        </main>
        
      </div>

    </>
  )
}

export default MainLayout
