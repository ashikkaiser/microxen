import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// const options = {
//     items: 1,
// };

class ClientCarousel extends Component {
  render() {
    return (
      <>
        <OwlCarousel
          className="owl-theme client-logo-carousel"
          loop
          margin={10}
          nav
          items={6}
          dots={false}
        >
          <div className="item">
            <div className="client-logo text-center">
              <img src="images/client-logo/logo1.png" alt="" />
            </div>
          </div>
          <div className="item">
            <div className="client-logo text-center">
              <img src="images/client-logo/logo2.png" alt="" />
            </div>
          </div>
          <div className="item">
            <div className="client-logo text-center">
              <img src="images/client-logo/logo3.png" alt="" />
            </div>
          </div>
          <div className="item">
            <div className="client-logo text-center">
              <img src="images/client-logo/logo4.png" alt="" />
            </div>
          </div>
        </OwlCarousel>
      </>
    );
  }
}

export default ClientCarousel;
