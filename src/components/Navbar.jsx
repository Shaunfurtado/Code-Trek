// import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">
          <Link to="/">Competitve Programming Solutions</Link>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
