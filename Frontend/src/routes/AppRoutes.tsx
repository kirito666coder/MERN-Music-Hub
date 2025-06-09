import { Route, Routes } from "react-router-dom"
import Login from "../pages/Login"
import Home from "../pages/home"
import PrivateRoute from "../components/auth/PrivateRoute"


const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/login" element={
            <Login/>
        }/>

        <Route path="/" element={
          <PrivateRoute>
            <Home/>
          </PrivateRoute>
        }/>


    </Routes>
  )
}

export default AppRoutes
