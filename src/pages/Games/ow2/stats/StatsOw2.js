import React, { useEffect, useState } from "react";
import "./Settings.css";
import { data } from "../../../../lib/javascript/ow2/stats";
import moment from "moment";

export default function StatsOw2() {
  // eslint-disable-next-line
  const [playerData, setPlayerData] = useState(false);
  const [lastUpdate, setLastUpdate] = useState("Loading...");
  const [username, SetUsername] = useState("Loading...");

  useEffect(() => {
    async function getData() {
      const resp = await data();

      setLastUpdate(
        moment(resp.last_update).format("dddd, MMMM Do YYYY, h:mm:ss a")
      );
      SetUsername(resp.playerData.summary.username);
      setPlayerData(resp.playerData.stats);
    }

    getData();
  }, []);

  return (
    <div className="Stats-Container">
      <div className="Stats-Header">
        <p>Overwatch Name: {username}</p>
        <p>Last Updated: {lastUpdate}</p>
        <h1>Overwatch 2 Stats</h1>
      </div>
      <div className="Stats-Body">
        <p>Statistics</p>
        {playerData ? <p>Got Data</p> : <p>Loading...</p>}
      </div>
    </div>
  );
}
