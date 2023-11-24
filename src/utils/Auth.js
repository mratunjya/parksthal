import { useSession } from "next-auth/react";

export const IsAuthenticated = () => {
  const { status } = useSession();
  return status === "authenticated";
};

export const SessionStatus = () => {
  const { status } = useSession();
  return status;
};

export const SessionUser = () => {
  const { data } = useSession();
  return data?.session?.user;
};
