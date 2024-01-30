import CreditCard from "./CreditCard";
import { useSelector } from "react-redux";
import useCastDetails from "../../hooks/useCastDetails";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Credits = ({ id }) => {
    useCastDetails(id);

    const elementRef = useRef();

    const castDetails = useSelector((store) => store.movies?.castDetails);

    if (!castDetails) return;

    const handleScrollLeft = (element) => {
        element.scrollLeft -= 700;
    };
    const handleScrollRight = (element) => {
        element.scrollLeft += 700;
    };

    return (
        <div>
            <ChevronLeft
                onClick={() => handleScrollLeft(elementRef.current)}
                size={36}
                className="hidden md:block h-72 absolute z-10 cursor-pointer bg-gradient-to-r from-black"
            />
            <ChevronRight
                onClick={() => handleScrollRight(elementRef.current)}
                size={36}
                className="hidden md:block h-72 absolute right-[9.5rem] z-10 cursor-pointer bg-gradient-to-l from-black"
            />
            <div
                ref={elementRef}
                className="scrollbar-none scroll-smooth flex overflow-x-scroll pb-3 space-x-3 ">
                {Array.isArray(castDetails) &&
                    castDetails.map((cast) => (
                        <CreditCard
                            key={cast.id}
                            castName={cast.name}
                            character={cast.character}
                            profilePath={cast.profile_path}
                        />
                    ))}
            </div>
        </div>
    );
};
export default Credits;
