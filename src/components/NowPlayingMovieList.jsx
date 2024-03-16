import { ChevronLeft, ChevronRight } from "lucide-react";
import NowPlayingVideoCard from "./NowPlayingVideoCard";
import { useRef } from "react";
import SimmerUI from "./SimmerUI";

const NowPlayingMovieList = ({ title, movies }) => {
    const elementRef = useRef();

    const handleScrollLeft = (element) => {
        element.scrollLeft -= 800;
    };
    const handleScrollRight = (element) => {
        element.scrollLeft += 800;
    };

    return (
        <div className="space-y-2.5 pb-8 w-full">
            <div className="text-lg font-bold w-full">{title}</div>
            <div
                ref={elementRef}
                className="scrollbar-none scroll-smooth  flex overflow-auto items-center pb-3 h-full w-full">
                <ChevronLeft
                    onClick={() => handleScrollLeft(elementRef.current)}
                    size={40}
                    className="hidden md:block h-56 absolute z-10 cursor-pointer bg-gradient-to-r from-black"
                />
                <ChevronRight
                    onClick={() => handleScrollRight(elementRef.current)}
                    size={40}
                    className="hidden md:block h-56 absolute right-12 z-10 cursor-pointer bg-gradient-to-l from-black"
                />

                <div className="flex w-full space-x-2.5 md:space-x-4">
                    {Array.isArray(movies)
                        ? movies.map((movie) => (
                              <NowPlayingVideoCard
                                  key={movie.id}
                                  movieId={movie.id}
                                  posterPath={movie.poster_path}
                              />
                          ))
                        : Array.from({ length: 10 }).map((_, index) => (
                              <SimmerUI key={index} />
                          ))}
                </div>
            </div>
        </div>
    );
};
export default NowPlayingMovieList;
