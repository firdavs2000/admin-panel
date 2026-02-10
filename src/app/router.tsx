// router.tsx yoki router.jsx
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";


import MainLayout from "../shared/Layouts";

import AuthLogin from "../pages/AuthLogin";
import Dashboard from "../pages/DashBoard";
import Products from "../pages/Products";
import Users from "../pages/Users";
import NotFound from "../pages/NotFound";

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
