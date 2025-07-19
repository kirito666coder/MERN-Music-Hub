import { Router } from 'express'
import { createAlbumController } from '../controllers/album.controller.js';

const AlbumRouter = Router();

AlbumRouter.post('/create',createAlbumController)

export default AlbumRouter;