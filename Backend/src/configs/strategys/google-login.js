import GoogleStrategy from 'passport-google-oauth20'
import createUser  from '../../services/userCreate.service.js'

export const google = (passport)=>{

    const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
    const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET

    passport.use(new GoogleStrategy({
         clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/api/auth/google/callback"
    },
     async function(accessToken, refreshToken, profile, cb){
        try {

            const user = await createUser({
                email:profile.emails[0].value,
                providerId:profile.id,
                providerName:'googleId',
                profile
            })
            
            return cb (null,user)
        } catch (error) {
            return cb (null , error)
        }
     }

))
}