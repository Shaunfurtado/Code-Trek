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
      {/* <div className="navbar-end">
        <Link to="/form">
          <button className="btn btn-ghost">Add New</button>
        </Link>
        <Link to="/modify">
          <button className="btn btn-ghost">modify</button>
        </Link>
      </div> */}
    </div>
  );
};

export default Navbar;
