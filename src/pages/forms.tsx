import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
  username: string;
  email: string;
  password: string;
}

export default function Forms() {
  const { register, handleSubmit } = useForm<LoginForm>();
  const onValid = (data: LoginForm) => {
    console.log("Im valid bby");
  };
  const onInValid = (errors: FieldErrors) => {
    console.log(errors);
  };
  return (
    <form onSubmit={handleSubmit(onValid, onInValid)}>
      <input
        {...register("username", {
          required: "username is required",
          minLength: {
            message: "the username should be longer than chars",
            value: 5,
          },
        })}
        type="text"
        placeholder="username"
      />
      <input
        {...register("email", { required: "Email is required" })}
        type="email"
        placeholder="email"
      />
      <input
        {...register("password", { required: "password is required" })}
        type="password"
        placeholder="password"
      />
      <input type="submit" placeholder="Create Account" />
    </form>
  );
}
