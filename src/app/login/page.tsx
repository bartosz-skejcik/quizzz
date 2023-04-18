"use client";

import { signIn } from "next-auth/react";
import { Input, Button } from "@ui/index";
import { useState } from "react";

type Props = {};

export default function Page({}: Props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <section className="flex items-center justify-center w-screen h-screen overflow-hidden">
            <form className="flex flex-col items-center w-11/12 gap-3 px-3 py-5 bg-[#fdfdfd] rounded-xl md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/3 justify-evenly shadow-sharp">
                <h1 className="mt-10 mb-5 text-4xl font-bold text-center md:mt-5">
                    <span className="text-sky-500">Welcome </span>back!
                </h1>
                <Input
                    type="username"
                    placeholder="Username"
                    onChange={(e: any) => {
                        setUsername(e.target.value);
                    }}
                    value={username}
                    width="w-5/6 md:w-1/2"
                    variant="primary"
                />
                <Input
                    type="password"
                    placeholder="Password"
                    onChange={(e: any) => {
                        setPassword(e.target.value);
                    }}
                    value={password}
                    width="w-5/6 md:w-1/2"
                    variant="primary"
                />
                <Button
                    variant="primary"
                    onClick={(e: any) => {
                        signIn("credentials", {
                            username: username,
                            password: password,
                            redirect: true,
                            callbackUrl: `${window.location.origin}`,
                        });
                    }}
                    size="md"
                    width="w-1/3"
                    className="my-5"
                >
                    <p>Login</p>
                </Button>
            </form>
        </section>
    );
}
