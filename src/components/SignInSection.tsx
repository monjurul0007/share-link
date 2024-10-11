'use client';

import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { signIn } from 'next-auth/react';

export default function SignInSection() {
    return (
        <div className="text-center border-2 shadow-md bd-white p-10 flex flex-col rounded-lg">
            <h1 className="mb-5 font-semibold">Welcome to Share Link</h1>

            <button
                className="flex items-center border border-gray-500 hover:border-purple-500 hover:drop-shadow px-5 py-3 rounded-lg my-2"
                onClick={() => {
                    signIn('google');
                }}
            >
                <FcGoogle className="me-2 text-xl" />
                Sign in with Google
            </button>

            <button
                className="flex items-center border border-gray-500 hover:border-purple-500 hover:drop-shadow px-5 py-3 rounded-lg my-2"
                onClick={() => {
                    signIn('github');
                }}
            >
                <FaGithub className="me-2 text-xl" />
                Sign in with Github
            </button>
        </div>
    );
}
