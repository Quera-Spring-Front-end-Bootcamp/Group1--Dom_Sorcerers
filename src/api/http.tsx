import axios from "axios";

function setJwt(jwt: string | null) {
  if (jwt) axios.defaults.headers.common["x-auth-token"] = JSON.parse(jwt);
}

export default { setJwt };
