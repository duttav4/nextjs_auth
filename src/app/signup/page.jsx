"use client";

import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

export default function signup() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const res = await axios.post('api/register',{name,email,password})
            console.log(res);
        } catch (error) {
            console.log("errorrrr", error);
        }
    };
    return (
        <div className="grid h-screen place-items-center ">
            <div className="rounded-lg border-t-4 shadow-lg py-5 border-green-200 bg-red-100/90">
                <h1 className="text-2xl font-bold my-4 flex justify-center">SignUp</h1>
                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                    <input type="text" placeholder="enter name" onChange={(e) => setName(e.target.value)} />
                    <input type="email" placeholder="enter email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="enter password" onChange={(e) => setPassword(e.target.value)} />

                    <div className="flex justify-center">
                        <button className="w-fit py-2 px-3  bg-green-600 hover:bg-green-400 hover:text-black rounded-lg text-white">
                            SignUp
                        </button>
                    </div>
                    <div className="flex justify-center">
                        Already have account, &nbsp;
                        <Link className="underline font-bold" href={"/login"}>
                            {" "}
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
