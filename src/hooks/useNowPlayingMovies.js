import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlaying = useSelector((store) => store.movies.nowPlayingMovies);

    const nowPlayingMovies = async () => {
        try {
            if (nowPlaying && nowPlaying.length > 0) {
                return;
            }

            const data = await fetch(
                "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
                API_OPTIONS
            );

            if (!data.ok) {
                throw new Error("Failed to fetch now-playing movies");
            }

            const json = await data.json();
            dispatch(addNowPlayingMovies(json?.results));
        } catch (error) {
            console.error("Error fetching now-playing movies:", error.message);
        }
    };

    useEffect(() => {
        nowPlayingMovies();
    }, []);
};

export default useNowPlayingMovies;
