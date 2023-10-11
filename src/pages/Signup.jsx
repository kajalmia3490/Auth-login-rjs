import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ username: "", password: "" });

  const handleSubmit = () => {
    let userList = localStorage.getItem("userlist");
    userList = userList ? JSON.parse(userList) : [];
    let checkUser = userList.some(
      ({ username }) => username === userData.username
    );
    if (checkUser) alert("It has already exist!");
    if (!checkUser) {
      localStorage.setItem("userlist", JSON.stringify([...userList, userData]));
      localStorage.setItem("user", JSON.stringify(userData));
      navigate("/");
    }
  };

  return (
    <div>
      <h3 className="text-xl my-5 font-bold text-center">Sign Up Form</h3>
      <form
        onSubmit={handleSubmit}
        className="border p-10 bg-purple-600 rounded"
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
          type="submit"
          className="
            block 
            p-1.5 
            rounded 
            border-none 
            bg-black 
            hover:bg-red-600 
            font-bold 
            text-white 
            w-full"
          name="SignUp"
          value="Sign Up"
        />
      </form>
      <p className="text-center mt-5">
        <Link className="font-bold p-3 underline" to="/auth/login">
          Go to Login
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
