import { Outlet } from "react-router-dom";


export default function MainLayout() {
  return (
    <div className="flex min-h-screen">
    
        <main className="p-4 flex-1">
          <Outlet />
        </main>
      </div>
   
  );
}
