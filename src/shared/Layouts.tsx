// src/shared/layouts/MainLayout.tsx
import { Outlet } from "react-router-dom";
import Header from "../widgets/Header";
import Dashboard from "../pages/DashBoard";

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Dashboard />

      <div className="flex flex-col flex-1">
        <Header />

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
