import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addThisWeekMovies, addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useThisWeekMovies = () => {
    const dispatch = useDispatch();
    const thisWeek = useSelector((store) => store.movies?.thisWeekMovies);

    const thisWeekMovies = async () => {
        try {
            if (thisWeek && thisWeek.length > 0) {
                return;
            }

            const data = await fetch(
                "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
                API_OPTIONS
            );

            if (!data.ok) {
                throw new Error("Failed to fetch now-playing movies");
            }

            const json = await data.json();

            dispatch(addThisWeekMovies(json?.results));
        } catch (error) {
            console.error("Error fetching now-playing movies:", error.message);
        }
    };

    useEffect(() => {
        thisWeekMovies();
    }, []);
};

export default useThisWeekMovies;
