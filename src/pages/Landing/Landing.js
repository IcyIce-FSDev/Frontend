import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser, logoutUser } from "../../lib/store/slices/authSlice";
import checkAuth from "../../lib/javascript/checkAuth";
import Auth from "./auth/Auth";
import Guest from "./guest/Guest";
import { removeActiveGames } from "../../lib/store/slices/activeGameSlice";

function Landing() {
  const dispatch = useDispatch();

  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    const authenticate = async () => {
      try {
        const user = await checkAuth();
        if (user.isAuth) {
          dispatch(setUser(user.username));
          setAuthed(user.isAuth);
        } else {
          dispatch(logoutUser());
          dispatch(removeActiveGames());
        }
      } catch (error) {
        // Handle the error, e.g., redirect to an error page or display an error message.
        console.error(error);
        dispatch(logoutUser());
      }
    };

    authenticate();
  }, [dispatch]);

  if (authed) {
    return <Auth />;
  } else {
    return <Guest />;
  }
}

export default Landing;
