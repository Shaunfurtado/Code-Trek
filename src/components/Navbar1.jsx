import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <div role="tablist" className="tabs tabs-bordered">
          <Link to="/CardGrid" className="tab">
            Card Grid
          </Link>

          <Link to="/Dashboard" className="tab">
            Dashboard
          </Link>

          <Link to="/" className="tab">
            Table
          </Link>
        </div>
      </div>
      <div className="navbar-end">
        {/* <Link to="/form">
          <button className="btn btn-ghost">Add New</button>
        </Link>
        <Link to="/modify">
          <button className="btn btn-ghost">Modify</button>
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar1;
