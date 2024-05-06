import User from "@/models/User";
import { verifyPasswprd } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const { email, password } = credentials;

        try {
          await connectDB();
          console.log("connectDB");
        } catch (error) {
          throw new Error("error in connect to DB");
        }

        if (!email || !password) {
          throw new Error("Invalid data");
        }

        const user = await User.findOne({ email });
        if (!user) {
          throw new Error("User not found!");
        }

        const verifyPass = await verifyPasswprd(password, user.password);
        if (!verifyPass) {
          throw new Error("The password or email is incorrect");
        }

        return {
          email: user.email,
          name: user.name,
        };
      },
    }),
  ],
};

export default NextAuth(authOptions);
