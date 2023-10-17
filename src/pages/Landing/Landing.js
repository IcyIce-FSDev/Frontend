import React, { useEffect, useState } from "react";
import "./Landing.css";

import { useDispatch } from "react-redux";
import { setUser, logoutUser } from "../../lib/store/slices/authSlice";
import checkAuth from "../../lib/javascript/checkAuth";

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
    return (
      <main className="Landing-container">
        <p>Landing page</p>
        <p>Authed</p>
      </main>
    );
  } else {
    return (
      <main className="Landing-container">
        <p>Landing page</p>
        <p>Not Authed</p>
      </main>
    );
  }
}

export default Landing;
