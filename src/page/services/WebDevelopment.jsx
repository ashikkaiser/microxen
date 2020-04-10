import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import TestimonialCarousel from "../../components/element/TestimonialCarousel";

class WebDevelopment extends Component {
  render() {
    return (
      <>
        <Header />

        <div class="page-content bg-white">
          {/* <!-- inner page banner --> */}
          <div
            class="dlab-bnr-inr overlay-primary"
            style={{
              backgroundImage: "url(" + "./images/banner/bnr4.jpg" + ")"
            }}
          >
            <div class="container">
              <div class="dlab-bnr-inr-entry">
                <h1 class="text-white">Web Development</h1>
                {/* <!-- Breadcrumb row --> */}
                <div class="breadcrumb-row">
                  <ul class="list-inline">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>Web Development</li>
                  </ul>
                </div>
                {/* <!-- Breadcrumb row END --> */}
              </div>
            </div>
          </div>
          {/* <!-- inner page banner END --> */}
          <div class="content-block">
            {/* <!-- About Us --> */}
            <div class="section-full content-inner exp-services">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="section-head text-black text-center">
                      <h4 class="text-gray-dark font-weight-500 m-b10">
                        Web Development Technologies
                      </h4>
                      <h2 class="box-title m-tb0">
                        Scalable, interactive & custom PHP solutions on your way
                        <span class="bg-primary"></span>
                      </h2>
                      <p class="font-weight-300 font-18">
                        Within a span of{" "}
                        <strong class="text-primary">15</strong> years Team In
                        India has emerged as one of the leading companies
                        teaming the expert and experienced PHP developers. With
                        the undaunted skills and the unmatched assistance our
                        team of <strong class="text-yellow">300+</strong> strong
                        and dedicated PHP developers have developed{" "}
                        <strong class="text-red">2500+</strong> portals and
                        websites for <strong class="text-pink">2000+</strong>{" "}
                        clients. We support clients from all over the world
                        including USA, UK, Australia, France, and New Zealand.
                      </p>
                    </div>
                    <div class="row serv">
                      <div
                        class="col-lg-2 col-md-4 col-sm-6 m-b30 wow fadeInUp"
                        data-wow-delay="0.2s"
                      >
                        <div class="icon-bx-wraper expertise  bx-style-1 p-lr10 p-tb20 center">
                          <div class="icon-bx-sm bg-primary radius m-b20">
                            <a href="#" class="icon-cell">
                              <i class="flaticon-devices"></i>
                            </a>
                          </div>
                          <div class="icon-content">
                            <h5 class="dlab-tilte">
                              <a href="#">Custom Applications</a>
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div
                        class="col-lg-2 col-md-4 col-sm-6 m-b30 wow fadeInUp"
                        data-wow-delay="0.4s"
                      >
                        <div class="icon-bx-wraper expertise  bx-style-1 p-lr10 p-tb20 center">
                          <div class="icon-bx-sm bg-primary radius m-b20">
                            <a href="#" class="icon-cell">
                              <i class="flaticon-pen"></i>
                            </a>
                          </div>
                          <div class="icon-content">
                            <h5 class="dlab-tilte">
                              <a href="#">Dynamic Website</a>
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div
                        class="col-lg-2 col-md-4 col-sm-6 m-b30 wow fadeInUp"
                        data-wow-delay="0.6s"
                      >
                        <div class="icon-bx-wraper expertise  bx-style-1 p-lr10 p-tb20 center">
                          <div class="icon-bx-sm bg-primary radius m-b20">
                            <a href="#" class="icon-cell">
                              <i class="flaticon-layers"></i>
                            </a>
                          </div>
                          <div class="icon-content">
                            <h5 class="dlab-tilte">
                              <a href="#">CMS Development</a>
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div
                        class="col-lg-2 col-md-4 col-sm-6 m-b30 wow fadeInUp"
                        data-wow-delay="0.8s"
                      >
                        <div class="icon-bx-wraper expertise  bx-style-1 p-lr10 p-tb20 center">
                          <div class="icon-bx-sm bg-primary radius m-b20">
                            <a href="#" class="icon-cell">
                              <i class="flaticon-shop"></i>
                            </a>
                          </div>
                          <div class="icon-content">
                            <h5 class="dlab-tilte">
                              <a href="#">E-commerce</a>
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div
                        class="col-lg-2 col-md-4 col-sm-6 m-b30 wow fadeInUp"
                        data-wow-delay="1.0s"
                      >
                        <div class="icon-bx-wraper expertise  bx-style-1 p-lr10 p-tb20 center">
                          <div class="icon-bx-sm bg-primary radius m-b20">
                            <a href="#" class="icon-cell">
                              <i class="flaticon-technology"></i>
                            </a>
                          </div>
                          <div class="icon-content">
                            <h5 class="dlab-tilte">
                              <a href="#">
                                API <br /> Integration
                              </a>
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div
                        class="col-lg-2 col-md-4 col-sm-6 m-b30 wow fadeInUp"
                        data-wow-delay="1.2s"
                      >
                        <div class="icon-bx-wraper expertise  bx-style-1 p-lr10 p-tb20 center">
                          <div class="icon-bx-sm bg-primary radius m-b20">
                            <a href="#" class="icon-cell">
                              <i class="flaticon-internet"></i>
                            </a>
                          </div>
                          <div class="icon-content">
                            <h5 class="dlab-tilte">
                              <a href="#">Cloud (SaaS, PaaS)</a>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Our Services --> */}
            {/* <!-- About Us --> */}
            <div class="section-full">
              <div class="container-fluid">
                <div class="row dzseth">
                  <div class="col-lg-6 col-md-12 p-a0">
                    <img src="images/about/pic3.jpg" alt="" class="img-cover" />
                  </div>
                  <div class="col-lg-6 col-md-12 bg-black-light p-lr0 dis-tbl">
                    <div
                      class="p-a30 dis-tbl-cell wow fadeInRight"
                      data-wow-delay="0.2s"
                    >
                      <div class="max-w500 m-auto p-tb30">
                        <div class="row">
                          <div class="col-lg-12 text-white">
                            <h3 class="box-title m-b10">
                              How We Work<span class="bg-primary"></span>
                            </h3>
                            <h5 class="m-b30">
                              Since our foundation in 2005 our goal has been to
                              use digital technology to create experiences.
                            </h5>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-12 m-b30 chosesus-content">
                            <ul class="list-checked primary text-white">
                              <li>
                                <span>
                                  Contrary to popular belief, Lorem Ipsum is not
                                  simply
                                </span>
                              </li>
                              <li>
                                <span>
                                  Random text. It has roots in a piece of
                                  classical Latin literature
                                </span>
                              </li>
                              <li>
                                <span>
                                  Latin professor at Hampden-Sydney College in
                                  Virginia
                                </span>
                              </li>
                            </ul>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley.
                            </p>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley.
                            </p>
                            <a
                              href="#"
                              class="site-button radius-xl outline white"
                            >
                              Read More <i class="fa fa-long-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- About Us End --> */}
            {/* <!-- About Us --> */}
            <div class="section-full content-inner">
              <div class="container">
                <div class="section-head text-black text-center">
                  <h4 class="text-gray-dark m-b10">Services</h4>
                  <h2 class="box-title m-tb0">
                    PHP Development Services<span class="bg-primary"></span>
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
              <div class="container">
                <div class="row ">
                  <div
                    class="col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div class="icon-bx-wraper expertise  bx-style-1 p-a30 center">
                      <div class="icon-content">
                        <h4 class="dlab-tilte text-uppercase">
                          <a href="#">
                            PHP Web <br /> Portals
                          </a>
                        </h4>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the.
                        </p>
                        <a
                          href="#"
                          class="site-button radius-xl outline outline-2"
                        >
                          Read Move
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div class="icon-bx-wraper expertise  bx-style-1 p-a30 center">
                      <div class="icon-content">
                        <h4 class="dlab-tilte text-uppercase">
                          <a href="#">
                            PHP Mobile <br /> Web Services
                          </a>
                        </h4>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the.
                        </p>
                        <a
                          href="#"
                          class="site-button radius-xl outline outline-2"
                        >
                          Read Move
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <div class="icon-bx-wraper expertise  bx-style-1 p-a30 center">
                      <div class="icon-content">
                        <h4 class="dlab-tilte text-uppercase">
                          <a href="#">
                            PHP Backend <br /> Solutions
                          </a>
                        </h4>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the.
                        </p>
                        <a
                          href="#"
                          class="site-button radius-xl outline outline-2"
                        >
                          Read Move
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    <div class="icon-bx-wraper expertise  bx-style-1 p-a30 center">
                      <div class="icon-content">
                        <h4 class="dlab-tilte text-uppercase">
                          <a href="#">
                            Social Networking <br /> Development
                          </a>
                        </h4>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the.
                        </p>
                        <a
                          href="#"
                          class="site-button radius-xl outline outline-2"
                        >
                          Read Move
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeInUp"
                    data-wow-delay="1.0s"
                  >
                    <div class="icon-bx-wraper expertise  bx-style-1 p-a30 center">
                      <div class="icon-content">
                        <h4 class="dlab-tilte text-uppercase">
                          <a href="#">
                            PHP eCommerce <br /> Solution
                          </a>
                        </h4>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the.
                        </p>
                        <a
                          href="#"
                          class="site-button radius-xl outline outline-2"
                        >
                          Read Move
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeInUp"
                    data-wow-delay="1.2s"
                  >
                    <div class="icon-bx-wraper expertise  bx-style-1 p-a30 center">
                      <div class="icon-content">
                        <h4 class="dlab-tilte text-uppercase">
                          <a href="#">
                            PHP <br /> Frameworks
                          </a>
                        </h4>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the.
                        </p>
                        <a
                          href="#"
                          class="site-button radius-xl outline outline-2"
                        >
                          Read Move
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Our Services --> */}
            {/* <!-- Why Chose Us --> */}
            <div
              class="section-full content-inner-1 overlay-primary about-service bg-img-fix"
              style={{
                backgroundImage: "url(" + "./images/background/bg1.jpg" + ")"
              }}
            >
              <div class="container">
                <div class="section-head text-white text-center">
                  <h2 class="box-title m-tb0 max-w800 m-auto">
                    Amazing things happen to your business when we connect those
                    dots of utility and value<span class="bg-primary"></span>
                  </h2>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over
                  </p>
                </div>
              </div>
              <div class="container">
                <div class="row text-white">
                  <div class="col-lg-4 col-md-4 col-sm-6 m-b30">
                    <div class="icon-bx-wraper bx-style-1 p-a30 center">
                      <div class="icon-lg text-white m-b20">
                        {" "}
                        <a href="#" class="icon-cell text-white">
                          <i class="flaticon-pen"></i>
                        </a>{" "}
                      </div>
                      <div class="icon-content">
                        <h5 class="dlab-tilte text-uppercase">Creative</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod..
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-6 m-b30">
                    <div class="icon-bx-wraper bx-style-1 p-a30 center">
                      <div class="icon-lg text-white m-b20">
                        {" "}
                        <a href="#" class="icon-cell text-white">
                          <i class="flaticon-diamond"></i>
                        </a>{" "}
                      </div>
                      <div class="icon-content">
                        <h5 class="dlab-tilte text-uppercase">Innovative</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod..
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-12 m-b30">
                    <div class="icon-bx-wraper bx-style-1 p-a30 center">
                      <div class="icon-lg text-white m-b20">
                        {" "}
                        <a href="#" class="icon-cell text-white">
                          <i class="flaticon-devices"></i>
                        </a>{" "}
                      </div>
                      <div class="icon-content">
                        <h5 class="dlab-tilte text-uppercase">Functional</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod..
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="choses-info text-white">
                <div class="container-fluid">
                  <div class="row choses-info-content">
                    <div
                      class="col-lg-3 col-md-3 col-sm-6 p-a30 wow zoomIn"
                      data-wow-delay="0.2s"
                    >
                      <h2 class="m-t0 m-b10 font-weight-400 font-45">
                        <i class="ti-bag m-r10"></i>
                        <span class="counter">15</span>+
                      </h2>
                      <h4 class="font-weight-300 m-t0">Years in Business</h4>
                    </div>
                    <div
                      class="col-lg-3 col-md-3 col-sm-6 p-a30 wow zoomIn"
                      data-wow-delay="0.4s"
                    >
                      <h2 class="m-t0 m-b10 font-weight-400 font-45">
                        <i class="ti-user m-r10"></i>
                        <span class="counter">700</span>+
                      </h2>
                      <h4 class="font-weight-300 m-t0">Happy Clients</h4>
                    </div>
                    <div
                      class="col-lg-3 col-md-3 col-sm-6 p-a30 wow zoomIn"
                      data-wow-delay="0.6s"
                    >
                      <h2 class="m-t0 m-b10 font-weight-400 font-45">
                        <i class="flaticon-users m-r10"></i>
                        <span class="counter">50</span>+
                      </h2>
                      <h4 class="font-weight-300 m-t0">Technical Experts</h4>
                    </div>
                    <div
                      class="col-lg-3 col-md-3 col-sm-6 p-a30 wow zoomIn"
                      data-wow-delay="0.8s"
                    >
                      <h2 class="m-t0 m-b10 font-weight-400 font-45">
                        <i class="ti-mobile m-r10"></i>
                        <span class="counter">200</span>+
                      </h2>
                      <h4 class="font-weight-300 m-t0">Apps Delivered</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Why Chose Us End --> */}
            {/* <!-- Testimonials --> */}
            <div
              class="section-full content-inner wow fadeIn"
              data-wow-delay="0.4s"
              style={{
                backgroundImage: "url(" + "./images/background/bg-map.jpg" + ")"
              }}
            >
              <div class="container">
                <div class="section-head text-center">
                  <h2 class="box-title m-tb0">
                    Our Testimonials<span class="bg-primary"></span>
                  </h2>
                  <p>
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the{" "}
                  </p>
                </div>
                <div class="section-content m-b30 row">
                  <TestimonialCarousel />
                </div>
              </div>
            </div>
            {/* <!-- Testimonials END --> */}
            {/* <!-- Get in touch --> */}
            <div
              class="section-full overlay-primary-dark bg-img-fix"
              style={{
                backgroundImage: "url(" + "./images/background/bg1.jpg" + ")"
              }}
            >
              <div class="container">
                <div class="row">
                  <div class="col-lg-5 col-md-5 content-inner chosesus-content text-white">
                    <h2
                      class="box-title m-b15 wow fadeInLeft"
                      data-wow-delay="0.2s"
                    >
                      Let's get in touch<span class="bg-primary"></span>
                    </h2>
                    <p class="font-16 op8 wow fadeInLeft" data-wow-delay="0.4s">
                      Give us a call or drop by anytime, we endeavour to answer
                      all enquiries within 24 hours on business days.
                    </p>
                    <h3
                      class="font-weight-500 m-b50 op6 wow fadeInLeft"
                      data-wow-delay="0.6s"
                    >
                      By 700+ customers for 3200+ Web and Mobile App development
                      projects.
                    </h3>
                    <h4 class="wow fadeInLeft" data-wow-delay="0.8s">
                      & What you will get:
                    </h4>
                    <ul
                      class="list-checked primary wow fadeInLeft"
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
                  <div class="col-lg-7 col-md-7 m-b30">
                    <form
                      class="inquiry-form wow fadeInUp dzForm"
                      data-wow-delay="0.2s"
                      action="script/contact.php"
                    >
                      <div class="dzFormMsg"></div>
                      <h3 class="box-title m-t0 m-b10">
                        Let's Convert Your Idea into Reality{" "}
                        <span class="bg-primary"></span>
                      </h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the
                      </p>
                      <div class="row">
                        <div class="col-lg-6">
                          <div class="form-group">
                            <div class="input-group">
                              <span class="input-group-addon">
                                <i class="ti-user text-primary"></i>
                              </span>
                              <input
                                name="dzName"
                                type="text"
                                required
                                class="form-control"
                                placeholder="First Name"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="form-group">
                            <div class="input-group">
                              <span class="input-group-addon">
                                <i class="ti-mobile text-primary"></i>
                              </span>
                              <input
                                name="dzOther[Phone]"
                                type="text"
                                required
                                class="form-control"
                                placeholder="Phone"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="form-group">
                            <div class="input-group">
                              <span class="input-group-addon">
                                <i class="ti-email text-primary"></i>
                              </span>
                              <input
                                name="dzEmail"
                                type="email"
                                class="form-control"
                                required
                                placeholder="Your Email Id"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="form-group">
                            <div class="input-group">
                              <span class="input-group-addon">
                                <i class="ti-check-box text-primary"></i>
                              </span>
                              <input
                                name="dzOther[Subject]"
                                type="text"
                                required
                                class="form-control"
                                placeholder="Upload File"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="form-group">
                            <div class="input-group">
                              <span class="input-group-addon">
                                <i class="ti-file text-primary"></i>
                              </span>
                              <input
                                name="dzOther[Subject]"
                                type="text"
                                required
                                class="form-control"
                                placeholder="Upload File"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="form-group">
                            <div class="input-group">
                              <span class="input-group-addon">
                                <i class="ti-agenda text-primary"></i>
                              </span>
                              <textarea
                                name="dzMessage"
                                rows="4"
                                class="form-control"
                                required
                                placeholder="Tell us about your project or idea"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="form-group">
                            <div class="input-group">
                              <div
                                class="g-recaptcha"
                                data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN"
                                data-callback="verifyRecaptchaCallback"
                                data-expired-callback="expiredRecaptchaCallback"
                              ></div>
                              <input
                                class="form-control d-none"
                                data-recaptcha="true"
                                required
                                data-error="Please complete the Captcha"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <button
                            name="submit"
                            type="submit"
                            value="Submit"
                            class="site-button button-lg"
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
            {/* <!-- Get in touch --> */}
          </div>
          {/* <!-- contact area END --> */}
        </div>

        <Footer />
      </>
    );
  }
}
export default WebDevelopment;
