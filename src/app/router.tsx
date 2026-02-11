import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import MainLayout from "../shared/Mainlayouts";
import AuthLayout from "../shared/Authlayout";

import AuthLogin from "../pages/AuthLogin";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import Users from "../pages/Users";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <AuthLogin /> }
    ]
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: "products", element: <Products /> },
      { path: "users", element: <Users /> }
    ]
  },
  { path: "*", element: <NotFound /> }
]);
