import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import Header from "../components/common/header";
import Footer from "../components/common/footer";

class Contact extends Component {
  render() {
    return (
      <>
        <Header />

        <div className="full-section">
          {/* <!-- inner page banner --> */}
          <div
            className="dlab-bnr-inr overlay-primary-dark contact-page"
            style={{
              backgroundImage: "url(" + "./images/background/bg2.jpg" + ")"
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-xs-4">
                  <div className="row text-white">
                    <div
                      className="col-lg-12 col-md-6 m-b30 wow fadeIn"
                      data-wow-delay="0.4s"
                    >
                      <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                        <div className="icon-content">
                          <h5 className="dlab-tilte">
                            <span className="icon-sm text-primary text-left">
                              <i className="ti-location-pin"></i>
                            </span>
                            Company Address
                          </h5>
                          <p>
                            House # 1106, Road # 1/A, Baitul Aman Housing
                            Society, Adabor, Dhaka-1207
                          </p>
                          <h6 className="m-b15 font-weight-400">
                            <i className="ti-alarm-clock"></i> Office Hours
                          </h6>
                          <p className="m-b0">Sat To Thu - 11.00-19.00</p>
                          <p>Friday - Close</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-12 col-md-6 m-b30 wow fadeIn"
                      data-wow-delay="0.6s"
                    >
                      <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                        <div className="icon-content">
                          <h5 className="dlab-tilte">
                            <span className="icon-sm text-primary text-left">
                              <i className="ti-email"></i>
                            </span>
                            E-mail
                          </h5>
                          <p className="m-b0">info@microxen.com</p>
                          <p className="m-b0">sales@microxen.com</p>
                          <p className="m-b0">hr@microxen.com</p>
                          <p>support@microxen.com</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-12 col-md-6 m-b30 wow fadeIn"
                      data-wow-delay="0.8s"
                    >
                      <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                        <div className="icon-content">
                          <h5 className="dlab-tilte">
                            <span className="icon-sm text-primary text-left">
                              <i className="ti-mobile"></i>
                            </span>
                            Phone Numbers
                          </h5>
                          <p>+880 1755 682 652</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-xs-8">
                  <form
                    className="inquiry-form wow fadeInUp dzForm"
                    data-wow-delay="0.2s"
                    action="script/contact.php"
                  >
                    <div className="dzFormMsg"></div>
                    <h3 className="box-title m-t0 m-b10">
                      Feel Free to Contact Us
                      <span className="bg-primary"></span>
                    </h3>

                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="ti-user text-primary"></i>
                            </span>
                            <input
                              name="dzName"
                              type="text"
                              required
                              className="form-control"
                              placeholder="First Name"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="ti-mobile text-primary"></i>
                            </span>
                            <input
                              name="dzOther[Phone]"
                              type="text"
                              required
                              className="form-control"
                              placeholder="Phone"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="ti-email text-primary"></i>
                            </span>
                            <input
                              name="dzEmail"
                              type="email"
                              className="form-control"
                              required
                              placeholder="Your Email Id"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group">
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="ti-agenda text-primary"></i>
                            </span>
                            <textarea
                              name="dzMessage"
                              rows="4"
                              className="form-control"
                              required
                              placeholder="Tell us about your project or idea"
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <button
                          name="submit"
                          type="submit"
                          value="Submit"
                          className="site-button button-lg"
                        >
                          {" "}
                          <span>Message us</span>{" "}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- inner page banner END --> */}
        </div>

        <Footer />
      </>
    );
  }
}
export default Contact;
