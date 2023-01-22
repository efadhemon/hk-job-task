import Login from './Login';
import { Navigate } from 'react-router-dom';
import Register from './Register';

export const AuthRoutes = [
  {
    path: '',
    element: <Navigate to="/auth/login" />,
  },
  {
    path: 'register',
    element: <Register />,
  },
  {
    path: 'login',
    element: <Login />,
  },
];
