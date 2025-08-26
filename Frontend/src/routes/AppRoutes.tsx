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
import AddSongPage from "@/pages/AddSongs"
import Setting from "@/pages/Setting"
import AlbumPage from "@/pages/AlbumPage"
import Notification from "@/pages/Notification"
import NotFoundPage from "@/components/404Page/NotFoundPage"
import Artist from "@/pages/Artist"
import ProfileComponent from "@/components/Page/ProfilePage/ProfileData/ProfileComponent"
import SearchPage from "@/pages/SearchPage"


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
        <Route path="/library/album/:slugAndId" element={<AlbumPage/>}/>
        
        <Route path="/liked" element={<LikedSong/>}/>
        
        <Route path="/Profile" element={<Profile/>}>
        <Route index element={<ProfileComponent/>}/>
        <Route path="/Profile/addSongs" element={<AddSongPage/>}/>
        </Route>

        <Route path="/search/:slug" element={<SearchPage/>}/>

        <Route path="/settings" element={<Setting/>}/>
        <Route path="/notification" element={<Notification/>}/>

        <Route path="/artist/:slugAndId" element={<Artist/>}/>
        
        </Route>

        
      {/* Catch-all for 404 */}
      <Route path="*" element={<NotFoundPage />} />

    </Routes>
  )
}

export default AppRoutes
