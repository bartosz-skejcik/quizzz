import axios from "axios";
import { signIn } from "next-auth/react";

type OptionsProps = {
    username: string;
    password: string;
    email: string;
    fullName: string;
    callbackUrl?: string;
};

export const signUp = async (options: OptionsProps) => {
    const { data } = await axios.post(`http://localhost:8080/api/signup`, {
        username: options.username,
        password: options.password,
        email: options.email,
        fullName: options.fullName,
    });
    if (data.success) {
        await signIn("credentials", {
            redirect: true,
            username: options.username,
            password: options.password,
            callbackUrl: options.callbackUrl,
        });
    } else {
        return data;
    }
};
