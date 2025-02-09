import { lazy } from "react";

const Routerss = [
  {
    path: "/",
    component: lazy(() => import("@components/HomePage/Homepage.jsx")),
  },
  {
    path: "/shop",
    component: lazy(() => import("@pages/Ourshop/ourshop.jsx")),
  },
];

export default Routerss;
