import axios from "axios";
import http from "./http";
import { getJwt } from "./auth";
import { apiUrl } from "../config.json";

http.setJwt(getJwt());

type commentData = {
  text: string;
  textId: string;
};

//Get comment by task Id
export function getComment(tagid: string) {
  return axios.get(apiUrl + `/comments/task/${tagid}`);
}

// create new comment
export function createComment(data: commentData) {
  return axios.post<commentData>(apiUrl + "/comments/", {
    text: data.text,
    textId: data.textId,
  });
}

// get comment by commentId
export function getCommentByID(commentId: string) {
  return axios.get(apiUrl + `/comments/${commentId}`);
}

// delete comment by Id
export function deleteComment(commentId: string) {
  return axios.delete(apiUrl + `/comments/${commentId}`);
}

// edit comment  using -->patch<-- method!
export function editComment(commentId: string, newtext: string) {
  return axios.patch(apiUrl + `/comments/${commentId}`, {
    text: newtext,
  });
}

export default {
  getComment,
  createComment,
  getCommentByID,
  deleteComment,
  editComment,
};
