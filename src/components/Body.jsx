import { Link } from "react-router-dom";
import { BG_URL } from "../utils/constant";
import { lang } from "../utils/languageConstant";
import { useSelector } from "react-redux";

const Body = () => {
    const langKey = useSelector((store) => store.config?.lang);
    return (
        <div
            className="absolute top-0 left-0 h-[38rem] w-full grid place-items-center"
            style={{ backgroundImage: `url(${BG_URL})` }}>
            <div className="w-3/4 md:w-1/2 h-1/2 text-center ">
                <p className="font-extrabold text-white text-4xl mb-5">
                    {lang[langKey].bodyText}
                </p>

                <Link to="/login">
                    <button className="px-6 py-2.5 rounded-md font-semibold tracking-wide bg-[#e50914] text-white">
                        {lang[langKey].getStartedBtn}
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Body;
