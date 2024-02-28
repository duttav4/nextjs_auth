"use client";

import axios from "axios";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function page() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const router = useRouter();

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const res = await signIn("credentials", { email, password, redirect: false });
            // const res = await axios.post("api/login", { email, password });
            if (res) {
                router.push("/dashboard");
            }
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="h-screen grid place-content-center">
            <h1 className="text-2xl border-t-4 border-purple-400 rounded-lg flex justify-center py-3 px-1 font-bold">
                Login Form
            </h1>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col py-4 gap-3 border border-zinc-200 rounded-lg focus:border-gray-300 focus:bg-none"
            >
                <input
                    type="email"
                    placeholder="enter name"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <input
                    type="password"
                    placeholder="enter password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <div className="flex justify-center">
                    <button className="bg-green-500 w-fit px-4 py-2 rounded-lg">Login</button>
                </div>
            </form>
        </div>
    );
}
