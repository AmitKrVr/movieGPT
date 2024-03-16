import { BG_URL } from "../utils/constant";
import { lang } from "../utils/languageConstant";
import useLoginLogic from "../hooks/useLoginLogic";
import { validateData } from "../utils/validate";
import { Link } from "react-router-dom";

const Login = () => {
    const {
        fullName,
        email,
        password,
        isLoginForm,
        errorMessage,
        toggleSignIn,
        handleValidation,
        langKey,
        loading,
        handleGoogleLogin,
    } = useLoginLogic();

    return (
        <div
            className="absolute top-0 left-0 h-screen sm:h-[38rem] w-full grid place-items-center"
            style={{ backgroundImage: `url(${BG_URL})` }}>
            <div className="w-full sm:w-2/3 md:w-1/3 flex flex-col items-center bg-black md:bg-opacity-90 py-8 rounded-md mt-[18%] sm:mt-[4.3rem]">
                <form
                    onSubmit={(e) => e.preventDefault()}
                    action=""
                    className="flex flex-col w-11/12 lg:w-3/4 gap-4 text-white">
                    <h1 className="font-bold text-2xl md:text-3xl tracking-wider">
                        {isLoginForm
                            ? lang[langKey].loginText
                            : lang[langKey].signupText}
                    </h1>

                    <div className="mb-5 ">
                        <span className="text-[#b3b3b3] mr-2 text-sm">
                            {isLoginForm
                                ? "Don't have an account?"
                                : "Already Registered?"}
                        </span>
                        <span
                            onClick={toggleSignIn}
                            className="cursor-pointer text-white/90 select-none hover:underline">
                            {isLoginForm
                                ? lang[langKey].signupText
                                : lang[langKey].loginText}
                        </span>
                    </div>

                    {!isLoginForm && (
                        <input
                            ref={fullName}
                            type="text"
                            required
                            placeholder={lang[langKey].FullNamePlaceholder}
                            className="bg-[#333] px-4 py-2.5 md:py-3 w-full rounded-sm md:rounded-md"
                        />
                    )}

                    <input
                        ref={email}
                        type="email"
                        placeholder={lang[langKey].EmailAddressPlaceholder}
                        className="bg-[#333] px-4 py-2.5 md:py-3 w-full rounded-sm md:rounded-md"
                    />

                    <input
                        ref={password}
                        type="password"
                        placeholder={lang[langKey].PasswordPlaceholder}
                        className="bg-[#333] px-4 py-2.5 md:py-3 w-full rounded-sm md:rounded-md"
                    />

                    {errorMessage && (
                        <p className="text-yellow-600 text-xs -mt-3">
                            {errorMessage}
                        </p>
                    )}

                    <button
                        onClick={handleValidation}
                        className={`bg-[#e50914] font-semibold mt-2 md:mt-4 px-4 py-2.5 md:py-3 w-full rounded-sm md:rounded-md ${
                            loading ? "opacity-70 cursor-not-allowed" : ""
                        }`}>
                        {loading ? "Submitting..." : "Submit"}
                    </button>

                    <div className="flex justify-between text-sm text-[#b3b3b3]">
                        <span>
                            <input type="checkbox" defaultChecked />
                            <label> {lang[langKey].rememberMe} </label>
                        </span>
                        <Link to="/password-recovery">
                            <span className="hover:underline cursor-pointer">
                                {isLoginForm
                                    ? "Forgot Password"
                                    : lang[langKey].needHelp}
                            </span>
                        </Link>
                    </div>
                </form>
                <div className="mt-5">
                    <button
                        onClick={handleGoogleLogin}
                        className="px-5 py-2 rounded-xl border-gray-800 bg-white/80">
                        Signin With Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
