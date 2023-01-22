import { DistributionRoutes } from "@modules/distribution";
import { SectorRoutes } from "@modules/sector";
import AppLayout from "@shared/components/layout/AppLayout";
import NotFound from "@shared/components/NotFound";
import { Paths } from "@shared/constant";
import { Navigate, useRoutes, Outlet } from "react-router-dom";

const App = () => {
  let pathName = window.location.pathname;
  return (
    <AppLayout>
      {pathName === "/" ? <Navigate to={Paths.sectors} /> : ""}
      <Outlet />
    </AppLayout>
  );
};

const Routes = () => {
  const routes = [
    {
      path: Paths.sectors,
      children: SectorRoutes,
    },
    {
      path: Paths.distributions,
      children: DistributionRoutes,
    },
  ];
  return useRoutes([
    {
      path: "",
      element: <App />,
      children: routes,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
};

export default Routes;
