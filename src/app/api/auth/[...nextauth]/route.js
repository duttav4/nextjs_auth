import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../../../Model/User";
import connectDB from "../../../../../lib/mongodb";

const authOptions = {
    providers: [
        CredentialsProvider( {
            name: "credentials",
            credentials: {},

            async authorize( credentials )
            {
                const { email, password } = credentials;
                await connectDB();
                const user = await User.findOne( { email } );

                if ( user )
                {
                    if ( user.password === password )
                    {
                        // const token = await jwt.sign( user._id, process.env.JWT );
                        // user.token = token;
                        return user;
                    } else
                    {
                        return null;
                    }
                } else
                {
                    return null;
                }
            }
        } )
    ],
    callbacks: {
        async jwt( { token, user, session } )
        {
            // console.log( "jwt callback", { token, user, session } );
            if ( user )
            {
                return {
                    ...token,
                    id: user._id
                };
            }
            return token;
        },
        async session( { token, user, session } )
        {
            // console.log( "session callback", { token, user, session } );

            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    role:'user'
                }
            };
            return session;
        }
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
    },
};

const handler = NextAuth( authOptions );

export { handler as GET, handler as POST };