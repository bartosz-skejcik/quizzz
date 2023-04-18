"use client";

import { useSession } from "next-auth/react";

export default function Home() {
    const { data: session } = useSession();
    return (
        <section className="text-4xl font-medium">
            {session
                ? `Welcome ${session.user?.full_name}`
                : "Welcome to NextAuth.js"}
        </section>
    );
}
