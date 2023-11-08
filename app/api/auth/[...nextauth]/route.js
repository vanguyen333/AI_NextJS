import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers";
import { connectToDB } from "@utils/database";
import { connect } from "mongoose";
console.log({
  clientId: process.env.GOOGLE_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
});
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({ session }) {},
  async signIn({ profile }) {
    try {
      //serverless -> Lambda
      await connectToDB();
      //check if a user already exists
      //if not create a new user, save to DB
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
});
export { handler as GET, handler as POST };
