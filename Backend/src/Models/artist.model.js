import { model, Schema, Types } from 'mongoose'

const ArtistSchema = new Schema({
    userId: {
        type: Types.ObjectId,
        ref: 'user',
        required: true,
        unique: true,
      },
      name: {
        type: String,
        required: true,
        trim: true,
      },
      bio: {
        type: String,
        default: "",
      },
      photoUrl: {
        type: String,
        default: "",
      },
      genres: {
        type: [String],
        default: [],
      },
      socialLinks: {
        type: Map,
        of: String,
        default: {},
      },
      location: {
        type: String,
        default: "",
      },
      isVerified: {
        type: Boolean,
        default: false,
      },
    }, { timestamps: true });

const ArtistModel = model("Artist",ArtistSchema)

export default ArtistModel;