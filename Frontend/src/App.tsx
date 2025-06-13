import { useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"
import { useDispatch} from "react-redux"
import type { AppDispatch } from "./app/store"
import { fetchUser } from "./features/user/userSlice"
import { ThemeProvider } from "./components/theme-provider"

const App = () => {
  const dispatch = useDispatch<AppDispatch>()
   useEffect(() => {
     dispatch(fetchUser())
   }, [dispatch])
   
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
