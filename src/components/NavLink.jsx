import { Link, useNavigate } from "react-router-dom";

const NavLink = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center text-xl my-6">
      <Link to={"/"} style={{ marginRight: "20px" }}>
        Homepage
      </Link>
      <Link to={"/about"} style={{ marginRight: "20px" }}>
        About
      </Link>
      <Link to={"/contact"} style={{ marginRight: "20px" }}>
        Contact
      </Link>
      <Link to={"/skill"} style={{ marginRight: "20px" }}>
        Skills
      </Link>
      <button
        onClick={() => {
          localStorage.removeItem("user");
          navigate("/auth/login");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default NavLink;
