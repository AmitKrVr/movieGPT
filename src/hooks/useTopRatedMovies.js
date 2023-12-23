import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);

    const topRated = async () => {
        try {
            if (topRatedMovies && topRatedMovies.length > 0) {
                return;
            }

            const data = await fetch(
                "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
                API_OPTIONS
            );

            if (!data.ok) {
                throw new Error("Failed to fetch now-playing movies");
            }

            const json = await data.json();

            dispatch(addTopRatedMovies(json?.results));
        } catch (error) {
            console.error("Error fetching now-playing movies:", error.message);
        }
    };

    useEffect(() => {
        topRated();
    }, []);
};

export default useTopRatedMovies;
