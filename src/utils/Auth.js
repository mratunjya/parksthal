import { useSession } from "next-auth/react";

export const IsAuthenticated = () => {
  const session = useSession();
  return session.status === "authenticated";
};

export const SessionStatus = () => {
  const session = useSession();
  return session.status;
};
