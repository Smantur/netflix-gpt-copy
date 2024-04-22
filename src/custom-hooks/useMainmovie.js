import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addMovieTrailor } from "../utils/nowPlayingMovieSlice";

const useMainmovie = (id) => {
    const dispatcher = useDispatch()
    const fetcMainMovie = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONS);
        const videos = await data.json();
        const filterdResult = videos.results.filter((video) => { return video.type === 'Trailer' && video.name === "Official Trailer" });
        const movieTrailer = filterdResult.length ? filterdResult[0] : videos.results[0]
        dispatcher(addMovieTrailor(movieTrailer))
    }
    useEffect(() => { fetcMainMovie(); }, [])
}
export default useMainmovie;

