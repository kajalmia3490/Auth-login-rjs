import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ username: "", password: "" });
  const handleSubmit = () => {
    let userList = localStorage.getItem("userlist");
    userList = userList ? JSON.parse(userList) : [];
    let checkUser = userList.some(
      ({ username, password }) =>
        username === userData.username && password === userData.password
    );
    if (checkUser) {
      localStorage.setItem("user", JSON.stringify(userData));
      navigate("/");
    } else {
      alert("User is not registered!");
      navigate("/auth/signup");
    }
  };
  return (
    <div>
      <h3 className="text-xl my-5 font-bold text-center">Login Form</h3>
      <form
        onSubmit={handleSubmit}
        className="border p-10 bg-teal-600 rounded"
        style={{
          width: "30%",
          margin: "auto",
        }}
      >
        <p className="font-bold text-white">Username*</p>
        <input
          className="w-full mb-2 p-1.5 rounded outline-none"
          placeholder="username"
          onChange={(e) =>
            setUserData((prev) => {
              return { ...prev, username: e.target.value };
            })
          }
        />

        <p className="font-bold text-white">Password*</p>
        <input
          className="w-full mb-10 p-1.5 rounded outline-none"
          placeholder="password"
          onChange={(e) =>
            setUserData((prev) => {
              return { ...prev, password: e.target.value };
            })
          }
        />
        <input
          className="
            block 
            p-1.5 
            rounded 
            border-none 
            bg-black 
            hover:bg-red-600 
            text-white
            font-bold 
            w-full"
          name="Login"
          value='Log In'
          type="submit"
        />
      </form>
      <p className="text-center mt-5">
        <Link
          className="font-bold p-3 underline"
          to="/auth/signup"
        >
          Go to SignUp
        </Link>
      </p>
    </div>
  );
};

export default Login;
