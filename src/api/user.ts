import axios from "axios";
import http from "./http";
import { getJwt } from "./auth";
import { apiUrl } from "../config.json";

http.setJwt(getJwt());

type newUserData = {
  userid: string;
  firstname: string;
  lastname: string;
  email: string;
};

export function updateUser(data: newUserData) {
  return axios.put(apiUrl + `/board/${data.userid}`, {
    firstname: data.firstname,
    lastname: data.lastname,
    email: data.email,
  });
}

// in postman can use "username" or "userid"????????
export function getUser(userid: string) {
  return axios.get(apiUrl + `/users/${userid}`);
}

export default {
  getUser,
  updateUser,
};
