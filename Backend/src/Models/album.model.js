import { model, Schema } from "mongoose";


const AlbumSchema = new Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    artistId:{
        type:Schema.Types.ObjectId,
        ref:"Artist",
        required:true,
    },
    coverUrl:{
        type:String,
        default:'',
    },
    description:{
        type:String,
        default:'',
    },
    releaseDate:{
        type:Date,
        default:Date.now,
    },
    genres:{
        type:[String],
        default:[],
    },
    songs:[
        {
            type:Schema.Types.ObjectId,
            ref:'Songs',
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now,
    },
});

const AlbumModel = model('Album',AlbumSchema);
export default AlbumModel;