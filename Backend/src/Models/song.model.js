import {model, Schema} from 'mongoose'

const SongSChema = new Schema({

})


const SongModel = model("Songs",SongSChema);
export default SongModel;