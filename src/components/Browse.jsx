import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useThisWeekMovies from "../hooks/useThisWeekMovies";
import useTodayPoularMovies from "../hooks/useTodayPopularMovies.js";
import { useSelector } from "react-redux";
import SimmerMain from "./SimmerMain.jsx";

const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    useThisWeekMovies();
    useTodayPoularMovies();

    const movies = useSelector((state) => state.movies?.nowPlayingMovies);

    return (
        <div>
            <div className="">
                {movies[1] ? <MainContainer /> : <SimmerMain />}
            </div>
            <div className="">
                <SecondaryContainer />
            </div>
        </div>
    );
};

export default Browse;
