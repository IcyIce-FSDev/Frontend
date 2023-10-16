import "./Discord.css";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

function Discord() {
  // eslint-disable-next-line
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const code = searchParams.get("code");

    if (code) {
      console.log(`Got code: ${code}, submitting to backend`);

      try {
        async function submitLogin() {
          const r = await axios.post("/discord/login", {
            authCode: code,
          });

          console.log(r);
        }

        submitLogin();
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("No discord auth code");
    }
  }, [searchParams]);

  return (
    <main className="Landing-container">
      <p>Not authed</p>
      <p>Discord Register</p>
      <p>Loading...</p>
    </main>
  );
}

export default Discord;
