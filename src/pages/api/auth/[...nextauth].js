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
      try {
        const api = `${process.env.API_ENDPOINT}/users/get_user_role`;
        const { email } = session.session.user;
        const payload = { email: email };
        const response = await fetch(api, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user role");
        }

        const data = await response.json();
        session.session.user.role = data.role;
      } catch (error) {
        console.error("Error during session callback:", error);
        // Handle the error as per your application's requirements
      }

      return session;
    },
  },
  events: {
    async signIn(response) {
      try {
        const { email } = response.user;
        const api = `${process.env.API_ENDPOINT}/users`;

        if (email) {
          const signInResponse = await fetch(api, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          });

          if (!signInResponse.ok) {
            throw new Error("Failed to sign in user");
          }
        }
      } catch (error) {
        console.error("Error during signIn event:", error);
        // Handle the error as per your application's requirements
      }
    },
  },
};

export default NextAuth(authOptions);
