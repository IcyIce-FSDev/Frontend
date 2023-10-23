// routes.js
import Landing from "./Landing/Landing";
import Discord from "./Discord/Discord";
import Games from "./Games/Games";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import Logout from "./Logout/Logout";
import { gameRoutes } from "./Games/gameRoutes";

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
    path: "logout",
    element: <Logout />,
  },
  {
    path: "games",
    element: <ProtectedRoute element={<Games />} />,
    children: gameRoutes,
  },
];

export default routes;
