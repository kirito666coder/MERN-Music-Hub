
import { Router } from "express";
import AuthRoute from "./auth.route.js";
import SongRouter from "./song.route.js";
import passport from "passport";
import ArtistRouder from "./artist.route.js";
import { ratelimiter } from "../middlewares/rateLimiters.js";


const AllRoutes = Router()

AllRoutes.use('/auth',
    ratelimiter,
    AuthRoute)

AllRoutes.use('/song',
    ratelimiter,
    passport.authenticate('jwt', { session: false }),
    SongRouter)

AllRoutes.use('/artist',
    passport.authenticate('jwt', { session: false }),
    ArtistRouder)

export default AllRoutes;