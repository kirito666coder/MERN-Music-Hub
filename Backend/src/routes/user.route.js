import { Router } from "express";
import { EditUserController } from "../controllers/user.controller.js";
import multer from "multer";

const userRoute = Router()

const storage = multer.memoryStorage();
const upload = multer({ storage });

userRoute.put("/edituser",upload.fields([
    { name: "profileImage", maxCount: 1 },
]),EditUserController)

export default userRoute;