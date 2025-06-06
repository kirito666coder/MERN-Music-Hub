
import { Router } from "express";
import passport from "passport";
import { GoogleCallBack } from "../controllers/auth.controller.js";

const AuthRoute = Router()

AuthRoute.get('/google',
    passport.authenticate('google',{scope:['profile','email']})
)

AuthRoute.get('/google/callback',
    passport.authenticate('google',{session:false}),
    GoogleCallBack
)

export default AuthRoute;