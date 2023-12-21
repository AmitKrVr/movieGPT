import { Link } from "react-router-dom";
import { BG_URL } from "../utils/constant";

const Body = () => {
    return (
        <div
            className="absolute top-0 left-0 h-[38rem] w-full grid place-items-center"
            style={{ backgroundImage: `url(${BG_URL})` }}>
            <div className="w-3/4 md:w-1/2 h-1/2 text-center ">
                <p className="font-extrabold text-white text-4xl mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <Link to="/login">
                    <button
                        // onClick={handleLoginForm}
                        className="px-6 py-2.5 rounded-md font-semibold tracking-wide bg-[#e50914] text-white">
                        Get Started
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Body;
