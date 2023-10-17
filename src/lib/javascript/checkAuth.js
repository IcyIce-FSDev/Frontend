import axios from "axios";

async function checkAuth() {
  // process of submitting data to backend
  const resp = await axios.get("/api/autoauth");

  if (resp.data.isAuth) {
    return resp.data;
  } else {
    return resp.data.isAuth;
  }
}

export default checkAuth;
