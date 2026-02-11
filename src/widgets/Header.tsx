import { useAuth } from "../processes/auth/useAuth";
import {  useNavigate } from "react-router-dom";
import Searchinput from "../entities/SearchInput";

export default function Header() {
  const user = useAuth((s) => s.user);
  const logout = useAuth((s) => s.logout);
  const navigate = useNavigate();
 

  const handleLogout = () => {
    logout();
    navigate("/auth/login");
  };



  return (
    <header className="bg-gray-100 p-4 border-b">
      <div className="flex items-center justify-between">
        
     
<Searchinput/>
        {/* O‘NG: User + Logout */}
        <div className="w-1/3 flex justify-end items-center gap-4">
          <span className="text-gray-600">{user?.email}</span>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>

      </div>
    </header>
  );
}
