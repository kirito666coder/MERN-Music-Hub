
import { Router } from "express";
import passport from "passport";
import { GoogleCallBack, profileController } from "../controllers/auth.controller.js";

const AuthRoute = Router()

AuthRoute.get('/google',
    passport.authenticate('google',{scope:['profile','email'],prompt: 'select_account' })
)

AuthRoute.get('/google/callback',
    passport.authenticate('google',{session:false}),
    GoogleCallBack
)

AuthRoute.get('/profile',
     passport.authenticate('jwt', { session: false }),
    profileController
)

app.get("/logout", (req, res) => {
    res.clearCookie("jwt"); 
    res.status(200).json({ message: "Logged out successfully" });
  });
  

export default AuthRoute;