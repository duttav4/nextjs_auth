import { NextResponse } from "next/server";
import User from "../../../../Model/User";
import connectDB from "../../../../lib/mongodb";

export const POST = async ( req ) =>
{
    try
    {
        const { name, email, password } = await req.json();
        await connectDB();
        await User.create( { name, email, password } );
        return NextResponse.json( { message: "success" } );
    } catch ( error )
    {
        console.log( error );
        return NextResponse.json( { message: "error" } );
    }
};