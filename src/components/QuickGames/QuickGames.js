import { useEffect } from "react";
import qGameCheck from "../../lib/javascript/components/qGameCheck";

import { useDispatch, useSelector } from "react-redux";
import {
  updateStateOw,
  updateStateFn,
  updateStateOsrs,
} from "../../lib/store/slices/qGameSlice";

export default function QuickGames() {
  const dispatch = useDispatch();

  const fnActive = useSelector((state) => state.game.fn.active);
  const osrsActive = useSelector((state) => state.game.osrs.active);
  const owActive = useSelector((state) => state.game.ow.active);

  useEffect(() => {
    async function updateSettings() {
      try {
        const resp = await qGameCheck();

        const { overwatch, osrs, fortnite } = resp;

        dispatch(updateStateFn(fortnite));
        dispatch(updateStateOsrs(osrs));
        dispatch(updateStateOw(overwatch));

        console.log(resp);
      } catch (error) {
        console.log(error);
      }
    }

    updateSettings();
  }, [dispatch]);

  return (
    <div className="div2 opts2">
      <div className="gameCards">
        <p>Overwatch</p>
        {owActive ? <p>Status: Active</p> : <p>Status: Inactive</p>}
        <a href="/games/overwatch" className="links">
          Settings
        </a>
      </div>
      <div className="gameCards">
        <p>Old School Runescape</p>
        {osrsActive ? <p>Status: Active</p> : <p>Status: Inactive</p>}
        <a href="/games/osrs" className="links">
          Settings
        </a>
      </div>
      <div className="gameCards">
        <p>Fortnite</p>
        {fnActive ? <p>Status: Active</p> : <p>Status: Inactive</p>}
        <a href="/games/fortnite" className="links">
          Settings
        </a>
      </div>
    </div>
  );
}
