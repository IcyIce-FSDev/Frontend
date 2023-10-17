// routes.js
import Landing from "./Landing/Landing";
import Discord from "./Discord/Discord";
import Home from "./Home/Home";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

const routes = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "discord",
    element: <Discord />,
  },
  {
    path: "home",
    element: <ProtectedRoute element={<Home />} />,
  },
];

export default routes;
