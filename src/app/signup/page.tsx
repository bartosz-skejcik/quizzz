"use client";

import { Button, Input } from "@ui/index";
import { signUp } from "@utils/auth";
import { validateField } from "@utils/validation";
import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";

type Props = {};

export default function Page({}: Props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");

    const [errors, setErrors] = useState<any>({
        username: "",
        password: "",
        email: "",
        fullName: "",
    });
    const [error, setError] = useState("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (
            errors.username ||
            errors.password ||
            errors.email ||
            errors.fullName
        ) {
            return;
        }

        const res = await signUp({
            username,
            password,
            email,
            fullName,
            callbackUrl: `${window.location.origin}`,
        });

        !res.success && setError(res.error);
    };

    return (
        <section className="flex items-center justify-center w-screen h-screen overflow-hidden">
            <form className="flex flex-col items-center w-11/12 gap-3 px-3 py-5 bg-[#fdfdfd] rounded-xl md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/3 justify-evenly shadow-sharp">
                <h1 className="mt-10 mb-5 text-4xl font-bold text-center md:mt-5">
                    <span className="text-sky-500">Welcome </span>stranger!
                </h1>
                <div className="flex flex-col justify-center w-3/4 gap-3 md:flex-row">
                    <Input
                        type="text"
                        placeholder="Full Name"
                        onChange={(e: any) => {
                            setFullName(e.target.value);
                            validateField(e.target.value, "other", () => {
                                setErrors({
                                    ...errors,
                                    fullName: "This field is required",
                                });
                            }) && setErrors({ ...errors, fullName: "" });
                        }}
                        value={fullName}
                        width="w-full md:w-1/2"
                        variant={errors.fullName ? "error" : "primary"}
                        errorMessage={errors.fullName}
                    />
                    <Input
                        type="email"
                        placeholder="Email"
                        onChange={(e: any) => {
                            setEmail(e.target.value);
                            validateField(e.target.value, "email", () => {
                                setErrors({
                                    ...errors,
                                    email: "Email is invalid",
                                });
                            }) && setErrors({ ...errors, email: "" });
                        }}
                        value={email}
                        width="w-full md:w-1/2"
                        variant={errors.email ? "error" : "primary"}
                        errorMessage={errors.email}
                    />
                </div>
                <Input
                    type="username"
                    placeholder="Username"
                    onChange={(e: any) => {
                        setUsername(e.target.value);
                        validateField(e.target.value, "other", () => {
                            setErrors({
                                ...errors,
                                username: "This field is required",
                            });
                        }) && setErrors({ ...errors, username: "" });
                    }}
                    value={username}
                    width="w-3/4"
                    variant={errors.username ? "error" : "primary"}
                    errorMessage={errors.username}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    onChange={(e: any) => {
                        setPassword(e.target.value);
                        validateField(e.target.value, "password", () => {
                            setErrors({
                                ...errors,
                                password:
                                    "> 8 characters, 1 number, 1 uppercase",
                            });
                        }) && setErrors({ ...errors, password: "" });
                    }}
                    value={password}
                    width="w-3/4"
                    variant={errors.password ? "error" : "primary"}
                    errorMessage={errors.password}
                />
                {error && <p className="text-center text-red-500">{error}</p>}
                <Button
                    variant="primary"
                    onClick={async (e: FormEvent) => {
                        await handleSubmit(e);
                    }}
                    size="md"
                    width="w-1/3"
                    className="my-5"
                >
                    <p>Sign Up</p>
                </Button>
            </form>
        </section>
    );
}
