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

export function getAllProjectBoards(projectid: string) {
  return axios.get(apiUrl + `/board/${projectid}`);
}

export function getBoardTasks(boardid: string) {
  return axios.get(apiUrl + `/board/${boardid}/tasks`);
}

export function renameBoard(data: renameBoardData) {
  return axios.put(apiUrl + `/board/${data.id}`, { name: data.newName });
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
