import React from "react";
import "../style/NavBar.css"; // Make sure this file exists

const NavBar = () => {
  const navItems = ["Home", "Posts", "Categories", "Technology", "Contact"];

  return (
    <nav className="navbar bg-danger text-white py-4 px-4">
      <div className="container d-flex justify-content-center gap-5">
        {navItems.map((item) => (
          <button
            key={item}
            className="btn btn-outline-light nav-btn"
            style={{
              fontSize: "1.2rem",
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
