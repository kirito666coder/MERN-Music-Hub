import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import UserModel from '../../Models/user.model.js'

const cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['token'];
  }
  return token;
}

const opts = {
  jwtFromRequest: ExtractJwt.fromExtractors([
    ExtractJwt.fromAuthHeaderAsBearerToken(),
    cookieExtractor
  ]),
  secretOrKey: process.env.JWT_SECRET
}

export const passportJwt = (passport) => {
  passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
      try {
        const user = await UserModel.findById(jwt_payload._id)
        if (user) return done(null, user)
        return done(null, false)
      } catch (err) {
        return done(err, false)
      }
    })
  )
}
