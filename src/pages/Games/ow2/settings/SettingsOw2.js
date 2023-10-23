import React, { useEffect, useState } from "react";
import "./Settings.css";
import {
  putSettings,
  getSettings,
} from "../../../../lib/javascript/ow2/settings";
import { useNavigate } from "react-router-dom";
import moment from "moment";

export default function SettingsOw2() {
  const [battleTag, setBattleTag] = useState("");
  const [status, setStatus] = useState(false);
  const [update, setUpdate] = useState("Now");
  const navi = useNavigate();

  const handleBattleTagChange = (e) => {
    setBattleTag(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can handle the form submission logic here, e.g., sending data to the server.
    const submittedInfo = await putSettings(battleTag, status);

    if (submittedInfo.status) {
      navi("/games/ow2/stats");
    } else {
      console.log(submittedInfo.message);
    }
  };

  useEffect(() => {
    async function getCurrentSettings() {
      const resp = await getSettings();

      if (resp.status) {
        setBattleTag(resp.data.options.data);
        setUpdate(resp.data.options.timestamp);
        setStatus(resp.data.is_active);
      }
    }

    getCurrentSettings();
  }, []);

  return (
    <div className="Settings-Container">
      <h1>Overwatch 2 Settings</h1>

      <form className="Form-Container" onSubmit={handleSubmit}>
        <div className="Option-Container">
          <label htmlFor="battleTag">BattleTag</label>
          <input
            type="text"
            id="battleTag"
            value={battleTag}
            onChange={handleBattleTagChange}
          />
        </div>

        <div className="Option-Container">
          <label htmlFor="status">Status</label>
          <input
            type="checkbox"
            id="status"
            checked={status}
            onChange={handleStatusChange}
          />
        </div>

        <button type="submit" className="Settings-Button">
          Submit
        </button>
      </form>

      <p>
        Last Updated: {moment(update).format("dddd, MMMM Do YYYY, h:mm:ss a")}
      </p>
    </div>
  );
}
