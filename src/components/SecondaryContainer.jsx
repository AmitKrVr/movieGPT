import { useSelector } from "react-redux";
import NowPlayingMovieList from "./NowPlayingMovieList";

const SecondaryContainer = () => {
    const nowPlaying = useSelector((store) => store.movies.nowPlayingMovies);
    const thisWeekMovies = useSelector((store) => store.movies.thisWeekMovies);
    const todayPopularMovies = useSelector(
        (store) => store.movies.todayPopularMovies
    );
    const popularMovies = useSelector((store) => store.movies.popularMovies);
    const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
    const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

    return (
        <div className="bg-black text-white pt-5 flex justify-center">
            <div className="w-11/12">
                <NowPlayingMovieList
                    title={"Now playing movies"}
                    movies={nowPlaying}
                />
                <NowPlayingMovieList
                    title={"This week trending movies"}
                    movies={thisWeekMovies}
                />
                <NowPlayingMovieList
                    title={"Today trending movies"}
                    movies={todayPopularMovies}
                />
                <NowPlayingMovieList
                    title={"Popular movies"}
                    movies={popularMovies}
                />
                <NowPlayingMovieList
                    title={"Top rated movies"}
                    movies={topRatedMovies}
                />
                <NowPlayingMovieList
                    title={"Upcoming movies"}
                    movies={upcomingMovies}
                />
            </div>
        </div>
    );
};

export default SecondaryContainer;
