import { getJwt } from "../../api/auth";
import Login from "../Auth/login/login";
import MainPage from "../mainPage/mainPage";
import { useAuth } from "../../context/authContext";
import { useState, useEffect } from "react";
import Loading from "./Loading";

const Home = () => {
  const authCtx = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getJwt();
    if (token) {
      authCtx.setUserToken(JSON.parse(token));
    }
    const setLoadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(setLoadingTimeout);
  }, [authCtx]);
  if (loading) {
    return <Loading />;
  }
  return <>{authCtx.token ? <MainPage /> : <Login />}</>;
};

export default Home;
