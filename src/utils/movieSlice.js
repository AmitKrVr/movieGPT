import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: {},
        trailerVideo: {},
        popularMovies: {},
        topRatedMovies: {},
        upcomingMovies: {},
        thisWeekMovies: {},
        todayPopularMovies: {},
        movieDetails: {},
        castDetails: {},
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideos: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addThisWeekMovies: (state, action) => {
            state.thisWeekMovies = action.payload;
        },
        addTodayPoularMovies: (state, action) => {
            state.todayPopularMovies = action.payload;
        },
        addMovieDetails: (state, action) => {
            state.movieDetails = action.payload;
        },
        addCastDetails: (state, action) => {
            state.castDetails = action.payload;
        },
    },
});

export const {
    addNowPlayingMovies,
    addTrailerVideos,
    addPopularMovies,
    addTopRatedMovies,
    addUpcomingMovies,
    addThisWeekMovies,
    addTodayPoularMovies,
    addMovieDetails,
    addCastDetails,
} = movieSlice.actions;
export default movieSlice.reducer;
