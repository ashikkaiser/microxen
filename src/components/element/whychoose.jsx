import React, { Component } from "react";

class WhyChooseUs extends Component {
  render() {
    return (
      <div
        className="section-full content-inner-2"
        style={{
          backgroundColor: "#f5f5f5"
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 section-head text-center">
              <h2 className="title-head m-b0">Why You Choose Us !</h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-4 col-sm-6 m-b30 wow fadeInUp"
              data-wow-delay="0.2s"
              data-wow-duration="1s"
            >
              <div className="icon-bx-wraper our-service center">
                <div className="icon-lg text-primary m-b20">
                  <a href="/" className="icon-cell">
                    <img src="images/icon/icon4.png" alt="" />
                  </a>
                </div>
                <div className="icon-content p-lr50">
                  <h5 className="dez-tilte text-uppercase">Experience</h5>
                  <p>
                    We are a quality & established providing best solutions in
                    IT industry and We provide the affordable IT solutions,
                    expert technicians, friendly knowledgeable support,
                    top-of-the-line hardware and technology.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-4 col-sm-6 m-b30 wow fadeInUp"
              data-wow-delay="0.4s"
              data-wow-duration="1s"
            >
              <div className="icon-bx-wraper our-service center">
                <div className="icon-lg text-primary m-b20">
                  <a href="/" className="icon-cell">
                    <img src="images/icon/icon5.png" alt="" />
                  </a>
                </div>
                <div className="icon-content p-lr50">
                  <h5 className="dez-tilte text-uppercase">
                    COMMITMENT TO STABILITY
                  </h5>
                  <p>
                    Our company slogan says it all, we will strive and are
                    committed to provide a the maximum level of stability to our
                    clients.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-4 col-sm-12 m-b30 wow fadeInUp"
              data-wow-delay="0.6s"
              data-wow-duration="1s"
            >
              <div className="icon-bx-wraper our-service center">
                <div className="icon-lg text-primary m-b20">
                  <a href="/" className="icon-cell">
                    <img src="images/icon/icon6.png" alt="" />
                  </a>
                </div>
                <div className="icon-content p-lr50">
                  <h5 className="dez-tilte text-uppercase">
                    CUSTOMERS SATISFACTIONS
                  </h5>
                  <p>
                    We are highly confident in our promise to serve you better.
                    Our focus is to build long term relationships with our
                    customers, not simply a quick sale!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WhyChooseUs;
