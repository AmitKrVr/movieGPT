import { useRef } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, TMDB_MOVIE_SEARCH_API } from "../utils/constant";
import openai from "../utils/openai";
import { addGptMovieResults } from "../utils/gptSlice";

const useGptSearchMovies = () => {
    const dispatch = useDispatch();
    const searchText = useRef(null);

    const tmdbSearch = async (movie) => {
        const data = await fetch(
            TMDB_MOVIE_SEARCH_API +
                movie +
                "&include_adult=true&language=en-US&page=1",
            API_OPTIONS
        );

        const json = await data.json();

        return json.results;
    };

    const handleSearch = async () => {
        const getQuery =
            "Act as a Movie Recommendation System and suggest some movies for the query : " +
            searchText.current.value +
            ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Animal, Jawan, Aquaman, Thor: Love and Thunder, Avengers: Endgame";

        const gptSearchResults = await openai.chat.completions.create({
            messages: [{ role: "user", content: getQuery }],
            model: "gpt-3.5-turbo",
        });

        const gptMovies =
            gptSearchResults.choices?.[0]?.message?.content.split(", ");

        const promiseArray = gptMovies.map((movie) => tmdbSearch(movie));

        const tmdbResults = await Promise.all(promiseArray);

        dispatch(
            addGptMovieResults({
                movieNames: gptMovies,
                movieResults: tmdbResults,
            })
        );
    };

    return { searchText, handleSearch };
};

export default useGptSearchMovies;
