import { Router } from "express";
import { CreateArtistController, SearchArtistController } from "../controllers/artist.controller.js";
import { searchArtistLimiter } from "../middlewares/rateLimiters.js";
import multer from "multer";

const ArtistRouder = Router()

const storage = multer.memoryStorage()
const upload = multer({
    storage,
})

ArtistRouder.get('/search',searchArtistLimiter,SearchArtistController)

ArtistRouder.post('/create',
    upload.fields([
        {name:"photo",maxCount:1},
    ]),
    CreateArtistController
)

export default ArtistRouder;