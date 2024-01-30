import { BG_URL } from "../utils/constant";
import GptComponentPage from "./GptComponentPage";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
    return (
        <div className="text-white relative">
            <div className="absolute inset-0 h-screen md:aspect-video w-full bg-black opacity-50 -z-20"></div>
            <img
                src={BG_URL}
                alt=""
                className="absolute w-full h-full md:h-screen object-cover  -z-30 opacity-95"
            />

            {/* <h1 className="absolute top-3/4 md:top-2/3 left-4 md:left-1/4 w-10/12 md:w-1/2 font-bold text-base sm:text-xl -z-10 opacity-80">
                What would you like to watch today?. Transform your movie
                searches with our GPT-powered search bar, delivering instant,
                context-aware recommendations for a personalized cinematic
                journey.
            </h1> */}
            <GptSearchBar />
            <GptComponentPage />
        </div>
    );
};
export default GptSearchPage;
