import { useSelector } from "react-redux";

import "./Games.css";

function Games() {
  const user = useSelector((state) => state.auth.user);

  return (
    <main className="Home-container">
      <p>User: {user}</p>
      <p>Authorized Game/Rank Page</p>
    </main>
  );
}

export default Games;
