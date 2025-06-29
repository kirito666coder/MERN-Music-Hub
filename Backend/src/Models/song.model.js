import {model, Schema} from 'mongoose'

const SongSchema = new Schema({
    userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  artist: {
    type: String,
    required: true,
    trim: true,
  },
  album: {
    type: String,
    trim: true,
    default: "Single"
  },
  genre: {
    type: [String],
    default: [],
  },
  language: {
    type: String,
    default: "Unknown",
  },
  lyrics: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  releaseDate: {
    type: Date,
    default: Date.now,
  },
  duration: {
    type: Number, // in seconds
    required: true,
  },
  audioUrl: {
    type: String,
    required: true,
  },
  coverUrl: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  isPublic: {
    type: Boolean,
    default: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  plays: {
    type: Number,
    default: 0,
  },
  downloads: {
    type: Number,
    default: 0,
  },
  visibility: {
    type: String,
    enum: ["public", "private", "unlisted"],
    default: "public"
  },
  mood: {
    type: String,
    enum: ["happy", "sad", "chill", "energetic", "romantic", "angry", "none"],
    default: "none"
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});



const SongModel = model("Songs",SongSchema);
export default SongModel;