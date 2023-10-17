import "./Discord.css";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../lib/store/slices/authSlice";

function Discord() {
  // eslint-disable-next-line
  let [searchParams, setSearchParams] = useSearchParams();

  const navi = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const code = searchParams.get("code");

    if (code) {
      try {
        async function submitLogin() {
          const r = await axios.post("/discord/login", {
            authCode: code,
          });

          if (r.data.success) {
            // need to useDispatch to update redux store auth with slice setUser
            dispatch(setUser(r.data.username));
            navi("/");
          }
        }

        submitLogin();
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("No discord auth code");
    }
  }, [searchParams, dispatch, navi]);

  return (
    <main className="Landing-container">
      <p>Loading...</p>
    </main>
  );
}

export default Discord;
