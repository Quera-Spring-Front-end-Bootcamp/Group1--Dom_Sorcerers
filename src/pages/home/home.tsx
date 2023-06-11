import { getJwt } from "../../api/auth";
import Login from "../Auth/login/login";
import MainPage from "../mainPage/mainPage";
import { useAuth } from "../../context/authContext";

const Home = () => {
  const authCtx = useAuth();

  if (!authCtx.token) {
    const token = getJwt();
    if (token) {
      authCtx.setUserToken(JSON.parse(token));
    }
  }
  console.log(authCtx.token);
  return <>{!!authCtx.token ? <MainPage /> : <Login />}</>;
};

export default Home;
