import { CustomSession } from '@/models/Session';
import { IUser } from '@/models/db/Users';
import { createNewUser, getUserById } from '@/services/userService';
import NextAuth, { NextAuthOptions } from 'next-auth';
import Github from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        Github({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        }),
    ],
    pages: {
        signIn: '/auth/signin',
    },
    callbacks: {
        async signIn({ user }) {
            if (!user) {
                return false;
            }

            try {
                const userInstance = await getUserById(user?.id || '');

                if (!userInstance) {
                    createNewUser(user as IUser);
                }

                return true;
            } catch (error) {
                console.error('Error during sign-in:', error);
                return false;
            }
        },

        async session({ session, token }) {
            (session.user as CustomSession)['id'] = token.id as string;

            return session;
        },
    },
};

const handler = NextAuth(authOptions);

export default handler;
