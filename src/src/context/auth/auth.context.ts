import { createContext } from "react";
import { AuthState, UserAuth } from "src/interfaces";

export type AuthContextProps = {
  authState: AuthState;
  setUserAuth: (user: UserAuth) => void;
};

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);
