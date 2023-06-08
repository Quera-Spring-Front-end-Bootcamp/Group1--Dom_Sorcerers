import { useEffect, useState } from "react";
import authApi from "../../api/auth";
import Login from "../Auth/login/login";
import MainPage from "../mainPage/mainPage";

const Home = () => {
  const [token, setToken] = useState<string | null>();
  console.log(token);
  useEffect(() => {
    setToken(authApi.getCurrentUser());
  }, []);
  return <>{token ? <MainPage /> : <Login />}</>;
};

export default Home;
