import { useSelector } from "react-redux";
import useBackdrops from "../../hooks/useBackdrops";
import MediaCard from "./MediaCard";
import { useRef, useState } from "react";
import usePoster from "../../hooks/usePoster";
import useVideos from "../../hooks/useVideos";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Media = ({ id }) => {
    useBackdrops(id);
    usePoster(id);
    useVideos(id);

    const backdrops = useSelector((store) => store.images?.backdrops);
    const posters = useSelector((store) => store.images?.posters);
    const trailerId = useSelector((store) => store.images?.videos);

    const [active, setActive] = useState("backdrops");

    const [backdrop, setBackdrop] = useState();

    const elementRef = useRef();

    const handleBackdrops = () => {
        setActive("backdrops");
        setBackdrop(backdrops);
    };
    const handlePosters = () => {
        setActive("posters");
        posters && setBackdrop(posters);
    };
    const handleVideos = () => {
        setActive("videos");
        trailerId && setBackdrop(trailerId);
    };

    const handleScrollLeft = (element) => {
        element.scrollLeft -= 800;
    };
    const handleScrollRight = (element) => {
        element.scrollLeft += 800;
    };

    if (!backdrops) return;

    return (
        <div className="w-full max-w-full">
            <div className="flex w-full">
                <div className="text-lg sm:text-xl md:text-2xl font-bold  w-1/3 md:w-1/2 tracking-wider">
                    Media
                </div>
                <div className="flex justify-between text-base md:text-lg font-medium md:font-semibold w-full md:w-1/2 opacity-95">
                    {/* <div className="cursor-pointer">Most Popular</div> */}
                    <div
                        onClick={handleVideos}
                        className={`${
                            active === "videos" && "text-gray-400 underline"
                        } cursor-pointer`}>
                        Videos
                    </div>
                    <div
                        onClick={handleBackdrops}
                        className={`${
                            active === "backdrops" && "text-gray-400 underline"
                        } cursor-pointer`}>
                        Backdrops
                    </div>
                    <div
                        onClick={handlePosters}
                        className={`${
                            active === "posters" && "text-gray-400 underline"
                        } cursor-pointer`}>
                        Posters
                    </div>
                </div>
            </div>
            <div className="mt-7 overflow-x-auto">
                <ChevronLeft
                    onClick={() => handleScrollLeft(elementRef.current)}
                    size={36}
                    className="hidden md:block h-64 absolute z-10 cursor-pointer bg-gradient-to-r from-black"
                />
                <ChevronRight
                    onClick={() => handleScrollRight(elementRef.current)}
                    size={36}
                    className="hidden md:block h-64 absolute right-[9.5rem] z-10 cursor-pointer bg-gradient-to-l from-black"
                />

                <div
                    ref={elementRef}
                    className="scrollbar-none scroll-smooth flex space-x-2 overflow-x-scroll">
                    {backdrop
                        ? backdrop.map((filePath, index) => (
                              <MediaCard
                                  key={index}
                                  filePath={filePath.file_path}
                                  trailerIdKey={filePath.key}
                              />
                          ))
                        : backdrops.map((filePath, index) => (
                              <MediaCard
                                  key={index}
                                  filePath={filePath.file_path}
                              />
                          ))}
                </div>
            </div>
        </div>
    );
};
export default Media;
