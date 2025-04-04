// import NextAuth, { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import dbConnect from "@/lib/dbConnect";

import NextAuth from "next-auth";
import { authOptions } from "@/lib/authOptions";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      role: string;
      image?: string | null;
      phone?:number;
      status?:string;
      address?:string;
      created_at?:Date;
    };
  }

  interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    image?: string | null;
    phone?:number;
    status?:string;
    address?:string;
    created_at?:Date;
  }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

