import NowPlayingVideoCard from "./NowPlayingVideoCard";

const NowPlayingMovieList = ({ title, movies }) => {
    return (
        <div className="px-2.5 md:px-10 space-y-2.5 mb-8">
            <div className="text-lg font-bold">{title}</div>
            <div className="scroll flex overflow-auto ">
                <div className="flex space-x-2.5 md:space-x-4 ">
                    {Array.isArray(movies) &&
                        movies.map((movie) => (
                            <NowPlayingVideoCard
                                key={movie.id}
                                posterPath={movie.poster_path}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};
export default NowPlayingMovieList;
