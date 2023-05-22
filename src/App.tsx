import "./App.css";
import Login from "./pages/Auth/login/login";
import Register from "./pages/Auth/register/register";
import Forget from "./pages/Auth/forget/forget";
import ForgetNotif from "./pages/Auth/forgetNotif/forgetNotif";
import Reset from "./pages/Auth/reset/reset";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainPage from "./pages/mainPage/mainPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="reset" element={<Reset />} />
          <Route path="forget" element={<Forget />} />
          <Route path="forgetnotif" element={<ForgetNotif />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
