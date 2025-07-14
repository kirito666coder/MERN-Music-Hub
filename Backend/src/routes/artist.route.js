import { Router } from "express";
import { SearchArtistController } from "../controllers/artist.controller.js";
import { searchArtistLimiter } from "../middlewares/rateLimiters.js";

const ArtistRouder = Router()

ArtistRouder.get('/search',searchArtistLimiter,SearchArtistController)

export default ArtistRouder;