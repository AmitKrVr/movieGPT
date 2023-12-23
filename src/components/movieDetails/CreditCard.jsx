const CreditCard = ({ castName, character, profilePath }) => {
    return (
        <div>
            <div className="w-32 h-60 sm:w-36 sm:h-72 bg-white text-black rounded-lg overflow-hidden">
                <div className="h-36 sm:h-48">
                    <img
                        className="h-full w-full object-cover"
                        src={
                            "https://image.tmdb.org/t/p/original" + profilePath
                        }
                        alt=""
                    />
                </div>
                <div className="mt-1.5 sm:mt-2 px-1.5 sm:px-2">
                    <h2 className="text-base font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                        {castName}
                    </h2>
                    <p className="text-sm mt-1 leading-4 tracking-tight">
                        {character}
                    </p>
                </div>
            </div>
        </div>
    );
};
export default CreditCard;
