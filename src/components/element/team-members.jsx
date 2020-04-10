import React, { Component } from "react";

import Ashik from "../../assets/images/ashik.png";
import Arif from "../../assets/images/arif.png";
import Mostofa from "../../assets/images/mostofa.png";
import Tuhin from "../../assets/images/tuhin.png";
import Shopon from "../../assets/images/shopon.png";
import Prince from "../../assets/images/prince.png";
import Shiblu from "../../assets/images/shiblu.png";

import SingleTeamMember from "../common/team";
class Team extends Component {
  render() {
    return (
      <div>
        {" "}
        <div className="section-full content-inner-2 our-team-bx bg-primary">
          <div className="container">
            <div className="row">
              <div className="section-head text-white col-lg-12 text-center">
                <h5 className="title-small"> Team Members</h5>
                <h2 className="title-head m-b0"> Our experts mates</h2>
              </div>
            </div>
            <div className="row">
              <SingleTeamMember
                name={"Md Ashik Kaiser"}
                img={Ashik}
                position={"Chairman"}
                mail={"mailto:ashikkaiser@gmail.com"}
                facebook={"http://fb.me/me.ashikkaiser"}
                instagram={"http://fb.me/mostofa.me"}
                web={"http://ashikkaiser.com"}
                linkedin={"https://www.linkedin.com/in/ashikkaiser/"}
              />
              <SingleTeamMember
                name={"Mostafijur Rahman"}
                img={Mostofa}
                position={"Chief executive officer"}
                mail={"mailto:mostofa122@gmail.com"}
                facebook={"http://fb.me/mostofa.me"}
                instagram={"http://fb.me/mostofa.me"}
                web={"kldhfladsf"}
                linkedin={"/dfsvsdf"}
              />

              <SingleTeamMember
                name={"MM Rahman"}
                img={Arif}
                position={"Assistant Director"}
                mail={"mailto:mmrahmanvip@gmail.com"}
                facebook={"http://fb.me/mmrahman50"}
                instagram={" https://www.instagram.com/mmrahman50"}
                web={"https://www.mmrahman.net"}
                linkedin={"https://www.linkedin.com/in/mmrahman50"}
              />
              <SingleTeamMember
                name={"Tuhin Hosen"}
                img={Tuhin}
                position={"Chief Accountant"}
                mail={"mailto:tuhinvip@gmail.com"}
                facebook={"http://fb.me/mostofa.me"}
                instagram={"http://fb.me/mostofa.me"}
                web={"kldhfladsf"}
                linkedin={"/dfsvsdf"}
              />
              <SingleTeamMember
                name={"Sopon Islam"}
                img={Shopon}
                position={"Chief Accountant"}
                mail={"mailto:shoponvip@gmail.com"}
                facebook={"http://fb.me/mostofa.me"}
                instagram={"http://fb.me/mostofa.me"}
                web={"kldhfladsf"}
                linkedin={"/dfsvsdf"}
              />
              <SingleTeamMember
                name={"Abdullah Al Noman"}
                img={Shiblu}
                position={"seniour Web Develpoer"}
                mail={"mailto:shibluvip@gmail.com"}
                facebook={"http://fb.me/mostofa.me"}
                instagram={"http://fb.me/mostofa.me"}
                web={"kldhfladsf"}
                linkedin={"/dfsvsdf"}
              />
              <SingleTeamMember
                name={"Prince Mahmud"}
                img={Prince}
                position={"Sales Executive"}
                mail={"mailto:princevip720@gmail.com"}
                facebook={"http://fb.me/mostofa.me"}
                instagram={"http://fb.me/mostofa.me"}
                web={"kldhfladsf"}
                linkedin={"/dfsvsdf"}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
