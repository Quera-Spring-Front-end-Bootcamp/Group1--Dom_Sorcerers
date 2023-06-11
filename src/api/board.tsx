import axios from "axios";
import http from "./http";
import { getJwt } from "./auth";
import { apiUrl } from "../config.json";

http.setJwt(getJwt());

type boardData = {
  name: string;
  projectid: string;
};

type renameBoardData = {
  id: string;
  newName: string;
};

export function creatBoard(data: boardData) {
  console.log(data);
  return axios.post<boardData>(apiUrl + "/board/", {
    name: data.name,
    projectid: data.projectid,
  });
}

export function getAllProjectBoards() {
  return axios.get(apiUrl + "/board/:projectId");
}

export function getBoardTasks() {
  return axios.get(apiUrl + "/board/:id/tasks");
}

export function renameBoard(data: renameBoardData) {
  return axios.put(apiUrl + `/board/:id`, { name: data.newName });
}

// export function changeBoardPostion(data: renameBoardData) {
//   return axios.put(apiUrl + `/board/:id/position/:index`, { name: data.newName });
// }

export default {
  creatBoard,
  getAllProjectBoards,
  getBoardTasks,
  renameBoard,
  // changeBoardPostion,
};
