import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "./Card";
import getActiveGames from "../../lib/javascript/getActiveGames";
import { setActiveGames } from "../../lib/store/slices/activeGameSlice";

export default function ActiveGames() {
  const dispatch = useDispatch();

  const games = useSelector((state) => state.activeGames.games);

  useEffect(() => {
    async function updateSettings() {
      try {
        const arrayOfGames = await getActiveGames();

        dispatch(setActiveGames(arrayOfGames));
      } catch (error) {
        console.log(error);
      }
    }

    updateSettings();
  }, [dispatch]);

  if (!games) {
    return (
      <div className="div2 opts2">
        <p>No Active Games</p>
      </div>
    );
  } else {
    return (
      <div className="div2 opts2">
        {games.map((game) => {
          return <Card game={game} key={games.indexOf(game)} />;
        })}
      </div>
    );
  }
}
