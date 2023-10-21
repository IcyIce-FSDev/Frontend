import axios from "axios";

export default async function getActiveGames() {
  try {
    const resp = await axios.get("/api/games/activegames");

    return resp.data;
  } catch (error) {
    console.log(error);
  }
}
