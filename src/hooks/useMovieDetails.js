import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant";

const useMovieDetails = (movieId) => {
    const [movieInfo, setMovieInfo] = useState();

    const movieDetails = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/" + movieId + "?language=en-US",
            API_OPTIONS
        );

        const json = await data.json();

        setMovieInfo(json);
    };

    useEffect(() => {
        movieDetails();
    }, []);

    return movieInfo;
};

export default useMovieDetails;
