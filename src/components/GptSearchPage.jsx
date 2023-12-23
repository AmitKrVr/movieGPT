import { BG_URL } from "../utils/constant";
import GptComponentPage from "./GptComponentPage";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
    return (
        <div className="text-white relative">
            <img
                src={BG_URL}
                alt=""
                className="absolute h-screen md:h-auto object-cover md:object-none -z-10"
            />
            <GptSearchBar />
            <GptComponentPage />
        </div>
    );
};
export default GptSearchPage;
