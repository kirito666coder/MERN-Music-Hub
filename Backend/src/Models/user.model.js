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
})

const UserModel = model('user',UserSchema)
export default UserModel;