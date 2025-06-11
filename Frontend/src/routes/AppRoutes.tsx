import { Route, Routes } from "react-router-dom"
import Login from "../pages/Login"
import Home from "../pages/home"
import PrivateRoute from "../components/auth/PrivateRoute"
import PublicRoute from "../components/auth/PublicRoute"
import MainLayout from "../components/MainLayout"


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
            
        <Route path="/" element={<Home/>}/>

        </Route>

    </Routes>
  )
}

export default AppRoutes
