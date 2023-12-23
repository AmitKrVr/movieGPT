import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTodayPoularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTodayPoularMovies = () => {
    const dispatch = useDispatch();
    const todayPopularMovies = useSelector(
        (store) => store.movies.todayPopularMovies
    );

    const todayPopular = async () => {
        try {
            if (todayPopularMovies && todayPopularMovies.length > 0) {
                return;
            }

            const data = await fetch(
                "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
                API_OPTIONS
            );

            if (!data.ok) {
                throw new Error("Failed to fetch now-playing movies");
            }

            const json = await data.json();

            dispatch(addTodayPoularMovies(json?.results));
        } catch (error) {
            console.error("Error fetching now-playing movies:", error.message);
        }
    };

    useEffect(() => {
        todayPopular();
    }, []);
};

export default useTodayPoularMovies;
