import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addPosters } from "../utils/imageSlice";

const usePoster = (id) => {
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

        dispatch(
            addPosters(json?.posters?.filter((en) => en.iso_639_1 === "en"))
        );
    };
};

export default usePoster;
