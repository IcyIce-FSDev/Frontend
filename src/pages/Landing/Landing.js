import React, { useEffect } from "react";
import "./Landing.css";

import { useDispatch } from "react-redux";
import { setUser } from "../../lib/store/slices/authSlice";
import checkAuth from "../../lib/javascript/checkAuth";

function Landing() {
  const dispatch = useDispatch();

  useEffect(() => {
    const authenticate = async () => {
      try {
        const user = await checkAuth();
        if (user.isAuth) {
          dispatch(setUser(user.username));
        }
      } catch (error) {
        // Handle the error, e.g., redirect to an error page or display an error message.
        console.error(error);
      }
    };

    authenticate();
  }, [dispatch]);

  return (
    <main className="Landing-container">
      <p>Landing page</p>
    </main>
  );
}

export default Landing;
