import { useEffect } from "react";
import "./Logout.css";
import { useNavigate } from "react-router-dom";

import userLogout from "../../lib/javascript/userLogout";
import { useDispatch } from "react-redux";

import { logoutUser } from "../../lib/store/slices/authSlice";
import {
  removeStateFn,
  removeStateOsrs,
  removeStateOw,
} from "../../lib/store/slices/qGameSlice";

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
          dispatch(removeStateFn());
          dispatch(removeStateOsrs());
          dispatch(removeStateOw());

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
