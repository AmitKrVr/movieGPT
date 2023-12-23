import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addCastDetails } from "../utils/movieSlice";

const useCastDetails = (id) => {
    const dispatch = useDispatch();

    useEffect(() => {
        creditDetails();
    }, []);

    const creditDetails = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/" +
                id +
                "/credits?language=en-US",
            API_OPTIONS
        );

        const json = await data.json();

        dispatch(addCastDetails(json?.cast));
    };
};

export default useCastDetails;
