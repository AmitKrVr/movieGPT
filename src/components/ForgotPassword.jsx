import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useRef, useState } from "react";

const ForgotPassword = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const email = useRef(null);

    const handleForgotPassword = () => {
        sendPasswordResetEmail(auth, email.current.value)
            .then(() => {
                setSuccessMessage(
                    "Success! We've sent the password reset link to your email. Please check your inbox."
                );
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };

    return (
        <div className="flex justify-center bg-black/95">
            <div className="grid place-content-center  w-5/12 my-52 px-3 py-9 bg-white rounded-md">
                <h1 className=" text-3xl font-bold mb-1">Forgot Password</h1>
                <p className="mb-6 text-sm text-black/80">
                    Enter your email below to receive a password reset link
                </p>
                {successMessage && (
                    <p className="mb-4 text-green-600">{successMessage}</p>
                )}
                <form className="grid" onSubmit={(e) => e.preventDefault()}>
                    <label className="mb-1 text-[15px]">Email address :</label>
                    <input
                        required
                        ref={email}
                        type="email"
                        placeholder="Enter your email address"
                        className="mb-4 border rounded-lg px-3 py-2 placeholder:text-sm border-gray-400"
                    />
                    <button
                        onClick={handleForgotPassword}
                        className="px-4 py-2 bg-black hover:bg-black/95 text-white text-md font-semibold rounded-lg">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};
export default ForgotPassword;
