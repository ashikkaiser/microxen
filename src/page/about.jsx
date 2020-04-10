import React, { Component } from "react";
// import { Link } from 'react-router-dom';

import Header from "../components/common/header";
import Footer from "../components/common/footer";
import TestimonialCarousel from "../components/element/TestimonialCarousel";

// var bg1 = require('images/banner/bnr2.jpg');

class About extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="page-content bg-white">
          <div
            className="dlab-bnr-inr overlay-primary"
            style={{
              backgroundImage: "url(" + "./images/banner/bnr2.jpg" + ")"
            }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                {/* <h1 className="text-white">About Us 1</h1> */}

                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>About Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="content-block">
            <div className="section-full content-inner-2">
              <div className="container">
                <div className="section-head text-black text-center">
                  <h4 className="text-gray-dark m-b10">About Us</h4>
                  <h2 className="box-title m-tb0">
                    We create brand new corporate identities
                    <span className="bg-primary"></span>
                  </h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
              <div className="container">
                <div className="row ">
                  <div
                    className="col-lg-5 col-md-4 about-img wow fadeIn"
                    data-wow-delay="0.4s"
                  >
                    <img src="images/about/pic9.jpg" data-tilt alt="" />
                  </div>
                  <div className="col-lg-7 col-md-8">
                    <div
                      className="abuot-box left row m-lr0 wow fadeIn"
                      data-wow-delay="0.6s"
                    >
                      <div className="col-lg-4">
                        <h2 className="box-title m-tb0">
                          About Us<span className="bg-primary"></span>
                        </h2>
                        <h4 className="text-gray-dark">
                          We create unique experiences
                        </h4>
                      </div>
                      <div className="col-lg-8">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMak.
                        </p>
                        <p>
                          Also the leap into electronic typesetting, remaining
                          essentially unchanged. It was popularised in the 1960s
                          with the release of Letraset sheets containing Lorem
                          Ipsum passages, and more recently with desktop
                          publishing software like Aldus PageMak.
                        </p>
                        <p className="m-b0">
                          Also the leap into electronic typesetting, remaining
                          essentially unchanged. It was popularised in the 1960s
                          with the release of Letraset sheets containing Lorem
                          Ipsum passages.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="section-full content-inner-1 overlay-primary about-service bg-img-fix"
              style={{
                backgroundImage: "url(" + "./images/background/bg1.jpg" + ")"
              }}
            >
              <div className="container">
                <div className="section-head text-white text-center">
                  <h2 className="box-title m-tb0 max-w800 m-auto">
                    Amazing things happen to your business when we connect those
                    dots of utility and value
                    <span className="bg-primary"></span>
                  </h2>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over
                  </p>
                </div>
              </div>
              <div className="container">
                <div className="row text-white">
                  <div className="col-lg-4 col-md-4 col-sm-6 m-b30">
                    <div className="icon-bx-wraper bx-style-1 p-a30 center">
                      <div className="icon-lg text-white m-b20">
                        {" "}
                        <a href="#" className="icon-cell text-white">
                          <i className="flaticon-pen"></i>
                        </a>{" "}
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte text-uppercase">Creative</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod..
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 m-b30">
                    <div className="icon-bx-wraper bx-style-1 p-a30 center">
                      <div className="icon-lg text-white m-b20">
                        {" "}
                        <a href="#" className="icon-cell text-white">
                          <i className="flaticon-diamond"></i>
                        </a>{" "}
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte text-uppercase">
                          Innovative
                        </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod..
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 m-b30">
                    <div className="icon-bx-wraper bx-style-1 p-a30 center">
                      <div className="icon-lg text-white m-b20">
                        {" "}
                        <a href="#" className="icon-cell text-white">
                          <i className="flaticon-devices"></i>
                        </a>{" "}
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte text-uppercase">
                          Functional
                        </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod..
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="choses-info text-white">
                <div className="container-fluid">
                  <div className="row choses-info-content">
                    <div
                      className="col-lg-3 col-md-3 col-sm-6 p-a30 wow zoomIn"
                      data-wow-delay="0.2s"
                    >
                      <h2 className="m-t0 m-b10 font-weight-400 font-45">
                        <i className="ti-bag m-r10"></i>
                        <span className="counter">15</span>+
                      </h2>
                      <h4 className="font-weight-300 m-t0">
                        Years in Business
                      </h4>
                    </div>
                    <div
                      className="col-lg-3 col-md-3 col-sm-6 p-a30 wow zoomIn"
                      data-wow-delay="0.4s"
                    >
                      <h2 className="m-t0 m-b10 font-weight-400 font-45">
                        <i className="ti-user m-r10"></i>
                        <span className="counter">700</span>+
                      </h2>
                      <h4 className="font-weight-300 m-t0">Happy Clients</h4>
                    </div>
                    <div
                      className="col-lg-3 col-md-3 col-sm-6 p-a30 wow zoomIn"
                      data-wow-delay="0.6s"
                    >
                      <h2 className="m-t0 m-b10 font-weight-400 font-45">
                        <i className="flaticon-users m-r10"></i>
                        <span className="counter">50</span>+
                      </h2>
                      <h4 className="font-weight-300 m-t0">
                        Technical Experts
                      </h4>
                    </div>
                    <div
                      className="col-lg-3 col-md-3 col-sm-6 p-a30 wow zoomIn"
                      data-wow-delay="0.8s"
                    >
                      <h2 className="m-t0 m-b10 font-weight-400 font-45">
                        <i className="ti-mobile m-r10"></i>
                        <span className="counter">200</span>+
                      </h2>
                      <h4 className="font-weight-300 m-t0">Apps Delivered</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="section-ful our-about-info content-inner-1 wow fadeIn"
              data-wow-delay="0.4s"
              style={{
                backgroundImage: "url(" + "./images/background/bg-map.jpg" + ")"
              }}
            >
              <div className="container">
                <div className="section-head text-center">
                  <h2 className="box-title m-tb0">
                    Mission And Vision<span className="bg-primary"></span>
                  </h2>
                  <p>
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the{" "}
                  </p>
                </div>
                <div className=" row dzseth m-b30">
                  <div
                    className="col-lg-6 col-md-6 m-b30 about-img wow fadeIn"
                    data-wow-delay="0.8s"
                  >
                    <img src="images/our-services/pic1.jpg" data-tilt alt="" />
                  </div>
                  <div className="col-lg-6 col-md-6 m-b30 dis-tbl text-justify">
                    <div className="dis-tbl-cell">
                      <h3 className="box-title">
                        Mision<span className="bg-primary"></span>
                      </h3>
                      <p className="font-16">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.{" "}
                      </p>
                      <p className="font-16">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.{" "}
                      </p>
                      <p className="font-16">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row dzseth">
                  <div className="col-lg-6 col-md-6 dis-tbl text-justify">
                    <div className="dis-tbl-cell">
                      <h3 className="box-title">
                        Vision<span className="bg-primary"></span>
                      </h3>
                      <p className="font-16">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.{" "}
                      </p>
                      <p className="font-16">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.{" "}
                      </p>
                      <p className="font-16">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-6 col-md-6 about-img wow fadeIn"
                    data-wow-delay="0.8s"
                  >
                    <img src="images/our-services/pic2.jpg" data-tilt alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="section-full content-inner wow fadeIn"
              data-wow-delay="0.4s"
              style={{
                backgroundImage: "url(" + "./images/background/bg-map.jpg" + ")"
              }}
            >
              <div className="container">
                <div className="section-head text-center">
                  <h2 className="box-title m-tb0">
                    Our Testimonials<span className="bg-primary"></span>
                  </h2>
                  <p>
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the{" "}
                  </p>
                </div>
                <div className="section-content m-b30 row">
                  <TestimonialCarousel />
                </div>
              </div>
            </div>

            <div
              className="section-full overlay-primary-dark bg-img-fix"
              style={{
                backgroundImage: "url(" + "./images/background/bg1.jpg" + ")"
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 col-md-5 content-inner chosesus-content text-white">
                    <h2
                      className="box-title m-b15 wow fadeInLeft"
                      data-wow-delay="0.2s"
                    >
                      Let's get in touch<span className="bg-primary"></span>
                    </h2>
                    <p
                      className="font-16 op8 wow fadeInLeft"
                      data-wow-delay="0.4s"
                    >
                      Give us a call or drop by anytime, we endeavour to answer
                      all enquiries within 24 hours on business days.
                    </p>
                    <h3
                      className="font-weight-500 m-b50 op6 wow fadeInLeft"
                      data-wow-delay="0.6s"
                    >
                      By 700+ customers for 3200+ Web and Mobile App development
                      projects.
                    </h3>
                    <h4 className="wow fadeInLeft" data-wow-delay="0.8s">
                      & What you will get:
                    </h4>
                    <ul
                      className="list-checked primary wow fadeInLeft"
                      data-wow-delay="1s"
                    >
                      <li>
                        <span>
                          Contrary to popular belief, Lorem Ipsum is not simply
                        </span>
                      </li>
                      <li>
                        <span>
                          Random text. It has roots in a piece of classical
                          Latin literature
                        </span>
                      </li>
                      <li>
                        <span>
                          Latin professor at Hampden-Sydney College in Virginia
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-7 col-md-7 m-b30">
                    <form
                      className="inquiry-form wow fadeInUp dzForm"
                      data-wow-delay="0.2s"
                      action="script/contact.php"
                    >
                      <div className="dzFormMsg"></div>
                      <h3 className="box-title m-t0 m-b10">
                        Let's Convert Your Idea into Reality{" "}
                        <span className="bg-primary"></span>
                      </h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the
                      </p>
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
                        <div className="col-lg-6">
                          <div className="form-group">
                            <div className="input-group">
                              <span className="input-group-addon">
                                <i className="ti-check-box text-primary"></i>
                              </span>
                              <input
                                name="dzOther[Subject]"
                                type="text"
                                required
                                className="form-control"
                                placeholder="Upload File"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <div className="input-group">
                              <span className="input-group-addon">
                                <i className="ti-file text-primary"></i>
                              </span>
                              <input
                                name="dzOther[Subject]"
                                type="text"
                                required
                                className="form-control"
                                placeholder="Upload File"
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
                          <div className="form-group">
                            <div className="input-group">
                              <div
                                className="g-recaptcha"
                                data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN"
                                data-callback="verifyRecaptchaCallback"
                                data-expired-callback="expiredRecaptchaCallback"
                              ></div>
                              <input
                                className="form-control d-none"
                                data-recaptcha="true"
                                required
                                data-error="Please complete the Captcha"
                              />
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
                            <span>Get A Free Quote!</span>{" "}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
export default About;
