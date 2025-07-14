import { Schema } from 'mongoose'

const ArtistSchema = new Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    bio:{
        type:String,
        default:"",
    },
    photoUrl:{
        type:String,
        default:"",
    },
    genres:{
        type:[String],
        default:[],
    },
    createAt:{
        type:Date,
        default:Date.now,
    },
});