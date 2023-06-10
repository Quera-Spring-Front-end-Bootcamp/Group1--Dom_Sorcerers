import { useEffect, useState } from "react";
import authApi from "../../api/auth";
import Login from "../Auth/login/login";
import MainPage from "../mainPage/mainPage";
import { useAuth } from "../../context/authContext";

const Home = () => {
  const authCtx = useAuth();
  console.log(authCtx.token);

  return <>{!!authCtx.token ? <MainPage /> : <Login />}</>;
};

export default Home;
