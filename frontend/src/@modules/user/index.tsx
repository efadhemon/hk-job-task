import { Paths } from "@shared/constant";
import { Navigate } from "react-router-dom";
import UserListRoute from "./routes/UserListRoute";
import UserUpdateRoute from "./routes/UserUpdateRoute";

export const UserRoutes = [
  { path: Paths.user, element: <Navigate to={Paths.userList} /> },
  { path: Paths.userList, element: <UserListRoute /> },
  { path: Paths.userUpdate(), element: <UserUpdateRoute /> },
];
