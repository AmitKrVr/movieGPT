import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideos } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrailerVideo = (movieId) => {
    const dispatch = useDispatch();

    const trailerVideo = async () => {
        try {
            const data = await fetch(
                `https://api.themoviedb.org/3/movie/${movieId}/videos`,
                API_OPTIONS
            );

            if (!data.ok) {
                throw new Error("Failed to fetch trailer videos");
            }

            const json = await data.json();

            dispatch(
                addTrailerVideos(
                    json?.results.filter((movie) => movie.type === "Trailer")
                )
            );
        } catch (error) {
            console.error("Error fetching trailer videos:", error.message);
        }
    };

    useEffect(() => {
        trailerVideo();
    }, []);
};

export default useTrailerVideo;
