import axios from "axios";
import http from "./http";
import { apiUrl } from "../config.json";
import { getJwt } from "./auth";

type FormData = {
  spaceName: string;
  Color: string;
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

export default {
  getAllWorkSpace,
  creatWorkSpace,
};
