import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useThisWeekMovies from "../hooks/useThisWeekMovies";
import useTodayPoularMovies from "../hooks/useTodayPopularMovies.js";

const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    useThisWeekMovies();
    useTodayPoularMovies();

    return (
        <div>
            <div className="">
                <MainContainer />
            </div>
            <div className="">
                <SecondaryContainer />
            </div>
        </div>
    );
};

export default Browse;
