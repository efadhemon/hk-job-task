import AppLayOut from "@shared/components/layout/AppLayout";
import NotFound from "@shared/components/NotFound";
import { Outlet, useRoutes } from "react-router-dom";
import { Paths } from "@shared/constant";
import { UserRoutes } from "@modules/user";
import { SectorRoutes } from "@modules/sector";
import { DistributionRoutes } from "@modules/distribution";

const App = () => {
  let pathName = window.location.pathname;
  return (
    <AppLayOut>
      {/* {pathName === "/" ? <DefaultDashboardPage /> : ""} */}
      <Outlet />
    </AppLayOut>
  );
};

const ProtectedRoutes = () => {
  const routes = [
    {
      path: Paths.user,
      children: UserRoutes,
    },
    {
      path: Paths.sector,
      children: SectorRoutes,
    },
    {
      path: Paths.distribution,
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

export default ProtectedRoutes;
