import { useRef, useState } from "react";
import { BG_URL } from "../utils/constant";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { validateData } from "../utils/validate";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
    const dispatch = useDispatch();

    const [isLoginForm, setIsLoginForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const toggleSignIn = () => {
        setIsLoginForm(!isLoginForm);
    };

    const email = useRef(null);
    const password = useRef(null);
    const fullName = useRef(null);

    const handleValidation = () => {
        const message = fullName.current
            ? validateData(
                  email.current.value,
                  password.current.value,
                  fullName.current.value
              )
            : validateData(email.current.value, password.current.value);
        setErrorMessage(message);

        if (message) return;

        if (!isLoginForm) {
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;

                    return updateProfile(auth.currentUser, {
                        displayName: fullName.current.value,
                        photoURL: "https://example.com/jane-q-user/profile.jpg",
                    });
                })
                .then(() => {
                    const { uid, email, password, displayName, photoURL } =
                        auth.currentUser;

                    dispatch(
                        addUser({
                            uid: uid,
                            email: email,
                            password: password,
                            displayName: displayName,
                            photoURL: photoURL,
                        })
                    );
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode);
                });
        } else {
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode);
                });
        }
    };

    return (
        <div
            className="absolute top-0 left-0 h-[38rem] w-full grid place-items-center"
            style={{ backgroundImage: `url(${BG_URL})` }}>
            <div className="md:w-1/3 flex justify-center bg-black md:bg-opacity-90 py-8 rounded-md mt-[4.3rem]">
                <form
                    onSubmit={(e) => e.preventDefault()}
                    action=""
                    className="flex flex-col w-11/12 md:w-3/4 gap-4 text-white">
                    <h1 className="font-bold text-2xl md:text-3xl tracking-wider mb-2 md:mb-3">
                        {isLoginForm ? "Sign In" : "Sign up"}
                    </h1>

                    {!isLoginForm && (
                        <input
                            ref={fullName}
                            type="text"
                            required
                            placeholder="Full Name"
                            className="bg-[#333] px-4 py-2.5 md:py-3 w-full rounded-sm md:rounded-md"
                        />
                    )}

                    <input
                        ref={email}
                        type="email"
                        placeholder="Email or phone number"
                        className="bg-[#333] px-4 py-2.5 md:py-3 w-full rounded-sm md:rounded-md"
                    />

                    <input
                        ref={password}
                        type="password"
                        placeholder="Password"
                        className="bg-[#333] px-4 py-2.5 md:py-3 w-full rounded-sm md:rounded-md"
                    />

                    {errorMessage && (
                        <p className="text-yellow-600 text-xs -mt-3">
                            {errorMessage}
                        </p>
                    )}

                    <button
                        onClick={handleValidation}
                        className="bg-[#e50914] font-semibold mt-2 md:mt-4 px-4 py-2.5 md:py-3 w-full rounded-sm md:rounded-md">
                        {!isLoginForm ? "Sign up" : "Sign In"}
                    </button>

                    <div className="flex justify-between text-sm text-[#b3b3b3]">
                        <span>
                            <input type="checkbox" defaultChecked />
                            <label> Remember me </label>
                        </span>
                        <span className="hover:underline">Need help?</span>
                    </div>

                    <div className="mt-4 md:mt-7 ">
                        <span className="text-[#b3b3b3] mr-2">
                            {isLoginForm
                                ? "New to Netflix?"
                                : "Already Registered?"}
                        </span>
                        <span
                            onClick={toggleSignIn}
                            className="cursor-pointer select-none hover:underline">
                            {isLoginForm ? "Sign up now" : "Sign In"}
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
