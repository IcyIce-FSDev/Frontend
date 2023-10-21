import "./Games.css";
import GameCard from "../../components/GameCard/GameCard";
import { useEffect, useState } from "react";

import getAllGames from "../../lib/javascript/getAllGames";

function Games() {
  const [games, setGames] = useState(false);

  useEffect(() => {
    const listGames = async () => {
      const resp = await getAllGames();

      setGames(resp);
    };

    listGames();
  }, []);

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
}

export default Games;
