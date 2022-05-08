import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/dms.jpg";

class Navbar extends Component {
  //render method
  render() {
    return (
      <div className="container-fluid navbarcontainer">
        <div className="row ">
          <div className=" col-1 org_logo">
            <a href="#">
              <img src={logo} width="100%" height="100%"/>
            </a>
          </div>
          <div className="col-10 org_name">
            <span className="organization_name ">
              Disaster Management System{" "}
            </span>
          </div>
          <div className="col-1"></div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
          <div className="container">
            <button
              className="navbar-toggler toogle_button"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/inventory/Inventory">
                    Inventory
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/volunteer/Volunteer">
                    Volunteer
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/feedback/Feedback">
                    Feedback
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/Donations">
                    Donation
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/admin/Dashboard">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
