import React, { Component } from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import LanguageIcon from "@material-ui/icons/Language";

class SingleTeamMember extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div
          className="experts-box text-white p-a20 wow fadeInUp"
          data-wow-delay="0.2s"
          data-wow-duration="1s"
        >
          <div className="clearfix experts-info-bx">
            <div className="experts-img">
              <img src={this.props.img} alt="ashik" />
            </div>
            <div className="experts-info">
              <h5
                className="experts-name"
                style={{ textTransform: "uppercase" }}
              >
                {this.props.name}
              </h5>
              <h6
                className="experts-service"
                style={{
                  textTransform: "capitalize"
                }}
              >
                {this.props.position}
              </h6>
            </div>
          </div>
          <p className="m-b10">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.{" "}
          </p>
          <ul
            style={{
              display: "flex",
              overflow: "hidden",
              listStyleType: "none"
            }}
          >
            <li style={{ marginRight: 4 }}>
              <a href={this.props.mail + "?Subject=Hello%20again"}>
                <EmailIcon />
              </a>

              {/* <a href="">
                <EmailIcon style={{ color: "red" }} />
              </a> */}
            </li>
            <li style={{ marginRight: 4 }}>
              <a
                href={this.props.facebook}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FacebookIcon />
              </a>
            </li>

            <li style={{ marginRight: 4 }}>
              <a
                href={this.props.linkedin}
                rel="noopener noreferrer"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li style={{ marginRight: 4 }}>
              <a
                href={this.props.web}
                rel="noopener noreferrer"
                target="_blank"
              >
                <LanguageIcon />
              </a>
            </li>
            <li style={{ marginRight: 4 }}>
              <a
                href={this.props.instagram}
                rel="noopener noreferrer"
                target="_blank"
              >
                <InstagramIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SingleTeamMember;
