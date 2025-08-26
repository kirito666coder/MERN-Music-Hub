import { SearchSongsApi } from "@/api/SongApi";
import type { Artist } from "@/types/artist";
import type { SongData } from "@/types/song";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const SearchPage = () => {
    const { slug } = useParams()

    const [songs, setSongs] = useState<SongData[]>([]);
    const [artists, setArtists] = useState<Artist[]>([]);
    const handleSearch = async () => {
        if (!slug) return;
        const data = await SearchSongsApi(slug)
        setSongs(data?.songs || []);
        setArtists(data?.artists || []);
    };

    useEffect(() => {
        handleSearch()
    }, [])


    return (
        <div className="h-full w-full flex justify-center items-center text-5xl">
            {slug}
        </div>
    )
}

export default SearchPage
