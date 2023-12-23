import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovie = useSelector((store) => store.movies?.popularMovies);

    const popularMovies = async () => {
        try {
            if (popularMovie && popularMovie.length > 0) {
                return;
            }

            const data = await fetch(
                "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
                API_OPTIONS
            );

            if (!data.ok) {
                throw new Error("Failed to fetch now-playing movies");
            }

            const json = await data.json();

            dispatch(addPopularMovies(json?.results));
        } catch (error) {
            console.error("Error fetching now-playing movies:", error.message);
        }
    };

    useEffect(() => {
        popularMovies();
    }, []);
};

export default usePopularMovies;
