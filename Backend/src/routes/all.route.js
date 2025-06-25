
import { Router } from "express";
import AuthRoute from "./auth.route.js";
import SongRouter from "./song.route.js";

const AllRoutes = Router()

AllRoutes.use('/auth',AuthRoute)
AllRoutes.use('/song',SongRouter)

export default AllRoutes;