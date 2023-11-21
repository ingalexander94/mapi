import { lazy } from "react";

import { Navigate, Route } from "react-router-dom";
import { RoutesWithNotFound } from "src/components/RoutesWithNotFound";
import { privateRoutes } from "src/models";

const Dashboard = lazy(() => import("src/pages/Private/Dashboard/Dashboard"));
const Home = lazy(() => import("src/pages/Private/Home/Home"));

const Private = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={privateRoutes.DASHBOARD} />} />
      <Route path={privateRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path={privateRoutes.HOME} element={<Home />} />
    </RoutesWithNotFound>
  );
};

export default Private;
