import { Router } from "express";

const userRoute = Router()

userRoute.put("/edituser",EditUserController)

export default userRoute;