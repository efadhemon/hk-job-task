import { Paths } from "@shared/constant";
import { Navigate } from "react-router-dom";
import DistributionListRoute from "./routes/DistributionListRoute";

export const DistributionRoutes = [
  {
    path: Paths.distribution,
    element: <Navigate to={Paths.distributionList} />,
  },
  { path: Paths.distributionList, element: <DistributionListRoute /> },
];
