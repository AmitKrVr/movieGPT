import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validateData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signInWithRedirect,
    updateProfile,
} from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { provider } from "../utils/firebase";

const useLoginLogic = () => {
    const dispatch = useDispatch();
    const langKey = useSelector((store) => store.config?.lang);

    const [isLoginForm, setIsLoginForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const toggleSignIn = () => {
        setIsLoginForm(!isLoginForm);
    };

    const email = useRef(null);
    const password = useRef(null);
    const fullName = useRef(null);

    const handleValidation = async () => {
        setErrorMessage(null);

        try {
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
                            photoURL:
                                "https://example.com/jane-q-user/profile.jpg",
                        });
                    })
                    .then(() => {
                        const { uid, email, displayName, photoURL } =
                            auth.currentUser;

                        dispatch(
                            addUser({
                                uid: uid,
                                email: email,
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
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode);
        }

        setLoading(true);
    };

    const handleGoogleLogin = async () => {
        try {
            const userCredentials = await signInWithPopup(auth, provider);
            // await signInWithRedirect(auth, provider);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    return {
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
    };
};
export default useLoginLogic;
