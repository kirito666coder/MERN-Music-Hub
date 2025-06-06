import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import UserModel from '../Models/user.model.js'

const opts = {
  jwtFromRequest: ExtractJwt.fromExtractors([
    ExtractJwt.fromAuthHeaderAsBearerToken(),
    ExtractJwt.fromCookie('token')  // to extract from cookie if you want
  ]),
  secretOrKey: process.env.JWT_SECRET
}

export default (passport) => {
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
