export const validateData = (email, password, fullName) => {
    const isEmailValid =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid =
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/.test(password);

    const isNameValid = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(
        fullName
    );

    if (fullName && !isNameValid)
        return "Invalid name. Please enter a valid name.";

    if (!isEmailValid) return "Please enter valid email address";

    if (!isPasswordValid)
        return "Password should be minimum eight characters, at least one letter and one number";

    return null;
};
