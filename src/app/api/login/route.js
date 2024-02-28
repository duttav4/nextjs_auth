import { NextResponse } from "next/server";
import User from "../../../../Model/User";
import connectDB from "../../../../lib/mongodb";

export const POST = async ( req ) =>
{
    try
    {
        const { email, password } = await req.json();
        await connectDB()
        const user = await User.findOne( { email } );
        if ( user )
        {
            if ( user.password === password )
            {
                return NextResponse.json( { message: 'User Found', user } );
            } else
            {
                return NextResponse.json( { message: "invalid password" } );
            }
        } else
        {
            return NextResponse.json( { message: "Invalid Email" } );
        }

    } catch ( error )
    {
        return NextResponse.json( { message: "errorrr", error } );
    }
};