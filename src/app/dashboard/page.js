"use client";

import React from 'react';
import { useSession } from "next-auth/react";


export default function dashboard()
{
  const { data: session } = useSession();
  console.log( session );

  return (

    <div>
      {session?.user?.role === 'admin' ? (
        "Admin"
      ) : (
        "User"
      )}
    </div>
  );
}
