import { Outlet } from "react-router-dom"
import Header from "./Headers/Header"
import NavBar from "./NavBar/NavBar"

const MainLayout = () => {
  return (
    <>
      <Header/>
      <NavBar/>
      <Outlet/>
    </>
  )
}

export default MainLayout
