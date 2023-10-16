import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ element }) {
  // Check if the user is authenticated here (you can use a context or a state)
  const isAuthenticated = useSelector((state) => state.auth.isAuth); // You should replace this with your actual authentication logic
  return isAuthenticated ? element : <Navigate to="/" />;
}

export default ProtectedRoute;
