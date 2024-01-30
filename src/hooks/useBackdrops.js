import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addMovieBackdrops } from "../utils/imageSlice";

const useBackdrops = (id) => {
    const dispatch = useDispatch();

    useEffect(() => {
        creditDetails();
    }, []);

    const creditDetails = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/" + id + "/images",
            API_OPTIONS
        );

        const json = await data.json();

        dispatch(addMovieBackdrops(json?.backdrops));
    };
};

export default useBackdrops;
