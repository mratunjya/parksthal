import { signOut } from "next-auth/react";

export const LogOut = () => {
  signOut();
};
