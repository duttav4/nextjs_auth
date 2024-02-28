"use client";

import { signOut, useSession } from 'next-auth/react';
import { NextURL } from 'next/dist/server/web/next-url';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

export default function Navlinks()
{
    const { data: session } = useSession();
    // console.log( session );
    return (
        <div>
            <div className="hidden md:flex">
                <ul className="flex flex-row gap-5">
                    <li className="hover:scale-110">Home</li>
                    <li className="hover:scale-110">App</li>
                    <li className="hover:scale-110">Blog</li>
                    <Link
                        href={"/signup"}
                        className="bg-black text-white px-2 hover:scale-110 delay-200 rounded-full"
                    >
                        SignUp
                    </Link>
                    {!session?.user?.email ? (
                        <Link
                            href={'/login'}
                            className="bg-black text-white px-2 hover:scale-110 delay-200 rounded-full cursor-pointer"
                        >
                            SignIn
                        </Link>
                    ) : (
                        <button
                            onClick={() => { signOut(); }}
                            className="bg-black text-white px-2 hover:scale-110 delay-200 rounded-full cursor-pointer"
                        >
                            SignOut
                        </button>
                    )}

                </ul>
            </div>
        </div>
    );
}
