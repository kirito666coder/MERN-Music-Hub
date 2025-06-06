import GoogleStrategy from 'passport-google-oauth20'

export const google = (passport)=>{

    const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
    const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET

    passport.use(new GoogleStrategy({
         clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:300/api/auth/google/callback"
    },
     function(accessToken, refreshToken, profile, cb){
        try {
            
            
            return cb (null,user)
        } catch (error) {
            return cb (null , error)
        }
     }

))
}