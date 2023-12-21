const BgVideoTitle = ({ overview, title }) => {
    return (
        <div className="absolute left-0 right-0 top-0 w-full aspect-video text-white bg-gradient-to-r from-black">
            <div className="mt-60 w-1/3 ml-10 space-y-4">
                <h1 className="text-3xl font-bold opacity-90">{title}</h1>
                <p className="text-sm leading-5 opacity-80 ">{overview}</p>
                <div className="space-x-3">
                    <button className="px-5 py-1.5 text-lg font-medium rounded-md bg-white bg-opacity-90 hover:opacity-85 text-black">
                        <i className="fa-solid fa-play mr-0.5"></i> Play
                    </button>
                    <button className="px-5 py-1.5 text-lg font-medium rounded-md bg-gray-400 bg-opacity-40 hover:opacity-80">
                        <i className="fa-solid fa-circle-info mr-0.5"></i> More
                        Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BgVideoTitle;
