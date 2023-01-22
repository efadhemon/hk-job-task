import { Paths } from "@shared/constant";
import DistributionListRoute from "./routes/DistributionListRoute";

export const DistributionRoutes = [
  { path: Paths.distributions, element: <DistributionListRoute /> },
];
