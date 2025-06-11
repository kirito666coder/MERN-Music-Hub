import { Outlet } from "react-router-dom"
import Header from "./Headers/Header"

const MainLayout = () => {
  return (
    <>
      <Header/>
      <nav>

      </nav>
      <Outlet/>
    </>
  )
}

export default MainLayout
