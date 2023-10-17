import axios from "axios";

async function userLogout() {
  // process of submitting data to backend
  const resp = await axios.post("/api/logout");

  if (resp.data) {
    return resp.data;
  } else {
    return resp.data;
  }
}

export default userLogout;
