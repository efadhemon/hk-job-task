import { Paths } from "@shared/constant";
import SectorListRoute from "./routes/SectorListRoute";

export const SectorRoutes = [
  { path: Paths.sectors, element: <SectorListRoute /> },
];
