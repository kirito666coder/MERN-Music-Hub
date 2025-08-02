import { Router } from "express";
import { AddSongController, GetAllSongControllere, GetSimilarSongController, GetStreamSongController } from "../controllers/song.controller.js";
import multer from 'multer'

const SongRouter = Router()

const storage = multer.memoryStorage();
const upload = multer({
    storage,
})

SongRouter.post('/addSong',
    upload.fields([
        { name: "audioUrl", maxCount: 1 },
        { name: "coverUrl", maxCount: 1 },

    ]),
    AddSongController)


SongRouter.get("/getAllSongs",
    GetAllSongControllere)

SongRouter.get('/stream/:songId',
    GetStreamSongController
)

SongRouter.get('/:id/similar',GetSimilarSongController)

export default SongRouter;