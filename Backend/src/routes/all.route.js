
import { Router } from "express";
import AuthRoute from "./auth.route.js";
import SongRouter from "./song.route.js";
import passport from "passport";

const AllRoutes = Router()

AllRoutes.use('/auth',
    AuthRoute)

AllRoutes.use('/song',
    passport.authenticate('jwt', { session: false }),
    SongRouter)

AllRoutes.use('/artist',
    passport.authenticate('jwt', { session: false }),
)

export default AllRoutes;