import { IMAGE_URL } from "../utils/constant";
import "./NowPlayingVideoCard.css";

const NowPlayingVideoCard = ({ posterPath }) => {
    return (
        <div className="w-28 md:w-36 overflow-hidden ">
            <img
                className="w-28 md:w-36 rounded-md hover:scale-110 transition-all"
                src={IMAGE_URL + posterPath}
                alt=""
            />
        </div>
    );
};

export default NowPlayingVideoCard;
