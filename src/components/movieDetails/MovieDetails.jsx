import "../NowPlayingVideoCard.css";
import Credits from "./Credits";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useMovieDetails from "../../hooks/useMovieDetails";
import useTrailerVideo from "../../hooks/useTrailerVideo";

const MovieDetails = () => {
    const { movieId } = useParams();

    useTrailerVideo(movieId);

    const trailerId = useSelector((state) => state.movies?.trailerVideo);

    const movieInfo = useMovieDetails(movieId);

    if (!movieInfo) return;

    const trailerIdKey =
        trailerId && trailerId.length > 0 ? trailerId[0].key : null;

    const {
        id,
        original_title,
        overview,
        release_date,
        production_countries,
        genres,
        status,
        original_language,
        tagline,
        budget,
        runtime,
        backdrop_path,
    } = movieInfo;

    const genresData = genres ? genres.map((genre) => genre.name) : [];

    return (
        <div className="">
            <div className="flex pt-9 sm:pt-0 w-full rounded-md ">
                <div className="max-w-full">
                    <div className="relative w-full">
                        {trailerIdKey ? (
                            <iframe
                                className="w-full aspect-video"
                                src={
                                    "https://www.youtube.com/embed/" +
                                    trailerIdKey +
                                    "?si=4J66_9S8SvPZbUWA&autoplay=1&mute=1"
                                }
                                title="YouTube video player"
                                allowFullScreen
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        ) : (
                            <img
                                className="w-full aspect-video"
                                src={
                                    "https://image.tmdb.org/t/p/original" +
                                    backdrop_path
                                }
                                alt=""
                            />
                        )}

                        <div className="hidden sm:block w-full absolute -bottom-0 bg-gradient-to-t h-2/3 from-black">
                            <div className="absolute bottom-12 md:bottom-44 left-7 w-1/2 md:w-1/3 space-y-3">
                                <p className="text-lg md:text-2xl font-semibold text-white ">
                                    {original_title}
                                </p>
                                <div className="flex space-x-2">
                                    <button className="flex items-center px-2.5 md:px-5 py-1 md:py-1.5 text-base md:text-lg md:font-medium rounded-md bg-white bg-opacity-90 hover:opacity-85 text-black">
                                        <i className="fa-solid fa-play mr-0.5 hidden md:block"></i>
                                        Play
                                    </button>
                                    <button className="flex items-center px-2 md:px-3 py-1 md:py-1.5 text-base md:text-lg md:font-medium rounded-md bg-white bg-opacity-90 hover:opacity-85 text-black">
                                        <i className="fa-solid fa-circle-plus hidden sm:block"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full text-white bg-black space-y-4 pt-5">
                        <div className=" w-11/12 sm:w-3/4 mx-auto">
                            <div className=" ">
                                <div>
                                    <h1 className="sm:text-xl md:text-3xl font-bold">
                                        {original_title}
                                    </h1>
                                    <div className="flex text-sm mt-0.5 opacity-80 gap-x-3">
                                        <div>
                                            {release_date} (
                                            {
                                                production_countries?.[0]
                                                    ?.iso_3166_1
                                            }
                                            )
                                        </div>
                                        <div>
                                            {genresData.join(", ")}
                                            &nbsp; 2h 4m
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-9 flex flex-col gap-y-5 mb-6">
                                    <div className="space-x-2">
                                        <i className="fa-solid fa-bars border-2 rounded-full px-2.5 py-2 font-bold cursor-pointer bg-white text-black"></i>
                                        <i className="fa-regular fa-heart border-2 rounded-full px-2 py-2 font-bold cursor-pointer bg-white text-black"></i>
                                        <i className="fa-regular fa-bookmark border-2 rounded-full px-2.5 font-bold cursor-pointer py-2 bg-white text-black"></i>
                                        <i className="fa-regular fa-star border-2 rounded-full px-2 py-2 font-bold cursor-pointer bg-white text-black"></i>
                                    </div>

                                    {tagline && (
                                        <div className="mt-3 opacity-55 text-sm italic">
                                            {tagline}
                                        </div>
                                    )}

                                    <div className="text-xl font-semibold opacity-90">
                                        Overview
                                    </div>
                                    <div className="text-sm text-white text-opacity-80">
                                        {overview}
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="flex justify-between py-10">
                                <div className="space-y-2 sm:space-y-0 sm:flex sm:justify-evenly sm:w-[48%]">
                                    <div className="">
                                        <p className="text-sm font-semibold opacity-95">
                                            Status
                                        </p>
                                        <p className="text-sm opacity-80">
                                            {status}
                                        </p>
                                    </div>
                                    <div className="">
                                        <p className="text-sm font-semibold opacity-95">
                                            Original Language
                                        </p>
                                        <p className="text-sm opacity-80">
                                            {original_language}
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-2 sm:space-y-0 sm:flex sm:justify-evenly sm:w-[48%]">
                                    <div className="">
                                        <p className="text-sm font-semibold opacity-95">
                                            Budget
                                        </p>
                                        <p className="text-sm opacity-80">
                                            ${budget}
                                        </p>
                                    </div>
                                    <div className="">
                                        <p className="text-sm font-semibold opacity-95">
                                            Production Company
                                        </p>
                                        <p className="text-sm opacity-80">
                                            {production_countries?.[0].name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex ">
                                <Credits id={id} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
