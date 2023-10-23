import axios from "axios";

export async function putSettings(battleTag, status) {
  const resp = await axios.put("/api/user/gamesettings/ow2", {
    battleTag: battleTag,
    status: status,
    game: 1,
  });

  return resp.data;
}

export async function getSettings() {
  try {
    const resp = await axios.get("/api/user/gamesettings/ow2", {
      params: { game: 1 },
    });
    return resp.data; // Assuming you want to return the response data
  } catch (error) {
    console.error("Error fetching user settings:", error);
    throw error; // You might want to handle the error appropriately
  }
}
