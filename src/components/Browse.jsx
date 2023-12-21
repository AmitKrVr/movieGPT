import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useThisWeekMovies from "../hooks/useThisWeekMovies";
import useTodayPoularMovies from "../hooks/useTodayPopularMovies.js";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage.jsx";
import { BG_URL } from "../utils/constant.js";

const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    useThisWeekMovies();
    useTodayPoularMovies();

    const showGptPage = useSelector((store) => store.gpt.showGptPage);

    return (
        <div className="relative">
            {showGptPage ? (
                <>
                    <img
                        src={BG_URL}
                        alt=""
                        className="absolute h-screen md:h-auto object-cover md:object-none -z-10"
                    />
                    <GptSearchPage />
                </>
            ) : (
                <>
                    <div className="hidden md:block">
                        <MainContainer />
                    </div>
                    <div className="">
                        <SecondaryContainer />
                    </div>
                </>
            )}
        </div>
    );
};

export default Browse;
