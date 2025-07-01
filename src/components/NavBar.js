import React from "react";
import "../style/NavBar.css";

const NavBar = () => {
  const navItems = ["Home", "Posts", "Categories", "Technology", "Contact"];

  return (
    <nav className="navbar navbar-custom-bg text-white py-4 px-0 w-100">
      <div
        className="d-flex justify-content-center align-items-center w-100"
        style={{ gap: "45px", marginLeft: "50px" }}
      >
        {navItems.map((item) => (
          <button
            key={item}
            className="btn btn-outline-light nav-btn"
            style={{
              fontSize: "1.4rem",
              borderColor: "transparent",
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
