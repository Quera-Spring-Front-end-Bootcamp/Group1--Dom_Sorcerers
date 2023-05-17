import "./App.css";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Forget from "./pages/forget/forget";
import ForgetNotif from "./pages/forgetNotif/forgetNotif";
import Reset from "./pages/reset/reset";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="reset" element={<Reset />} />
          <Route path="forget" element={<Forget />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="/" element={<ForgetNotif />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
