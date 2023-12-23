const BgVideoTitle = ({ overview, title }) => {
    return (
        <div className="hidden sm:block absolute left-0 right-0  pt-40 w-full aspect-video text-white bg-gradient-to-r from-black">
            <div className="w-3/6 md:w-1/3 ml-4 md:ml-10 space-y-4">
                <h1 className="text-xs sm:text-base md:text-2xl lg:text-3xl  font-bold opacity-90">
                    {title}
                </h1>
                <p className="hidden lg:block text-sm leading-5 opacity-80 ">
                    {overview}
                </p>
                <div className="hidden sm:flex space-x-1 md:space-x-3">
                    <button className="flex items-center px-2.5 md:px-5 py-1 md:py-1.5 text-base md:text-lg md:font-medium rounded-md bg-white bg-opacity-90 hover:opacity-85 text-black">
                        <i className="fa-solid fa-play mr-0.5 hidden md:block"></i>
                        Play
                    </button>
                    <button className="flex items-center px-2.5 md:px-5 py-1 md:py-1.5 text-base md:text-lg md:font-medium rounded-md bg-gray-400 bg-opacity-40 hover:opacity-80">
                        <i className="fa-solid fa-circle-info mr-0.5 hidden md:block"></i>
                        More Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BgVideoTitle;
