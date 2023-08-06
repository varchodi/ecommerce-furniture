import { getServerSession } from 'next-auth/next'
import { NextAuthOptions, User } from 'next-auth'
import { AdapterUser } from 'next-auth/adapters'
import GoogleProvider from 'next-auth/providers/google'
import { client } from '@/db/sanity'
import { userQuery } from '@/db/queries'

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    })
    ],
    //vulnerability here , must be replace with jwt encodingand decoding
  secret: "greenishere!!",
  callbacks: {
    async session({ session, user }) {
      if (user) {
        try {
          const data = await client.fetch(userQuery(user.email))
          console.log('data is', data);
          const newSession = {
            ...session,
            user: { ...session.user, ...data[0] },
          }
          console.log("new s is ", newSession);
          return newSession;
        } catch (error: any) {
          console.error("error occurred while retrieving user ", error)
          return session;
        }
      }
      return session;
    },
    async signIn({ user }: { user: User | AdapterUser }) {
      try {
        await client.createIfNotExists({
          _type: 'user',
          _id: user?.id,
          name: user?.name,
          profile: user?.image,
          email: user.email,
        });
        // Redirect to home page after successful sign-in
        // Redirect is currently commented out, make sure to use a proper redirect method here.
        // redirect('/profile');
        return true;
      } catch (error: any) {
        console.log("Error while creating and checking for the user:", error);
        return false;
      }
      },
    // Redirect URL after sign-in
    async redirect({ url, baseUrl }) {
      console.log('url: ', url);
      console.log('base url: ', baseUrl);
      // Allow relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allow callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    }
  }
}

export async function getCurrentUser() {
    try {
        const session = await getServerSession(authOptions);
        console.log(session);
        return session;
    } catch (error) {
        console.log("error while trying to get it");
        console.log(error);
    }
}
