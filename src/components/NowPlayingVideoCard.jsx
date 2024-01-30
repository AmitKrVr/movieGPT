import { Link } from "react-router-dom";
import { IMAGE_URL } from "../utils/constant";

const NowPlayingVideoCard = ({ posterPath, movieId }) => {
    if (!posterPath) return null;
    return (
        <Link to={"/browse/" + movieId}>
            {/* <div className="w-28 md:w-36 overflow-hidden cursor-pointer"> */}
            <div className="h-28 md:h-56 w-28 md:w-36 overflow-hidden cursor-pointer">
                <img
                    className="w-28 md:w-36 md:h-56 rounded-md hover:scale-110 transition-all"
                    src={IMAGE_URL + posterPath}
                    alt=""
                />
            </div>
        </Link>
    );
};

export default NowPlayingVideoCard;
