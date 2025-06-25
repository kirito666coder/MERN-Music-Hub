import { Router } from "express";
import { AddSongController } from "../controllers/song.controller.js";
import multer from 'multer'

const SongRouter = Router()

const storage = multer.memoryStorage();
const upload = multer({
    storage,
})

SongRouter.post('/addSong',
    upload.fields([
        { name: "audioFile", maxCount: 1 },
        { name: "imageFile", maxCount: 1 },

    ]),
    AddSongController)

export default SongRouter;