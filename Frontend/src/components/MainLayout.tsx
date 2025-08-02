import { Outlet } from "react-router-dom"
import Header from "./Headers/Header"
import NavBar from "./NavBar/NavBar"
import SongPlayBar from "./MainLayoutComponents/SongPlayBar"
import GlobalAudioPlayer from "@/features/song/GlobalAudioPlayer"
import { useSelector } from "react-redux"
import type { RootState } from "@/app/store"

const MainLayout = () => {
  
  const {queue} = useSelector((state:RootState)=>state.song)
  
  return (
    <>
      <Header/>

      <div className="flex flex-col md:flex-row h-[91vh]">
        
        <nav className="order-2 md:order-1   md:h-full">
      <NavBar/>
        </nav>

        <main className="flex-1 order-1 md:order-2 flex flex-col overflow-hidden relative">
          <div className="flex-1 overflow-y-auto scroll-smooth [scrollbar-width:0] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      <Outlet/>
          </div>
         {/* Animate visibility */}
         <div
            className={`transition-all duration-500 ${
              queue.length > 0 ? 'translate-y-0 opacity-100 h-19' : 'translate-y-full opacity-0 h-0'
            }`}
          >
            <SongPlayBar />
          </div>
        </main>
        
      </div>
        <GlobalAudioPlayer/>
    </>
  )
}

export default MainLayout
