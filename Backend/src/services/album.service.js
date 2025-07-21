

export const CreateAlbumService = async ({data,artistId}) =>{

    if (!artistId) {
        throw new Error("ArtistID is missing")
    }
    if (!data) {
        throw new Error("data is missing")
    }

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        throw new Error("Invalid user ID");
    }

    try {
        
    } catch (error) {
        throw new Error ('Failled to create album ')
    }
}