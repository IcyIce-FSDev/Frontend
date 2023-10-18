import axios from "axios";

export default async function qGameCheck() {
  const resp = await axios.get("/api/game/settings");

  return resp.data;
}
