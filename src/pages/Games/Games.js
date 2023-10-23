import "./Games.css";
import GameCard from "../../components/GameCard/GameCard";
import { useEffect, useState } from "react";

import getAllGames from "../../lib/javascript/getAllGames";
import { Outlet, useLocation } from "react-router-dom";

function Games() {
  const location = useLocation();

  const [games, setGames] = useState(false);

  useEffect(() => {
    const listGames = async () => {
      const resp = await getAllGames();

      setGames(resp);
    };

    listGames();
  }, [location]);

  if (location.pathname === "/games") {
    if (!games) {
      return (
        <main className="Home-container">
          <p>Loading...</p>
        </main>
      );
    } else {
      return (
        <main className="Home-container">
          {games.map((game) => {
            return <GameCard game={game} key={game.game_id} />;
          })}
        </main>
      );
    }
  } else {
    return <Outlet />;
  }
}

export default Games;
