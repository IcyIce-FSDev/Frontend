import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Pages imports
import App from "./App";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Discord from "./pages/Discord/Discord";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        // Landing page
        path: "/",
        element: <Landing />,
      },
      {
        // Home Page
        path: "home",
        element: <ProtectedRoute element={<Home />} />,
      },
      {
        // Discord Registration/Loading
        path: "discord",
        element: <Discord />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

{
  /* <React.StrictMode></React.StrictMode> */
}
