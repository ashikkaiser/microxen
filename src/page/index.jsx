import React, { Component } from "react";
import Header from "../components/common/header";
import Footer from "../components/common/footer";

import ReactRevSlider from "../components/element/revslider";
import ClientCarousel from "../components/element/client-carousel";
import Team from "../components/element/team-members";
import WhyChooseUs from "../components/element/whychoose";
import ContactForm from "../components/element/contact";

class Index extends Component {
  componentDidMount() {
    window.dz_rev_slider_7();
    window.Agency.load();
  }

  render() {
    return (
      <>
        <Header />

        <div className="page-content">
          <ReactRevSlider />

          <div className="section-full bg-white p-b30">
            <div className="container">
              <div className="row about-1">
                <div className="icon-bx-wraper col-md-4 bg-white col-lg-4 p-tb30 p-l30 p-r50">
                  <div className="icon-md m-b20">
                    <span className="icon-cell">
                      <img src="images/icon/icon3.png" alt="" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="dez-tilte">
                      <span className="font-weight-300">Design & </span> Build
                      Project
                    </h3>
                    <p>
                      MicroXen Tech is a leading Web Development and creative
                      agency, providing professional Website Design, E-commerce
                      and CMS Systems, Branding, Graphic Design as well as
                      Software Development.
                    </p>
                  </div>
                </div>
                <div className="icon-bx-wraper bg-primary p-lr30 about-scale text-white col-md-4 col-lg-4 p-tb30">
                  <div className="icon-md m-b20">
                    <span className="icon-cell">
                      <img src="images/icon/icon1.png" alt="" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="dez-tilte">
                      <span className="font-weight-300">Building & </span>
                      Renovation
                    </h3>
                    <ul className="list-arrow-right m-b0">
                      <li>
                        <i className="fa fa-arrow-right"></i>Prouct Developoment
                      </li>
                      <li>
                        <i className="fa fa-arrow-right"></i>Resources Hiring
                      </li>
                      <li>
                        <i className="fa fa-arrow-right"></i>Business
                        Development
                      </li>
                      <li>
                        <i className="fa fa-arrow-right"></i>Product Analysis
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="icon-bx-wraper p-l50 p-r30 col-md-4 bg-white col-lg-4 p-tb30">
                  <div className="icon-md m-b20">
                    <span className="icon-cell">
                      <img src="images/icon/icon2.png" alt="" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="dez-tilte">
                      <span className="font-weight-300">Handling & </span>
                      Management
                    </h3>
                    <p>
                      The MicroXen Tech is capable of handling a wide variety of
                      complex software development projects that involve
                      integration with other systems (CRMs, ERPs), analysis of
                      large masses of data and use AI to solve expensive
                      business problems. via Type a message
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <WhyChooseUs />

          <Team />
          <div
            className="section-full content-inner bg-primary"
            style={{
              backgroundImage: "url(" + "./images/background/bg22.jpg" + ")"
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7 offset-lg-1 col-md-7 text-white m-b30">
                  <div className="tickit-info">
                    <h2 className="font-50">
                      Lorem Ipsum Dolor
                      <br /> Sit Amet
                    </h2>
                    <p>
                      “Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.”
                    </p>
                    <div className="thumb-img m-b20">
                      <img src="images/testimonials/pic2.jpg" alt="" />
                    </div>
                    <span>-Name Here, Position at Company</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-full content-inner bg-white">
            <div className="container">
              <div className="section-head text-black text-center">
                <h2 className="title-head m-b0">Our Stories</h2>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div
                    className="text-center wow zoomIn icon-hover-bx"
                    data-wow-delay="0.2s"
                    data-wow-duration="1s"
                  >
                    <div className="icon-bx-xl text-primary bg-white radius border-2">
                      <a href="/" className="icon-cell icon-md">
                        <i className="flaticon-shop"></i>
                      </a>
                    </div>
                    <div className="icon-content m-t30">
                      <h5 className="dez-tilte text-uppercase">Shop</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing sed
                        diam nibh euismod.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div
                    className="text-center wow zoomIn icon-hover-bx"
                    data-wow-delay="0.4s"
                    data-wow-duration="1s"
                  >
                    <div className="icon-bx-xl text-primary bg-white radius border-2">
                      <a href="/" className="icon-cell icon-md">
                        <i className="flaticon-star"></i>
                      </a>
                    </div>
                    <div className="icon-content m-t30">
                      <h5 className="dez-tilte text-uppercase">Star</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing sed
                        diam nibh euismod.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div
                    className="text-center wow zoomIn icon-hover-bx"
                    data-wow-delay="0.6s"
                    data-wow-duration="1s"
                  >
                    <div className="icon-bx-xl text-primary bg-white radius border-2">
                      <a href="/" className="icon-cell icon-md">
                        <i className="flaticon-play-button"></i>
                      </a>
                    </div>
                    <div className="icon-content m-t30">
                      <h5 className="dez-tilte text-uppercase">Play</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing sed
                        diam nibh euismod.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div
                    className="text-center wow zoomIn icon-hover-bx"
                    data-wow-delay="0.8s"
                    data-wow-duration="1s"
                  >
                    <div className="icon-bx-xl text-primary bg-white radius border-2">
                      <a href="/" className="icon-cell icon-md">
                        <i className="flaticon-like"></i>
                      </a>
                    </div>
                    <div className="icon-content m-t30">
                      <h5 className="dez-tilte text-uppercase">Heart</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing sed
                        diam nibh euismod.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
          <div className="section-full bg-primary-dark p-tb15">
            <div className="container">
              <ClientCarousel />
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
export default Index;
