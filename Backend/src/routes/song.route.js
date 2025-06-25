import { Router } from "express";
import { AddSongController } from "../controllers/song.controller.js";

const SongRouter = Router()

SongRouter.post('/addSong',AddSongController)

export default SongRouter;