import { Router } from 'express'
import { createAlbumController } from '../controllers/album.controller.js';
import multer from 'multer';

const AlbumRouter = Router();

const storage = multer.memoryStorage();
const upload = multer({
    storage,
})

AlbumRouter.post('/create',
    upload.fields([
        {name:'cover',maxCount:1}
    ]),
     createAlbumController)

export default AlbumRouter;