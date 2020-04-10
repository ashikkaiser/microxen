import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

class Header extends Component {
  render() {
    return (
      <>
        <header className="site-header header-transparent mo-left">
          <div className="sticky-header main-bar-wraper navbar-expand-lg">
            <div className="main-bar clearfix ">
              <div className="container clearfix">
                <div className="logo-header mostion">
                  <Link to={"./"} className="dez-page">
                    <img src={Logo} style={{ maxWidth: "200px" }} alt="logo" />
                  </Link>
                </div>

                <button
                  className="navbar-toggler collapsed navicon justify-content-end"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>

                {/* <div className="extra-nav">
                  <div className="extra-cell">
                    <Link
                      to={"./contact"}
                      className="dez-page site-button primary"
                    >
                      Inquire Now{" "}
                    </Link>
                  </div>
                </div> */}

                <div
                  className="header-nav navbar-collapse collapse justify-content-end"
                  id="navbarNavDropdown"
                >
                  <ul className="nav navbar-nav">
                    <li className="active">
                      <Link to={""}>
                        <span className="ti-home"></span>{" "}
                      </Link>
                    </li>
                    {/* <li>
                      <Link to={""}>Pages</Link>
                    </li> */}
                    <li>
                      <Link to={""}>
                        Our Service <i className="fa fa-chevron-down"></i>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to={"/web-development"}>Web Development</Link>
                        </li>
                        <li>
                          <Link to={"/about"}>About us</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to={"/about"}>About us</Link>
                    </li>
                    <li>
                      <Link to={"/contact"}>Contact us</Link>
                    </li>
                    {/* 
                    <li>
                      <Link to={""}>
                        Our Portfolio <i className="fa fa-chevron-down"></i>
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
export default Header;
