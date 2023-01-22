import { Paths } from "@shared/constant";
import { Navigate } from "react-router-dom";
import SectorListRoute from "./routes/SectorListRoute";

export const SectorRoutes = [
  { path: Paths.sector, element: <Navigate to={Paths.sectorList} /> },
  { path: Paths.sectorList, element: <SectorListRoute /> },
  //   { path: Paths.sectorCreate, element: <UserListRoute /> },
  //   { path: Paths.sectorUpdate(), element: <UserUpdateRoute /> },
];
