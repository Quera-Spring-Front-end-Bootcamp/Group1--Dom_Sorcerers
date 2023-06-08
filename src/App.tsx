import "./App.css";
import Login from "./pages/Auth/login/login";
import Register from "./pages/Auth/register/register";
import Forget from "./pages/Auth/forget/forget";
import ForgetNotif from "./pages/Auth/forgetNotif/forgetNotif";
import Reset from "./pages/Auth/reset/reset";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import MainPage from "./pages/mainPage/mainPage";
import ProfilePage from "./pages/profile/profilePage";
import AccountInfo from "./components/profile-main/accoutInfo";
import PersonalInfo from "./components/profile-main/personalInfo";
import Setting from "./components/profile-main/setting";
import Home from "./pages/home/home";
import authApi from "./api/auth";
import { useState, useEffect } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<Navigation />} /> */}
          <Route path="reset" element={<Reset />} />
          <Route path="forget" element={<Forget />} />
          <Route path="forgetnotif" element={<ForgetNotif />} />
          <Route path="register" element={<Register />} />

          <Route path="profile" element={<ProfilePage />}>
            <Route index element={<PersonalInfo />} />
            <Route path="personal-info" element={<PersonalInfo />} />
            <Route path="account-info" element={<AccountInfo />} />
            <Route path="setting" element={<Setting />} />
          </Route>
          <Route path="main-page" element={<MainPage />} />
          <Route path="/" element={<Login />} />
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
