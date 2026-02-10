import { Navigate } from "react-router-dom";
import { useAuth } from "../processes/auth/useAuth";

export default function ProtectedRoute({ children }) {
  const token = useAuth((s) => s.token);

  if (!token) return <Navigate to="/auth/login" replace />;

  return children;
}
