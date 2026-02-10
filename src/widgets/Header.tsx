

import { useAuth } from "../processes/auth/useAuth";
import { useLocation } from "react-router-dom";

export default function Header() {
  const logout = useAuth((s) => s.logout);
  const location = useLocation();

  // Sahifa nomini location.path orqali chiqarish
  const getPageName = () => {
    switch (location.pathname) {
      case "/":
        return "Dashboard";
      case "/products":
        return "Products";
      case "/users":
        return "Users";
      default:
        return "";
    }
  };

  return (
    <header className="flex justify-between items-center bg-gray-100 p-4 border-b">
      {/* Sahifa nomi */}
      <h1 className="text-xl font-semibold text-gray-800">{getPageName()}</h1>

      {/* Logout va boshqa tugmalar */}
      <div className="flex items-center gap-4">
        {/* Role / user info bo‘lishi mumkin */}
        <span className="text-gray-600">Admin</span>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
