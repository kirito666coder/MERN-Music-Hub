
import { Router } from "express";
import passport from "passport";
import { GoogleCallBack } from "../controllers/auth.controller.js";

const AuthRoute = Router()

app.get('/google',
    passport.authenticate('google',{scope:['profile']})
)

app.get('/google/callback',
    passport.authenticate('google',{session:false}),
    GoogleCallBack
)

export default AuthRoute;