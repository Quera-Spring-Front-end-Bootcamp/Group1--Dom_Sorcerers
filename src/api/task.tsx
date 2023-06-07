import axios from "axios";
import http from "./http";

import { apiUrl } from "../config.json";

const tokenKey = "token";

http.setJwt(getJwt());

type creattask = {
  name: string;
  description: string;
  boardId: string;
};

export function creattask(data: creattask) {
  return axios.post<creattask>(apiUrl + "/task/", {
    name: data.name,
    description: data.description,
    boardId: data.boardId,
  });
}

export function getJwt(): string | null {
  return localStorage.getItem(tokenKey);
}

export default {
  creattask,
  getJwt,
};
