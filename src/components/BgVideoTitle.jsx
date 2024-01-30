import { useSelector } from "react-redux";
import useImageLogos from "../hooks/useImageLogos";
import { IMAGE_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const BgVideoTitle = ({ id, overview, title }) => {
    useImageLogos(id);

    const logo = useSelector((store) => store.images?.logos);

    const filePath = logo?.filter((logo) => logo.iso_639_1 === "en")?.[0];

    return (
        <div className="hidden sm:block absolute left-0 right-0  w-full aspect-video text-white bg-gradient-to-r from-black">
            <div className="relative -bottom-60 left-0 w-3/6 md:w-1/3 ml-4 md:ml-10 space-y-4">
                {filePath ? (
                    <img
                        className="sm:h-32"
                        src={IMAGE_URL + filePath.file_path}
                        alt=""
                    />
                ) : (
                    <h1 className="text-xs sm:text-base md:text-2xl lg:text-3xl  font-bold opacity-90">
                        {title}
                    </h1>
                )}
                <p className="hidden lg:block text-sm leading-5 opacity-60 ">
                    {overview}
                </p>
                <div className="hidden sm:flex space-x-1 md:space-x-3">
                    <Link to={"/browse/" + id}>
                        <button className="flex items-center px-2.5 md:px-5 py-1 md:py-1.5 text-base md:text-lg md:font-medium rounded-md bg-white bg-opacity-90 hover:opacity-85 text-black">
                            <i className="fa-solid fa-play mr-0.5 hidden md:block"></i>
                            Play
                        </button>
                    </Link>
                    <Link to={"/browse/" + id}>
                        <button className="flex items-center px-2.5 md:px-4 py-1 md:py-1.5 text-base md:text-lg md:font-medium rounded-md bg-gray-400 bg-opacity-40 hover:opacity-80">
                            <i className="fa-solid fa-circle-info mr-1 hidden md:block"></i>
                            More Info
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BgVideoTitle;
