import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../utils/loginSchema";

function Login() {
  const [notice, setNotice] = useState({
    type: "",
    text: "",
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onValid(data) {
    // console.log(`Email valid : ${data.email}`);
    // console.log(`Password : ${data.password}`);
    // console.log(data);
    const isValid =
      data.email === "admin@my.com" && data.password === "12345678";

    if (isValid) {
      setNotice({
        type: "success",
        text: "Login demo berhasil!",
      });
    } else {
      setNotice({
        type: "error",
        text: "Email atau password tidak sesuai",
      });
    }
  }

  function onInvalid(data) {
    console.log(`Error Email valid : ${data.email}`);
    console.log(`Error Password : ${data.password}`);
  }

  //   function onSubmit(data) {
  //     console.log("Data Form: ", data);
  //     console.log(`Email ${data.email}`);
  //     console.log(`Password ${data.password}`);
  //     reset();
  //   }
  //   const [email, setEmail] = useState("");
  return (
    <div>
      {/* <h1 className="mt-5">Controlled Input</h1> */}
      <h1>React Hook Form</h1>
      <form noValidate onSubmit={handleSubmit(onValid, onInvalid)}>
        <label htmlFor="">Email</label>
        <input
          type="text"
          {...register("email")}
          placeholder="Masukkan Email"
          className="mt-4 rounded-lg border p-3"
        />
        {errors.email?.message && (
          <p role="alert" className="mt-1 text-sm text-red-600">
            {errors.email.message}
          </p>
        )}
        <label htmlFor="">Password</label>
        <input
          type="password"
          {...register("password")}
          placeholder="Masukkan Password"
          className="mt-4 rounded-lg border p-3"
        />
        {errors.password?.message && (
          <p role="alert" className="mt-1 text-sm text-red-600">
            {errors.password.message}
          </p>
        )}
        {/* <p className="mt-4">Email: {email}</p> */}
        <button type="Submit" className="ml-2 rounded-lg border p-3">
          Klik
        </button>
        <button
          type="button"
          onClick={() => reset()}
          className="ml-2 rounded-lg border p-3"
        >
          Reset
        </button>
      </form>
      {notice.text && (
        <p
          role="status"
          className={`mt-4 rounded-lg p-3 text-sm ${notice.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
        >
          {notice.text}
        </p>
      )}
    </div>
  );
}

export default Login;
