// router.tsx yoki router.jsx
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import AuthLayout from "../shared/AuthLayouts";
import MainLayout from "../shared/MainLayouts";

import AuthLogin from "../pages/AuthLogin/AuthLogin";
import Dashboard from "../pages/DashBoard/DashBoard";
import Products from "../pages/products/Products";
import Users from "../pages/users/Users";
import NotFound from "../pages/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />, // Layout kerak
    children: [
      { path: "login", element: <AuthLogin /> } // element yozish shart!
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
      { index: true, element: <Dashboard /> }, // index uchun ham element kerak
      { path: "products", element: <Products /> },
      { path: "users", element: <Users /> }
    ]
  },
  { path: "*", element: <NotFound /> }
]);
