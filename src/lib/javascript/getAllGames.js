import axios from "axios";

export default async function getAllGames() {
  try {
    const allGames = await axios.get("/api/games/allgames");
    return allGames.data;
  } catch (error) {
    console.log(error);
  }
}
