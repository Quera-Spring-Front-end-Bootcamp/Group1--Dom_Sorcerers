import axios from "axios";
import http from "./http";
import { getJwt } from "./auth";
import { apiUrl } from "../config.json";

http.setJwt(getJwt());

type TagData = {
  name: string;
  taskid: string;
  color: string;
};
type ranameTagData = {
  name: string;
  color: string;
};

type unTagData = {
  name: string;
  taskid: string;
};

// get tag by tag name or id
export function getTag(tagid: string) {
  return axios.get(apiUrl + `/tags/${tagid}`);
}

export function creatTag(data: TagData) {
  // console.log(data);
  return axios.post<TagData>(apiUrl + "/tags", {
    name: data.name,
    taskid: data.taskid,
    color: data.color,
  });
}

export function unTagTask(data: unTagData) {
  // console.log(data);
  return axios.post<unTagData>(apiUrl + "/tags/untag", {
    name: data.name,
    taskid: data.taskid,
  });
}

// rename Tag By Id  using -->patch<-- method!
export function renameTag(tagid: string, data: ranameTagData) {
  return axios.patch<ranameTagData>(apiUrl + `/tags/${tagid}`, {
    name: data.name,
    color: data.color,
  });
}

export function deleteTag(tagid: string) {
  return axios.delete(apiUrl + `/tags/${tagid}`);
}

// get tags of task by taskId
export function getTaskTags(taskid: string) {
  return axios.get(apiUrl + `/tags/task/${taskid}`);
}

export default {
  getTag,
  creatTag,
  unTagTask,
  renameTag,
  deleteTag,
  getTaskTags,
};
