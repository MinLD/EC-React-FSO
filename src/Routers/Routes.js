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
  {
    path: "/cart",
    component: lazy(() => import("@pages/cart/cart.jsx")),
  },
  {
    path: "/product/:id",
    component: lazy(() => import("@pages/detailProduct/detailProduct.jsx")),
  },
];
export default Routerss;
