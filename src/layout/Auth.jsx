import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import GetUser from "../helper/getUser";

const Auth = () => {
  const user = GetUser ();
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.username) navigate("/");
  }, [user]);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Auth;
