import passport from "passport";
import { google } from "./strategys/google-login.js";

google(passport)


export default passport;