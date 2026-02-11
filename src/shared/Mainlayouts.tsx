// src/shared/Mainlayouts.tsx
import React from "react";
import Sidebar from "../widgets/Sidebar";
import Header from "../widgets/Header";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-6 flex-1 overflow-auto">
          <Outlet /> {/* Nested route shu yerda render bo‘ladi */}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
