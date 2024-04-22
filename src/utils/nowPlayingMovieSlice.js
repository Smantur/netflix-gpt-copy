import { createSlice } from "@reduxjs/toolkit";
const nowplayingMovieSlice = createSlice({
    name: "nowPlayingMovies",
    initialState: {
        nowPlayingMovies: null,
        movieTrailer: null
    },
    reducers: {
        addMoviesPlayingNow(state, action) {
            state.nowPlayingMovies = action.payload;//this will update our initialstate
        },
        addMovieTrailor(state, action) {
            state.movieTrailer = action.payload;//this will update our initialstate
        }
    }
})
export const { addMoviesPlayingNow, addMovieTrailor } = nowplayingMovieSlice.actions;
export default nowplayingMovieSlice.reducer;