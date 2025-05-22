import NextAuth,  { NextAuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';

import { ConnectDB } from "./db";
import Auth from "../models/auth.model";
import mongoose from "mongoose";

if (mongoose.connection.readyState !== 1) {
  ConnectDB();
}

export const authConfig: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Enter your username" },
                password: { label: "Password", type: "password", placeholder: "Enter your password" }
            },
            async authorize(credentials) {
                if (!credentials?.username || !credentials.password) {
                    throw new Error("Please enter your username and password");
                }

                const user = await Auth.findOne({ username: credentials.username });

                if (!user) {
                    throw new Error("User not found");
                }

                if (user.password !== credentials.password) {
                    throw new Error("Invalid password");
                }

                return { id: user._id.toString(), username: user.username };
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login"
    },
    session: {
        strategy: 'jwt'
    },

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },

        async session({ session, token }) {
            if (token) {
                session.user.id = token.id as string;
            }
            return session;
        }
    },
}

