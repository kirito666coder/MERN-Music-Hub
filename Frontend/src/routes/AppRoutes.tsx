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
import EditProfile from "@/components/Page/Settings/AcountSettings/EditProfile"
import Logoutpage from "@/components/Page/ProfilePage/Logoutpage/Logoutpage"


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

        <Route path="/settings" element={<Setting/>}>
          <Route path="editProfile" element={<EditProfile/>}/>
          <Route path="manageSongs" element={<div>🎵 Manage Songs Page</div>} />
          <Route path="manageAlbums" element={<div>💿 Manage Albums</div>} />
          <Route path="manageArtists" element={<div>🎤 Manage Artists</div>} />
          <Route path="likedSongs" element={<div>❤️ Liked Songs</div>} />
          <Route path="playlists" element={<div>📂 Playlists</div>} />
          <Route path="theme" element={<div>🎨 Theme</div>} />
          <Route path="notifications" element={<div>🔔 Notifications</div>} />
          <Route path="language" element={<div>🌍 Language</div>} />
          <Route path="privacyControls" element={<div>🔒 Privacy Controls</div>} />
          <Route path="connectedDevices" element={<div>📱 Connected Devices</div>} />
          <Route path="logoutDevices" element={<Logoutpage/>} />
          <Route path="changePassword" element={<div>🔑 Change Password</div>} />
          <Route path="deleteAccount" element={<div>🗑️ Delete Account</div>} />
        </Route>


        <Route path="/notification" element={<Notification/>}/>

        <Route path="/artist/:slugAndId" element={<Artist/>}/>
        
        </Route>

        
      {/* Catch-all for 404 */}
      <Route path="*" element={<NotFoundPage />} />

    </Routes>
  )
}

export default AppRoutes
