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
} = movieSlice.actions;
export default movieSlice.reducer;
