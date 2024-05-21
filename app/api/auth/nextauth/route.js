import { MongoClient } from "mongodb";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          const uri = process.env.MONGODB_URI;
          const client = new MongoClient(uri);
          const db = client.db();
          const collection = db.collection("users");
          const user = await collection.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }

          return user;
        } catch (error) {
          console.log("Error: ", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 15 * 60,  
  },
  jwt: {
    maxAge: 15 * 60,  
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",  
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
