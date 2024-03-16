import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../utils/firebase";

sendPasswordResetEmail(auth, email)
    .then(() => {
        // Password reset email sent!
        // ..
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
