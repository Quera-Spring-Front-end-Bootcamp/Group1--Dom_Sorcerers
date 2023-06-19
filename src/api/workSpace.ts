import axios from "axios";
import http from "./http";
import { apiUrl } from "../config.json";
import { getJwt } from "./auth";

type FormData = {
  spaceName: string;
  Color: string;
};
type renameData = {
  name: string;
  usernameOrId: string;
  image: string;
};

http.setJwt(getJwt());

export function creatWorkSpace(data: FormData) {
  return axios.post(apiUrl + "/workspace/create", {
    name: data.spaceName,
  });
}

export function getAllWorkSpace() {
  return axios.get(apiUrl + "/workspace/get-all");
}

export function deleteWorkSpace(WorkSpaceid: string) {
  return axios.delete(apiUrl + `/workspace/${WorkSpaceid}`);
}

export function renameWorkSpace(workSpaceID: string, data: renameData) {
  return axios.patch<renameData>(apiUrl + `/workspace/${workSpaceID}`, {
    name: data.name,
    user: data.usernameOrId,
    img: data.image,
  });
}

export default {
  getAllWorkSpace,
  creatWorkSpace,
  deleteWorkSpace,
  renameWorkSpace,
};
