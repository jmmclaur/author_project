import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";

function Main({}) {
  /*navigation
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/"); // Navigate to the "main" root page
  };*/
  console.log("Main component is rendering");
  return (
    <div>
      <Link to="/author_project/signpost" className="signpost">
        <h1 className="main_welcome">Majera Palae</h1>{" "}
      </Link>
    </div>
  );
}

export default Main;
