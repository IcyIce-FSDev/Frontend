// This URL is /games/

import SettingsOw2 from "./ow2/settings/SettingsOw2";
import StatsOw2 from "./ow2/stats/StatsOw2";

export const gameRoutes = [
  {
    path: "ow2",
    children: [
      {
        path: "settings",
        element: <SettingsOw2 />,
      },
      {
        path: "stats",
        element: <StatsOw2 />,
      },
    ],
  },
  {
    path: "osrs",
    children: [
      {
        path: "settings",
        element: "",
      },
      {
        path: "stats",
        element: "",
      },
    ],
  },
  {
    path: "fn",
    children: [
      {
        path: "settings",
        element: "",
      },
      {
        path: "stats",
        element: "",
      },
    ],
  },
];
