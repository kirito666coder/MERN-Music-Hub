import passport from "passport";
import { google } from "./strategys/google-login.js";
import passportJwt from "./strategys/passport-jwt.js";

google(passport)

passportJwt(passport)

export default passport;