import { model, Schema } from 'mongoose'

const UserSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    image:String,
    isArtist:{
      type:String,
      default:false,
    },
    googleId:{
        type:String,
        unique:true,
        sparse:true,
    },
    facebookId:{
        type:String,
        unique:true,
        sparse:true,
    },
    githubId:{
        type:String,
        unique:true,
        sparse:true,
    },
     isVerified: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    enum: ["user", "artist", "admin"],
    default: "user",
  },
  bio: {
    type: String,
    default: "",
  },
  location: {
    type: String,
    default: "",
  },
  socialLinks: {
    type: Map,
    of: String,
    default: {},
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const UserModel = model('user',UserSchema)
export default UserModel;