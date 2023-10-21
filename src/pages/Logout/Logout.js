import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./Logout.css";
import { logoutUser } from "../../lib/store/slices/authSlice";
import userLogout from "../../lib/javascript/userLogout";
import { removeActiveGames } from "../../lib/store/slices/activeGameSlice";

function Logout() {
  const navi = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // Need to make async function
    async function logoff() {
      try {
        const resp = await userLogout();

        if (resp) {
          dispatch(logoutUser());
          dispatch(removeActiveGames());

          navi("/");
        }
      } catch (error) {
        console.log(error);
      }
    }

    logoff();
  }, [navi, dispatch]);

  return (
    <div className="Container">
      <p>Logging off...</p>
      <a href="/">Click here if not redirected after 5 seconds...</a>
    </div>
  );
}

export default Logout;
