import { useEffect } from "react";
import NavLink from "../components/NavLink";
import { Outlet, useNavigate } from "react-router-dom";
import GetUser from "../helper/getUser";

const HomeApp = () => {
  const user = GetUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!!user && !user?.username) navigate("/auth/login");
  }, [user]);
  return (
    <div>
      <NavLink />
      <Outlet />
    </div>
  );
};

export default HomeApp;
