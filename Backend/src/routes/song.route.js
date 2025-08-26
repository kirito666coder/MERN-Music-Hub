import { Router } from "express";
import { AddSongController, GetAllSongControllere, getLikesongsController, GetPopularSongsController, GetSimilarSongController, GetStreamSongController, GetYouSongsController, SearchForSongsController, UpdateLikeController } from "../controllers/song.controller.js";
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

SongRouter.patch('/:songid/like',UpdateLikeController)

SongRouter.get('/likesong',getLikesongsController)

SongRouter.get('/popularsongs',GetPopularSongsController)

SongRouter.get('/search',SearchForSongsController)

SongRouter.get("/song",GetYouSongsController)

export default SongRouter;