import NextAuth from "next-auth/next";
import { User } from "./interfaces";

declare module "next-auth" {
    interface Session {
        user: User & DefaultSession["user"];
    }
}
