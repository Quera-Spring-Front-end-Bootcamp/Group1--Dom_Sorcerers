import { createContext, useContext, useState } from "react";

type AuthContextType = {
  token: string;
  setUserToken: (token: string) => void;
};
type Props = {
  children: string | JSX.Element | JSX.Element[];
};
const AuthContext = createContext<AuthContextType>({
  token: "",
  setUserToken: () => {},
});

export const AuthProvider = ({ children }: Props) => {
  const [token, setToken] = useState("");

  const setUserToken = (t: string) => {
    setToken(t);
  };
  return (
    <AuthContext.Provider value={{ token, setUserToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
