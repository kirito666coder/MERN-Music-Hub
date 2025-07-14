import { Router } from "express";
import { SearchArtistController } from "../controllers/artist.controller.js";

const ArtistRouder = Router()

ArtistRouder.get('/search',SearchArtistController)

export default ArtistRouder;