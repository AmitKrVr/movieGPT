import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addMovieLogos } from "../utils/imageSlice";
import { useEffect } from "react";

const useImageLogos = (id) => {
    const dispatch = useDispatch();

    const fetchData = async () => {
        const data = await fetch(
            " https://api.themoviedb.org/3/movie/" + id + "/images",
            API_OPTIONS
        );

        const json = await data.json();

        // console.log(json.logos?.filter((lan) => lan.iso_639_1 === "en")?.[0]);

        dispatch(addMovieLogos(json?.logos));
    };

    useEffect(() => {
        fetchData();
    }, []);
};

export default useImageLogos;
