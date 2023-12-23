import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const BackgroundVideo = ({ movieId }) => {
    useTrailerVideo(movieId);

    const trailerId = useSelector((state) => state.movies.trailerVideo);

    if (!trailerId || trailerId.length === 0 || !trailerId[0]) return;

    const trailerIdKey = trailerId[0];

    return (
        <div className="w-full aspect-video pt-10 sm:pt-0">
            {trailerId && (
                <iframe
                    className="w-full aspect-video"
                    src={
                        "https://www.youtube.com/embed/" +
                        trailerIdKey.key +
                        "?si=2pve8kf-gixWUgun&amp;controls=0&autoplay=1&mute=1"
                    }
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            )}
        </div>
    );
};

export default BackgroundVideo;
