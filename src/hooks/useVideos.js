import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { addVideos } from "../utils/imageSlice";

const useVideos = (id) => {
    const dispatch = useDispatch();
    const trailer = useSelector((store) => store.movies?.videos);

    const trailerVideo = async () => {
        try {
            if (trailer && trailer.length > 0) {
                return;
            }

            const data = await fetch(
                `https://api.themoviedb.org/3/movie/${id}/videos`,
                API_OPTIONS
            );

            if (!data.ok) {
                throw new Error("Failed to fetch trailer videos");
            }

            const json = await data.json();

            dispatch(addVideos(json?.results));
        } catch (error) {
            console.error("Error fetching trailer videos:", error.message);
        }
    };

    useEffect(() => {
        trailerVideo();
    }, []);
};

export default useVideos;
