import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
  ],
  secret: process.env.JWT_SECRET,
  // Add Events for custom behavior
  callbacks: {
    async session(session) {
      const api = `${process.env.API_ENDPOINT}/users/get_user_role`;
      const { email } = session.session.user;
      const payload = { email: email };
      await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((data) => {
          session.session.user.role = data.role;
        });

      return session;
    },
  },
  events: {
    async signIn(response) {
      const { email } = response.user;
      const api = `${process.env.API_ENDPOINT}/users`;

      if (email) {
        await fetch(api, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });
      }
    },
  },
};

export default NextAuth(authOptions);
