export const validateField = (
    value: string,
    expected: "email" | "password" | "other",
    callback: () => void
) => {
    if (expected === "email") {
        const emailRegex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (emailRegex.test(value)) {
            return true;
        } else {
            callback();
            return false;
        }
    } else if (expected === "password") {
        // Minimum eight characters, at least one letter and one or more numbers and one or more special characters:
        const passwordRegex =
            /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        if (passwordRegex.test(value)) {
            return true;
        } else {
            callback();
            return false;
        }
    } else {
        // check if value is empty
        if (value.length > 0) {
            return true;
        } else {
            callback();
            return false;
        }
    }
};
