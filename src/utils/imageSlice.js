import { createSlice } from "@reduxjs/toolkit";

const imageSlice = createSlice({
    name: "images",
    initialState: {
        logos: null,
        backdrops: null,
        posters: null,
        videos: null,
    },
    reducers: {
        addMovieLogos: (state, action) => {
            state.logos = action.payload;
        },
        addMovieBackdrops: (state, action) => {
            state.backdrops = action.payload;
        },
        addPosters: (state, action) => {
            state.posters = action.payload;
        },
        addVideos: (state, action) => {
            state.videos = action.payload;
        },
    },
});

export const { addMovieLogos, addMovieBackdrops, addPosters, addVideos } =
    imageSlice.actions;
export default imageSlice.reducer;
