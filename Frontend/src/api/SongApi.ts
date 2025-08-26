import type { SongFields, SongData, MinimalSong } from "@/types/song";
import api from "./util/Api";
import type { ApiError } from "@/types/album";
import type { Artist } from "@/types/artist";

export const AddSongApi = async (song: SongFields): Promise<SongFields | ApiError> => {
  try {
    const formData = new FormData();

    // Append primitive fields
    formData.append("title", song.title);
    formData.append("artist", song.artist);
    formData.append("album", song.album);
    formData.append("language", song.language);
    formData.append("releaseDate", song.releaseDate);
    formData.append("lyrics", song.lyrics);
    formData.append("description", song.description);
    formData.append("isPublic", String(song.isPublic));
    formData.append("mood", song.mood);
    formData.append("duration", String(song.duration));

    // Append genre and tags arrays
    song.genre.forEach((g) => formData.append("genre", g));
    song.tags.forEach((t) => formData.append("tags", t));

    // Append files
    if (song.audioUrl) {
      formData.append("audioUrl", song.audioUrl);
    }

    if (song.coverUrl) {
      formData.append("coverUrl", song.coverUrl);
    }

    const res = await api.post("/api/song/addsong", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return res.data;
  } catch (error:any) {
    if (error.response && error.response.data) {
      return { error: true, message: error.response.data.message };
    }
    return { error: true, message: 'Something went wrong' };
  }
};


export const GetAllSongApi = async (): Promise<SongData[] | null> => {
  try {
    const res = await api.get("/api/song/getAllSongs")
    return res.data
  } catch (error) {
    console.log("Not Get any songs", error)
    return null;
  }
}


interface SongStreamResponse {
  songurl: string;
}


export const GetSong = async ({ songId }: { songId: string }): Promise<SongStreamResponse | null> => {
  try {
    const res = await api.get<SongStreamResponse>(`/api/song/stream/${songId}`)
    return res.data
  } catch (error) {
    console.log("Not Get any song Url", error)
    return null;
  }
}


export const GetsimilarSongApi = async({ songId }: { songId: string }): Promise<MinimalSong[]> =>{
  try {
    const res = await api.get<MinimalSong[]>(`/api/song/${songId}/similar`)
    return res.data ?? []
  } catch (error) {
    console.log("Not Get any song Url", error)
    return [];
  }
}


export const likeButtonApi = async({songId}:{songId:string})=>{
  try {
    console.log(songId)
    const res = await api.patch(`/api/song/${songId}/like`)
    return res.data
  } catch (error) {
    return [];
  }
}


export const getLikesongsListApi = async():Promise<SongData[]|null>=>{
  try {

    const res = await api.get('/api/song/likesong')

    return res.data
    
  } catch (error) {
    return null;
  }
}

export const getPopularSongsapi = async ():Promise<SongData[]|null>=>{
  try {
    const res = await api.get('api/song/popularsongs')
    return res.data
  } catch (error) {
    return null
  }
}

interface searchInterface {
  songs:SongData[];
  artists:Artist[];
}

export const SearchSongsApi = async (value:string):Promise<searchInterface|null>=>{
  try {
    const res = await api.get(`api/song/search?search=${encodeURIComponent(value)}`)
    return res.data
  } catch (error) {
    return null
  }
}

export const GetYourSongApi = async ():Promise<SongData[] |null>=>{
  try {
    const res = await api.get('/api/song/yoursongs')

    return res.data.songs;
    
  } catch (error) {
    console.log(error)
    return null;
  }
}