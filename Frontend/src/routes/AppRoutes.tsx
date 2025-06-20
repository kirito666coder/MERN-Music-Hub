import { Route, Routes } from "react-router-dom"
import Login from "../pages/Login"
import Home from "../pages/home"
import PrivateRoute from "../components/auth/PrivateRoute"
import PublicRoute from "../components/auth/PublicRoute"
import MainLayout from "../components/MainLayout"
import Genre from "../pages/Genre"
import Library from "../pages/Library"
import LikedSong from "../pages/LikedSong"
import Profile from "@/pages/Profile"


const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/login" element={
          <PublicRoute>
            <Login/>
          </PublicRoute>
        }/>

        <Route element={
          <PrivateRoute>
          <MainLayout/>
          </PrivateRoute>
          }>
            
        <Route index element={<Home/>}/>
        <Route path="/genre" element={<Genre/>}/>
        <Route path="/library" element={<Library/>}/>
        <Route path="/liked" element={<LikedSong/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        </Route>

    </Routes>
  )
}

export default AppRoutes
