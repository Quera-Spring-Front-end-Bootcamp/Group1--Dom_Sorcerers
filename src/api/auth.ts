import axios from "axios";
import http from "./http";

import { apiUrl } from "../config.json";

// const apiEndpoint = apiUrl + "/auth/register";
const tokenKey = "token";

http.setJwt(getJwt());

type CreateUser = {
  username: string;
  email: string;
  password: string;
  //   firstname: string;
  //   lastname: string;
  //   profile_url: string;
  //   phone: string;
};
type Forgetpass = {
  email: string;
};

export function register(user: CreateUser) {
  return axios.post<CreateUser>(apiUrl + "/auth/register", {
    username: user.username,
    email: user.email,
    password: user.password,
  });
}

export async function login(user: CreateUser) {
  const response = await axios.post(apiUrl + "/auth/login", {
    emailOrUsername: user.email,
    password: user.password,
  });
  // console.log(response.data.data.accessToken);
  localStorage.setItem(
    tokenKey,
    JSON.stringify(response.data.data.accessToken)
  );
  return response;
}

// export function loginWithJwt(jwt: string) {
//   localStorage.setItem(tokenKey, jwt);
// }

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt: string | null = localStorage.getItem(tokenKey);
    console.log(jwt);
    return jwt;
  } catch (ex) {
    return null;
  }
}

export function getJwt(): string | null {
  return localStorage.getItem(tokenKey);
}

export function forget(user: Forgetpass) {
  return axios.post<Forgetpass>(apiUrl + "/auth/forget-password", {
    email: user.email,
  });
}

export default {
  register,
  getJwt,
  login,
  getCurrentUser,
  logout,
  forget,
  //   loginWithJwt,
};
