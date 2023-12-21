import useGptSearchMovies from "../hooks/useGptSearchMovies";

const GptSearchBar = () => {
    const { searchText, handleSearch } = useGptSearchMovies();

    return (
        <div className="flex justify-center h-72 md:h-80 items-center">
            <form
                onSubmit={(e) => e.preventDefault()}
                className="w-11/12 md:w-2/4 grid grid-cols-12 bg-black px-5 py-3 space-x-2 rounded-md shadow-lg shadow-gray-400">
                <input
                    ref={searchText}
                    className="px-3 py-2 col-span-9 rounded-md text-black"
                    type="text"
                    placeholder="What would you like to watch today"
                />
                <button
                    onClick={handleSearch}
                    className="py-2 col-span-3 rounded-md bg-[#e50914] hover:bg-opacity-90">
                    Search
                </button>
            </form>
        </div>
    );
};
export default GptSearchBar;
