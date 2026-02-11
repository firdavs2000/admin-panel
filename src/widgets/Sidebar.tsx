
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../processes/auth/useAuth";

export default function Sidebar() {
  const navigate = useNavigate();
  const user = useAuth((s) => s.user);


  const links = [
    { url: "/", name: "Dashboard" },
    { url: "/users", name: "Users" },
    { url: "/products", name: "Products" },
  ];

  const handleLogout = () => {
 
    navigate("/login");
  };

  if (!user) return null;

  return (
    <aside className="w-64 bg-gray-950 text-white flex flex-col p-5 h-screen">
      {/* User info */}
      <div className="mb-8 flex flex-col items-center">
        <div className="w-20 h-20 rounded-full mb-2 bg-gray-700 flex items-center justify-center text-xl font-bold">
          {user.email[0].toUpperCase()}
        </div>
        <h2 className="text-lg font-semibold">{user.email}</h2>
        <span className="text-sm text-gray-400">{user.email}</span>
      </div>

      {/* Navigation links */}
      <nav className="flex flex-col gap-4 flex-1">
        {links.map((link, i) => (
          <NavLink
            key={i}
            to={link.url}
            className={({ isActive }) =>
              `px-3 py-2 rounded hover:bg-gray-800 ${isActive ? "bg-gray-800" : ""}`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>

      {/* Logout button */}
      <button
        onClick={handleLogout}
        className="mt-auto px-4 py-2 bg-red-600 rounded hover:bg-red-700 font-semibold"
      >
        Logout
      </button>
    </aside>
  );
}
