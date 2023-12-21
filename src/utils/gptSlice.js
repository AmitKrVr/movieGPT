import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptPage: false,
        movieNames: null,
        movieResults: null,
    },
    reducers: {
        toggleGptPage: (state) => {
            state.showGptPage = !state.showGptPage;
        },
        addGptMovieResults: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
    },
});

export const { toggleGptPage, addGptMovieResults } = gptSlice.actions;
export default gptSlice.reducer;
