import React, { Component } from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import Bging from "../../assets/images/footer-bg.jpg";

class ContactForm extends Component {
  render() {
    return (
      <div
        className="section-full content-inner bg-primary contact-2"
        style={{
          backgroundImage: "url(" + Bging + ")",
          backgroundRepeat: "round"
        }}
      >
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-7">
              <div
                className="wow fadeInLeft"
                data-wow-delay="0.4s"
                data-wow-duration="1s"
              >
                <div
                  className="support-form support-box-form "
                  style={{ backgroundColor: "rgba(232, 244, 248, 0.73)" }}
                >
                  <div className="support-title m-b30">
                    <h6 className="text-uppercase font-weight-500 m-b10">
                      Support
                    </h6>
                    <h2 className="font-40 font-weight-400 m-tb0">
                      Need Help?
                    </h2>
                  </div>
                  <div className="dezPlaceAni">
                    <div className="dzFormMsg"></div>
                    <form method="post" className="" action="">
                      <input type="hidden" value="Contact" name="dzToDo" />
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="form-group ">
                            <div className="input-group">
                              <label className="text-white">Your Name</label>
                              <input
                                name="dzName"
                                type="text"
                                required=""
                                className="form-control"
                                placeholder=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="form-group">
                            <div className="input-group">
                              <label>Phone</label>
                              <input
                                name="dzOther[Phone]"
                                type="text"
                                required=""
                                className="form-control"
                                placeholder=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="form-group">
                            <div className="input-group">
                              <label>Your Email Address</label>
                              <input
                                name="dzEmail"
                                type="email"
                                className="form-control"
                                required=""
                                placeholder=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="form-group">
                            <div className="input-group">
                              <label>Your Message...</label>
                              <textarea
                                name="dzMessage"
                                rows="4"
                                className="form-control"
                                required=""
                                placeholder=""
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                          <button
                            name="submit"
                            type="submit"
                            value="Submit"
                            className="site-button radius-xl button-md m-t10"
                          >
                            Submit Now
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 support-box-form"
              style={{ backgroundColor: "rgba(232, 244, 248, 0.73)" }}
            >
              <div
                className="contact-info-bx p-a30 text-red wow fadeInRight"
                data-wow-delay="0.8s"
                data-wow-duration="1s"
              >
                <div className="m-b10">
                  <span>Address</span>
                  <h3>
                    House # 1106, Road # 1/A, Baitul Aman Housing Society
                    <br />
                    Adabor, Dhaka-1207
                  </h3>
                </div>
                <div className="m-b10">
                  <span>E-mail</span>
                  <h3>Info@microxen.com</h3>
                </div>
                <div className="m-b10">
                  <span>Phone</span>
                  <h3>(+880) 1755-682652</h3>
                </div>
                <div className="m-b10">
                  <span>Fins us on</span>
                  <ul className="list-inline socail-icon m-t15 m-a0">
                    <li>
                      <a
                        href="https://www.facebook.com/microXenTech/"
                        target="_blank"
                        className="site-button white facebook"
                        style={{ width: "54px" }}
                      >
                        <FacebookIcon />
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="site-button white google-plus"
                        style={{ width: "54px" }}
                      >
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="site-button white linkedin"
                        style={{ width: "54px" }}
                      >
                        <LinkedInIcon />
                      </a>
                    </li>

                    <li>
                      <a
                        href="/"
                        className="site-button white twitter"
                        style={{ width: "54px" }}
                      >
                        <TwitterIcon />
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="site-button white twitter"
                        style={{ width: "54px" }}
                      >
                        <GitHubIcon />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
