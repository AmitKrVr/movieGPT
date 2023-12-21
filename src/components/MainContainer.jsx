import React from "react";
import { useSelector } from "react-redux";
import BackgroundVideo from "./BackgroundVideo";
import BgVideoTitle from "./BgVideoTitle";

const MainContainer = () => {
    const movies = useSelector((state) => state.movies?.nowPlayingMovies);

    if (!movies || movies.length === 0 || !movies[0]) return;

    const { id, overview, title } = movies[0];

    return (
        <div className="">
            <BgVideoTitle title={title} overview={overview} />
            <BackgroundVideo movieId={id} />
        </div>
    );
};

export default MainContainer;
