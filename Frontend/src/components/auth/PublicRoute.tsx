import { useSelector } from "react-redux"
import type { RootState } from "../../app/store"
import { Navigate } from "react-router-dom"

const PublicRoute = ({children}:{children:JSX.Element}) => {
  const {user,loading} = useSelector((state:RootState)=>state.user)
  
  return !user ? children : <Navigate to="/login"/>
  
}

export default PublicRoute;
