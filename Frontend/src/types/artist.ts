export type ArtistFormFields = {
  name: string
  bio: string
  genres: string
  location: string
}

export interface artistSearch {
  photoUrl:string,
  name: string,
    _id: string,
  }


export interface Artist {
    _id: string
    userId: string
    name: string
    bio: string
    photoUrl: string
    genres: string[]
    socialLinks: Record<string, string>
    location: string
    isVerified: boolean
    createdAt: string
    updatedAt: string
  }

  
export interface CreateArtistPayload {
    name: string
    bio: string
    genres: string[]
    location: string
    photo?: File
  }
  