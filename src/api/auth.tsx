import axios from "axios";
import http from "./http";

import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/auth/register";
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

export function register(user: CreateUser) {
  return axios.post<CreateUser>(apiUrl + "/auth/register", {
    username: user.username,
    email: user.email,
    password: user.password,
  });
}

// export async function login(email: string, password: string) {
//   const { data: jwt } = await axios.post(apiEndpoint, { email, password });
//   localStorage.setItem(tokenKey, jwt);
// }

// export function loginWithJwt(jwt: string) {
//   localStorage.setItem(tokenKey, jwt);
// }

// export function logout() {
//   localStorage.removeItem(tokenKey);
// }

//   export function getCurrentUser() {
//     try {
//       const jwt : string = localStorage.getItem(tokenKey);
//       return jwtDecode(jwt);
//     } catch (ex) {
//       return null;
//     }
//   }

export function getJwt(): string | null {
  return localStorage.getItem(tokenKey);
}

export default {
  register,
  getJwt,
  //   loginWithJwt,
};
