import axios from "axios";
import http from "./http";
import { getJwt } from "./auth";
import { apiUrl } from "../config.json";

http.setJwt(getJwt());

type Data = {
  name: string;
  workspaceId: string;
  members: [];
};

export function createProject(data: Data) {
  return axios.post(apiUrl + "/projects", {
    name: data.name,
    workspaceId: data.workspaceId,
    members: [],
  });
}

export function getProjectById(id: string) {
  return axios.get(apiUrl + `/projects/${id}`);
}

export function getProjectByWorkSpaceId(id: string) {
  return axios.get(apiUrl + `/projects/workspaces/${id}`);
}

export default {
  createProject,
  getProjectById,
  getProjectByWorkSpaceId,
};
