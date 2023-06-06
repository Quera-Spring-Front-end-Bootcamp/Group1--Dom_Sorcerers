import axios from "axios";

function setJwt(jwt: string | null) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default { setJwt };
