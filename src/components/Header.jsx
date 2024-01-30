import { PROFILE_LOGO } from "../utils/constant";
import { Link } from "react-router-dom";
import useHeaderLogic from "../hooks/useHeaderLogic";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../utils/configSlice";
import { SUPPORTED_LANG, lang } from "../utils/languageConstant";

const Header = ({ handleLoginForm }) => {
    const {
        user,
        isHovered,
        handleSingout,
        handleMouseEnter,
        handleMouseLeave,
    } = useHeaderLogic();

    const langKey = useSelector((store) => store.config?.lang);

    const dispatch = useDispatch();

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    };

    return (
        <div className="absolute z-10 w-full h-12 sm:h-16 md:h-20 flex justify-center bg-black sm:bg-transparent bg-gradient-to-b from-black">
            <div className="w-11/12  flex items-center justify-between ">
                <div>
                    {user ? (
                        <Link to="/browse">
                            <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold select-none text-[#e50914]">
                                MovieGPT
                            </h1>
                        </Link>
                    ) : (
                        <Link to="/">
                            <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold select-none text-[#e50914]">
                                MovieGPT
                            </h1>
                        </Link>
                    )}
                </div>
                <div>
                    {user ? (
                        <div className="flex justify-center items-center space-x-2">
                            <div>
                                <Link to="search">
                                    <button className="px-1.5 md:px-3 py-1 sm:py-1.5 md:py-1.5 rounded-md text-xs sm:text-sm md:text-base text-white opacity-90 bg-[#e50914] hover:bg-opacity-90">
                                        GPT Search
                                    </button>
                                </Link>
                            </div>
                            <div
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                className="flex px-2 py-4 sm:space-x-2 ">
                                <img
                                    src={PROFILE_LOGO}
                                    alt=""
                                    className="hidden sm:block rounded-md h-7 sm:h-auto"
                                />
                                <i className="fa-solid fa-bars sm:hidden text-white"></i>
                                <i className="fa-solid fa-sort-down text-white hidden sm:block text-xl "></i>
                            </div>
                        </div>
                    ) : (
                        <>
                            <select
                                onChange={handleLanguageChange}
                                className="mr-2 px-2 sm:px-3 md:px-4 py-1 md:py-1.5 text-sm md:text-base rounded-sm md:rounded-md text-white bg-black bg-opacity-50">
                                {SUPPORTED_LANG.map((lang) => (
                                    <option
                                        key={lang.identifier}
                                        value={lang.identifier}>
                                        {lang.name}
                                    </option>
                                ))}
                            </select>
                            <Link to="/login">
                                <button
                                    onClick={handleLoginForm}
                                    className="px-2 sm:px-3 md:px-4 py-1 md:py-1.5 text-sm md:text-base rounded-sm md:rounded-md  bg-[#e50914] text-white">
                                    {lang[langKey].loginText}
                                </button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
            {isHovered && (
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="absolute w-44 md:w-52 right-6 md:right-16 top-10 sm:top-16 md:top-[4.3rem]  md:font-semibold text-[0.8rem] bg-[black] border border-[#333] text-white">
                    <div className="grid pl-4 md:pl-6 py-4 md:py-6 space-y-2">
                        <div className="cursor-pointer hover:underline">
                            {user?.displayName}
                        </div>
                        <div className="cursor-pointer hover:underline">
                            Manage Profiles
                        </div>
                        <div className="cursor-pointer hover:underline">
                            Tranfer Profile
                        </div>
                        <div className="cursor-pointer hover:underline">
                            Account
                        </div>
                        <div className="cursor-pointer hover:underline">
                            Help Center
                        </div>
                    </div>
                    <div className="border-b border-[#696969]"></div>

                    <div
                        onClick={handleSingout}
                        className="cursor-pointer hover:underline pl-6 py-5">
                        Sign out of Netflix
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
