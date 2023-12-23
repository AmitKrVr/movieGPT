import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleGptPage } from "../utils/gptSlice";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect, useState } from "react";
import { auth } from "../utils/firebase";

const useHeaderLogic = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const showGptPage = useSelector((store) => store.gpt?.showGptPage);

    const [isHovered, setIsHovered] = useState(false);

    const handleSingout = () => {
        signOut(auth)
            .then(() => {})
            .catch((error) => {
                console.log(error.message);
            });
    };

    const handleGptSearchPage = () => {
        dispatch(toggleGptPage());
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL,
                    })
                );
                navigate("/browse");
            } else {
                navigate("/");
                dispatch(removeUser());
            }
        });
        return () => unsubscribe();
    }, [dispatch, navigate]);

    return {
        user,
        showGptPage,
        isHovered,
        handleSingout,
        handleGptSearchPage,
        handleMouseEnter,
        handleMouseLeave,
    };
};
export default useHeaderLogic;
