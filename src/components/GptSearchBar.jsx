import { useSelector } from "react-redux";
import useGptSearchMovies from "../hooks/useGptSearchMovies";
import { lang } from "../utils/languageConstant";

const GptSearchBar = () => {
    const { searchText, handleSearch, loading } = useGptSearchMovies();
    const langKey = useSelector((store) => store.config?.lang);

    return (
        <div className="flex justify-center h-72 md:h-80 items-center">
            <form
                onSubmit={(e) => e.preventDefault()}
                className="w-11/12 md:w-2/4 grid grid-cols-12 bg-black px-5 py-3 space-x-2 rounded-md shadow-lg shadow-gray-400">
                <input
                    ref={searchText}
                    className="px-3 py-2 col-span-9 rounded-md text-black placeholder:text-sm md:placeholder:text-base"
                    type="text"
                    placeholder={lang[langKey].gptSearchPlaceholder}
                />
                <button
                    onClick={handleSearch}
                    className={` ${
                        loading ? "cursor-not-allowed opacity-70" : ""
                    }  py-2 col-span-3 rounded-md bg-[#e50914] hover:bg-opacity-90`}>
                    {loading ? "Seaching..." : "Search"}
                </button>
            </form>
        </div>
    );
};
export default GptSearchBar;
