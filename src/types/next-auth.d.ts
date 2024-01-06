import NextAuth from "next-auth";

declare module 'next-auth' {
    interface Session {
        userId: {
            id: string;
            email: string;
            name: string;
        }
    }
}