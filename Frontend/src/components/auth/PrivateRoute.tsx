import { useSelector } from "react-redux"
import type { RootState } from "../../app/store"
import { Navigate } from "react-router-dom"

const PrivateRoute = ({children}:{children:JSX.Element}) => {
  const {user,loading} = useSelector((state:RootState)=>state.user)
   console.log("user",user)
   if(loading) return <div>Loading...</div>
   console.log("user",user)

  return user ? children : <Navigate to="/login"/>
  
}

export default PrivateRoute;
