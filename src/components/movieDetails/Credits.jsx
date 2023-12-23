import CreditCard from "./CreditCard";
import { useSelector } from "react-redux";
import useCastDetails from "../../hooks/useCastDetails";

const Credits = ({ id }) => {
    useCastDetails(id);

    const castDetails = useSelector((store) => store.movies?.castDetails);

    if (!castDetails) return;

    return (
        <div className="scroll flex overflow-x-scroll  pb-3  space-x-3 ">
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
    );
};
export default Credits;
