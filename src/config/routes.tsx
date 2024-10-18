import { Navigate, RouteObject } from "react-router-dom";
import { CONVERTER, HOME } from "./path";
import AppLayout from "../layout/AppLayout";
import Converter from "../pages/Converter";

export const AppRoutes: RouteObject = {
  path: HOME,
  element: <AppLayout />,
  children: [
    {
      path: CONVERTER,
      element: <Converter />,
    },
  ],
};

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to={`/${HOME}/${CONVERTER}`} />,
  },
  AppRoutes,
];

export default routes;
