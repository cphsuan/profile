import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./home";
import AboutMe from "./aboutMe";

const routesConfig = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about-me",
    element: <AboutMe />,
  },
];

function renderRoutes(routeConfig) {
  return routeConfig.map((route) => (
    <Route key={route.path} path={route.path} element={route.element}>
      {route.children && renderRoutes(route.children)}
    </Route>
  ));
}

export default renderRoutes(routesConfig);
