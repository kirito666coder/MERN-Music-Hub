import { useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "./app/store"
import { fetchUser } from "./features/user/userSlice"

const App = () => {
  const dispatch = useDispatch<AppDispatch>()
   const {user,loading} = useSelector((state:RootState)=>state.user)
   useEffect(() => {
     dispatch(fetchUser())
   }, [dispatch])
   
   
   if(loading) return <div>Loading...</div>;
   console.log("user",user)


  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
