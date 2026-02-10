import { useForm } from "react-hook-form";

export const RegisterPage = () => {
  const { register,  // maydoni ro'yhatdan o'tkazishni imkonini beradi
          handleSubmit  //formani tasdiqlovchi funksiya
        } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2>Register</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          span="Your Username"
          type="text"
          holder="Username"
          {...register("username", { required: true })}
        />

        <input
          span="Your Password"
          type="password"
          holder="Password"
          {...register("password", { required: true })}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};