import React from "react";

function Discord() {
  const discordAuthCode =
    "https://discord.com/api/oauth2/authorize?client_id=1162672574036197427&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fdiscord&response_type=code&scope=identify%20email";

  const login = () => {
    window.location.href = discordAuthCode;
  };

  return (
    <p style={{ cursor: "pointer" }} onClick={login}>
      Discord
    </p>
  );
}

export default Discord;
