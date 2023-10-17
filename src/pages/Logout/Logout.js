import { useEffect } from "react";
import "./Logout.css";
import { useNavigate } from "react-router-dom";

import userLogout from "../../lib/javascript/userLogout";
import { useDispatch } from "react-redux";

import { logoutUser } from "../../lib/store/slices/authSlice";

function Logout() {
  const navi = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Logging off user");

    // Need to make async function
    async function logoff() {
      try {
        const resp = await userLogout();
        console.log(resp);

        if (resp) {
          dispatch(logoutUser());
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
