import "./globals.css";
import { Lexend } from "next/font/google";

import { Session } from "next-auth";
import { headers } from "next/headers";
import AuthContext from "./AuthContext";

export const metadata = {
    title: "Quizzz App",
    description: "A simple quiz app",
};

const lexend = Lexend({
    subsets: ["latin"],
});

async function getSession(cookie: string): Promise<Session> {
    const response = await fetch(
        `${process.env.LOCAL_AUTH_URL}/api/auth/session`,
        {
            headers: {
                cookie,
            },
        }
    );

    const session = await response.json();

    return Object.keys(session).length > 0 ? session : null;
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getSession(headers().get("cookie") ?? "");
    return (
        <html lang="en">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body
                style={{
                    overflowX: "hidden",
                }}
                className={`${lexend.className} bg-neutral-100 text-neutral-800`}
            >
                <AuthContext session={session}>{children}</AuthContext>
            </body>
        </html>
    );
}
