import { Router } from 'express'
import { createAlbumController, getYourAlbumsController } from '../controllers/album.controller.js';
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


AlbumRouter.get('/youralbum',getYourAlbumsController)     

export default AlbumRouter;