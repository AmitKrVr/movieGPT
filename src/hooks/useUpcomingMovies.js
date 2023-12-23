import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcoming = useSelector((store) => store.movies?.upcomingMovies);

    const upcomingMovies = async () => {
        try {
            if (upcoming && upcoming.length > 0) {
                return;
            }

            const data = await fetch(
                "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
                API_OPTIONS
            );

            if (!data.ok) {
                throw new Error("Failed to fetch now-playing movies");
            }

            const json = await data.json();

            dispatch(addUpcomingMovies(json?.results));
        } catch (error) {
            console.error("Error fetching now-playing movies:", error.message);
        }
    };

    useEffect(() => {
        upcomingMovies();
    }, []);
};

export default useUpcomingMovies;
