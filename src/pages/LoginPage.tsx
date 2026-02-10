// src/pages/auth-login/ui/AuthLogin.jsx
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../processes/auth/useAuth";

export default function AuthLogin() {
  const { register, handleSubmit } = useForm();
  const login = useAuth((s) => s.login);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.email === "admin" && data.password === "1234") {
      login("fake-jwt-token");
      navigate("/");
    } else {
      alert("Login yoki parol xato");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-80">
      <h2 className="text-2xl font-bold text-center">Admin Login</h2>

      <input {...register("email")} placeholder="Login" className="w-full border p-2 rounded" />
      <input type="password" {...register("password")} placeholder="Parol" className="w-full border p-2 rounded" />

      <button className="w-full bg-black text-white p-2 rounded">Kirish</button>
    </form>
  );
}
