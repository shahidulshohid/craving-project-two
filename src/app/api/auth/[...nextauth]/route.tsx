// import NextAuth, { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import SignInUser from "@/app/action/auth/signInUser";
// import GoogleProvider from "next-auth/providers/google";

// // Define the shape of the credentials passed into `authorize`
// interface Credentials {
//   email: string;
//   password: string;
// }
// // console.log(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET);
// // Ensure environment variables exist before proceeding
// if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
//   throw new Error(
//     "Missing GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET in environment variables"
//   );
// }
// // Define the `authOptions` with proper typing
// export const authOptions: NextAuthOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text", placeholder: "Enter Email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials: Credentials | undefined) {
//         if (!credentials) {
//           return null; // Return null if no credentials are provided
//         }

//         // Call the SignInUser function with the provided email
//         const user = await SignInUser(credentials.email);

//         // If no error and we have user data, return it
//         if (user) {
//           return {
//             id: user.id,
//             email: user.email,
//             name: user.name || "Anonymous", // Fallback to "Anonymous" if no name is available
//           };
//         }

//         // Return null if user data could not be retrieved
//         return null;
//       },
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   pages: {
//     signIn: "/signin", // Custom sign-in page
//   },
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };



import NextAuth from "next-auth"; // ✅ সঠিক ইমপোর্ট
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import SignInUser from "@/app/action/auth/signInUser";

export const authOptions = { // ✅ `NextAuthOptions` এর দরকার নেই
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Enter Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials || typeof credentials.email !== "string" || typeof credentials.password !== "string") {
    throw new Error("ইমেইল বা পাসওয়ার্ড সঠিক নয়!");
  }

        const user = await SignInUser(credentials.email);

        if (user) {
          return {
            id: user.id,
            email: user.email,
            name: user.name || "Anonymous",
          };
        }

        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/signin",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
