import axios from "axios";

export async function data() {
  const data = await axios.get("/api/ow2/");

  return data.data;
}
