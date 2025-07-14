import rateLimit from 'express-rate-limit'

export const ratelimiter =  rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 100,
    message:"Too many requests from this IP, please try again later."
})

export const searchArtistLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, 
    max: 200,        
    message: {
      success: false,
      message: "Too many search requests, please slow down."
    }
  });