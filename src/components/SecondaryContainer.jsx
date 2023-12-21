import { useSelector } from "react-redux";
import NowPlayingVideoCard from "./NowPlayingVideoCard";

const SecondaryContainer = () => {
    const nowPlaying = useSelector((store) => store.movies.nowPlayingMovies);
    const popularMovies = useSelector((store) => store.movies.popularMovies);
    const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
    const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
    const thisWeekMovies = useSelector((store) => store.movies.thisWeekMovies);
    const todayPopularMovies = useSelector(
        (store) => store.movies.todayPopularMovies
    );

    return (
        <div className="bg-black text-white pt-16 md:pt-0">
            <div className="md:relative md:-top-36">
                <div className="px-2.5 md:px-10 space-y-2.5 mb-8">
                    <div className="text-lg font-bold">Now playing movies</div>
                    <div className="scroll flex overflow-auto ">
                        <div className="flex space-x-2.5 md:space-x-4 ">
                            {Array.isArray(nowPlaying) &&
                                nowPlaying.map((movie) => (
                                    <NowPlayingVideoCard
                                        key={movie.id}
                                        posterPath={movie.poster_path}
                                    />
                                ))}
                        </div>
                    </div>
                </div>

                <div className="px-2.5 md:px-10 space-y-2.5 mb-8">
                    <div className="text-lg font-bold">
                        This week trending movies
                    </div>
                    <div className="scroll flex overflow-auto">
                        <div className="flex space-x-2.5 md:space-x-4">
                            {Array.isArray(thisWeekMovies) &&
                                thisWeekMovies.map((movie) => (
                                    <NowPlayingVideoCard
                                        key={movie.id}
                                        posterPath={movie.poster_path}
                                    />
                                ))}
                        </div>
                    </div>
                </div>

                <div className="px-2.5 md:px-10 space-y-2.5 mb-8">
                    <div className="text-lg font-bold">
                        Today trending movies
                    </div>
                    <div className="scroll flex overflow-auto">
                        <div className="flex space-x-2.5 md:space-x-4">
                            {Array.isArray(todayPopularMovies) &&
                                todayPopularMovies.map((movie) => (
                                    <NowPlayingVideoCard
                                        key={movie.id}
                                        posterPath={movie.poster_path}
                                    />
                                ))}
                        </div>
                    </div>
                </div>

                <div className="px-2.5 md:px-10 space-y-2.5 mb-8">
                    <div className="text-lg font-bold">Popular movies</div>
                    <div className="scroll flex overflow-auto">
                        <div className="flex space-x-2.5 md:space-x-4">
                            {Array.isArray(popularMovies) &&
                                popularMovies.map((movie) => (
                                    <NowPlayingVideoCard
                                        key={movie.id}
                                        posterPath={movie.poster_path}
                                    />
                                ))}
                        </div>
                    </div>
                </div>

                <div className="px-2.5 md:px-10 space-y-2.5 mb-8">
                    <div className="text-lg font-bold">Top rated movies</div>
                    <div className="scroll flex overflow-auto">
                        <div className="flex space-x-2.5 md:space-x-4">
                            {Array.isArray(topRatedMovies) &&
                                topRatedMovies.map((movie) => (
                                    <NowPlayingVideoCard
                                        key={movie.id}
                                        posterPath={movie.poster_path}
                                    />
                                ))}
                        </div>
                    </div>
                </div>

                <div className="px-2.5 md:px-10 space-y-2.5">
                    <div className="text-lg font-bold">Upcoming movies</div>
                    <div className="scroll flex overflow-auto">
                        <div className="flex space-x-2.5 md:space-x-4">
                            {Array.isArray(upcomingMovies) &&
                                upcomingMovies.map((movie) => (
                                    <NowPlayingVideoCard
                                        key={movie.id}
                                        posterPath={movie.poster_path}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondaryContainer;
