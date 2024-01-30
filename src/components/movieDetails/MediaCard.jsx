const MediaCard = ({ filePath, trailerIdKey }) => {
    return (
        <div className=" h-40 sm:h-52 md:h-64 flex-shrink-0 pb-3">
            {trailerIdKey ? (
                <iframe
                    className="w-auto h-full"
                    src={
                        "https://www.youtube.com/embed/" +
                        trailerIdKey +
                        "?si=4J66_9S8SvPZbUWA"
                    }
                    title="YouTube video player"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            ) : (
                <img
                    className="h-full w-auto"
                    src={"https://image.tmdb.org/t/p/original/" + filePath}
                    alt=""
                />
            )}
        </div>
    );
};
export default MediaCard;
