import { useReducer } from "react";
import { AuthState } from "src/interfaces";
import { authReducer } from "./auth.reducer";
import { AuthContext } from "./auth.context";
import { UserAuth } from "../../interfaces/auth.interface";

const INITIAL_STATE: AuthState = {
  user: null,
  checking: false,
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const AuthProvider = ({ children }: Props) => {
  const [authState, dispatch] = useReducer(authReducer, INITIAL_STATE);

  const setUserAuth = (user: UserAuth) => {
    dispatch({ type: "setUserAuth", payload: user });
  };

  return (
    <AuthContext.Provider value={{ authState, setUserAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
