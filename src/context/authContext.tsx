import { createContext, useContext, useState } from "react";

type AuthContextType = {
  token: string;
  userData: userType | null;
  setUserAllData: (u: userType | null) => void;
  setUserToken: (token: string) => void;
};
type Props = {
  children: string | JSX.Element | JSX.Element[];
};
const AuthContext = createContext<AuthContextType>({
  token: "",
  userData: {
    _id: "",
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    profile_url: "",
    phone: "",
    settings: [],
  },
  setUserAllData: () => {},
  setUserToken: () => {},
});

type userType = {
  _id: string;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  profile_url: string;
  phone: string;
  settings: [];
};

export const AuthProvider = ({ children }: Props) => {
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState<userType | null>(null);

  const setUserToken = (t: string) => {
    setToken(t);
  };

  const setUserAllData = (u: userType | null) => {
    setUserData(u);
    localStorage.setItem("userData", JSON.stringify(u));
  };

  return (
    <AuthContext.Provider
      value={{ token, userData, setUserToken, setUserAllData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
