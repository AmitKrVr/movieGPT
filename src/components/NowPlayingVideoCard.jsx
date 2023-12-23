import { Link } from "react-router-dom";
import { IMAGE_URL } from "../utils/constant";
import "./NowPlayingVideoCard.css";

const NowPlayingVideoCard = ({ posterPath, movieId }) => {
    if (!posterPath) return null;
    return (
        <Link to={"/browse/" + movieId}>
            <div className="w-28 md:w-36 overflow-hidden cursor-pointer">
                <img
                    className="w-28 md:w-36 rounded-md hover:scale-110 transition-all"
                    src={IMAGE_URL + posterPath}
                    alt=""
                />
            </div>
        </Link>
    );
};

export default NowPlayingVideoCard;
