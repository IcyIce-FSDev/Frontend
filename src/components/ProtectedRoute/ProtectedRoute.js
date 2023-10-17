import { Navigate } from "react-router-dom";
import checkAuth from "../../lib/javascript/checkAuth";
import React from "react";

import { useDispatch } from "react-redux";
import { logoutUser, setUser } from "../../lib/store/slices/authSlice";

function ProtectedRoute({ element }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(true);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    const authenticate = async () => {
      try {
        const user = await checkAuth();
        if (user.isAuth) {
          dispatch(setUser(user.username));
        } else {
          dispatch(logoutUser());
        }
        setIsAuthenticated(user.isAuth);
      } catch (error) {
        // Handle the error, e.g., redirect to an error page or display an error message.
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    authenticate();
  }, [dispatch]);

  if (loading) {
    return <div></div>;
  }

  return isAuthenticated ? element : <Navigate to="/" />;
}

export default ProtectedRoute;
