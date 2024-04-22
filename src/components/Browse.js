
import { useSelector } from "react-redux";
import Header from "./Header"
import Maincontainer from "./Maincontainer";
import useNowPlayingMovies from "../custom-hooks/useNowPlayingMovies";

const Browse = () => {
    useNowPlayingMovies();
    const movies = useSelector((store) => {
        return store.movies?.nowPlayingMovies
    });
    if(!movies) return;
    const mainMovie=movies[0]
    return (
        <div>
            <Header></Header>
            <Maincontainer movie={mainMovie}></Maincontainer>
        </div>
    )
}
export default Browse;