import axios from "axios";
import http from "./http";
import { getJwt } from "./auth";
import { apiUrl } from "../config.json";

http.setJwt(getJwt());

type creatTask = {
  name: string;
  description: string;
  boardId: string;
};

export function creatTask(data: creatTask) {
  console.log(data);
  return axios.post<creatTask>(apiUrl + "/task/", {
    name: data.name,
    description: data.description,
    boardId: data.boardId,
  });
}

export default {
  creatTask,
};
