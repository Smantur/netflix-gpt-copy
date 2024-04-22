import { API_OPTIONS } from "../utils/constant"
import { useDispatch } from "react-redux"
import { addMoviesPlayingNow } from "../utils/nowPlayingMovieSlice"
import { useEffect } from "react";
const useNowPlayingMovies = () => {
    const dispatcher = useDispatch();
    const getMovieList = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_OPTIONS)
        const json = await data.json()
        dispatcher(addMoviesPlayingNow(json.results))
    }
    useEffect(() => { getMovieList() }, [])
}
export default useNowPlayingMovies;