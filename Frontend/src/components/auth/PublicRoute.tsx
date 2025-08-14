import { useSelector } from "react-redux"
import type { RootState } from "../../app/store"
import { Navigate } from "react-router-dom"
import LoadingPageForAuth from "../loading/LoadingPageForAuth"

const PublicRoute = ({children}:{children:JSX.Element}) => {
  const {user,loading} = useSelector((state:RootState)=>state.user)
  
  if(loading) return  <LoadingPageForAuth/>

  return !user ? children : <Navigate to="/"/>
  
}

export default PublicRoute;
