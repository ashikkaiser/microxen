import React, { Component } from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";

class Footer extends Component {
  render() {
    return (
      <>
        <footer className="site-footer text-uppercase">
          <div className="footer-top bg-primary">
            <div className="container wow fadeIn" data-wow-delay="0.5s">
              <div className="row">
                <div className="col-5 col-lg-2 col-md-6 col-sm-6 footer-col-4">
                  <div className="widget widget_services border-0">
                    <h5 className="m-b30 text-white">Company</h5>
                    <ul>
                      <li>
                        <a href="about-1.html">About Us </a>
                      </li>
                      <li>
                        <a href="index.html">Home </a>
                      </li>
                      <li>
                        <a href="contact.html">Contact Us</a>
                      </li>
                      <li>
                        <a href="about-1.html">About Us</a>
                      </li>
                      <li>
                        <a href="service.html">Our Services</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-7 col-lg-2 col-md-6 col-sm-6 footer-col-4">
                  <div className="widget widget_services border-0">
                    <h5 className="m-b30 text-white">Useful Link</h5>
                    <ul>
                      <li>
                        <a href="index.html">Create Account</a>
                      </li>
                      <li>
                        <a href="index.html">Company Philosophy </a>
                      </li>
                      <li>
                        <a href="contact.html">Corporate Culture</a>
                      </li>
                      <li>
                        <a href="about-1.html">Portfolio</a>
                      </li>
                      <li>
                        <a href="project-details.html">Project Details</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 footer-col-4">
                  <div className="widget widget_getintuch">
                    <h5 className="m-b30 text-white ">Contact us</h5>
                    <ul>
                      <li>
                        <i className="ti-location-pin"></i>
                        <strong>address</strong> House # 1106, Road # 1/A,
                        Baitul Aman Housing Society
                        <br />
                        Adabor, Dhaka-1207
                      </li>
                      <li>
                        <i className="ti-mobile"></i>
                        <strong>phone</strong>+8801755-682652 (24/7 Support
                        Line)
                      </li>
                      <li>
                        <i className="ti-email"></i>
                        <strong>email</strong>info@microxen.com
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 footer-col-4 ">
                  <div className="widget">
                    <h5 className="m-b30 text-white">
                      Subscribe To Our Newsletter
                    </h5>
                    <p className="text-capitalize m-b20">
                      If you have any questions, you can contact with us so that
                      we can give you a satisfying answer. Subscribe to our
                      newsletter to get our latest products.
                    </p>
                    <div className="subscribe-form m-b20">
                      <form
                        className="dzSubscribe"
                        action="script/mailchamp.php"
                        method="post"
                      >
                        <div className="dzSubscribeMsg"></div>
                        <div className="input-group">
                          <input
                            name="dzEmail"
                            required="required"
                            className="form-control"
                            placeholder="Your Email Id"
                            type="email"
                          />
                          <span className="input-group-btn">
                            <button
                              name="submit"
                              value="Submit"
                              type="submit"
                              className="site-button"
                            >
                              Subscribe
                            </button>
                          </span>
                        </div>
                      </form>
                    </div>
                    <ul className="list-inline m-a0">
                      <li>
                        <a href="/" className="site-button facebook circle ">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/" className="site-button google-plus circle ">
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/" className="site-button linkedin circle ">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/" className="site-button instagram circle ">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/" className="site-button twitter circle ">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom bg-primary">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 text-left ">
                  <span>
                    Copyright © {new Date().getFullYear()} MicroXen Technology
                  </span>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 text-right ">
                  <div className="widget-link ">
                    <ul>
                      <li>
                        <a href="/"> Help Desk</a>
                      </li>
                      <li>
                        <a href="/"> Privacy Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
