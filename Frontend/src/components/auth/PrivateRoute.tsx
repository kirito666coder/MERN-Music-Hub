import { useSelector } from "react-redux"
import type { RootState } from "../../app/store"
import { Navigate } from "react-router-dom"

const PrivateRoute = ({children}:{children:JSX.Element}) => {
  const {user,loading} = useSelector((state:RootState)=>state.user)

  if(loading) return <div>Loading...</div>

  return user ? children : <Navigate to="/login"/>
  
}

export default PrivateRoute;
