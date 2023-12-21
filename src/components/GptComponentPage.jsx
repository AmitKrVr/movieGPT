import { useSelector } from "react-redux";
import NowPlayingMovieList from "./NowPlayingMovieList";

const GptComponentPage = () => {
    const { movieNames, movieResults } = useSelector((store) => store.gpt);

    if (!movieNames) return null;

    return (
        <div className="bg-black py-6">
            {movieNames.map((movieName, index) => (
                <NowPlayingMovieList
                    key={index}
                    title={movieName}
                    movies={movieResults[index]}
                />
            ))}
        </div>
    );
};
export default GptComponentPage;
