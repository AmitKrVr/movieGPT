import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { validateData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { addUser } from "../utils/userSlice";

const useLoginLogic = () => {
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

    return {
        fullName,
        email,
        password,
        isLoginForm,
        errorMessage,
        toggleSignIn,
        handleValidation,
    };
};
export default useLoginLogic;
