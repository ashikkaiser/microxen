import React, { Component } from "react";
import { Link } from "react-router-dom";

class ReactRevSlider extends Component {
  render() {
    return (
      <>
        <div class="main-slider style-two default-banner" id="home">
          <div class="tp-banner-container">
            <div class="tp-banner">
              <div
                id="welcome_wrapper"
                class="rev_slider_wrapper fullscreen-container"
                data-alias="reveal-add-on36"
                data-source="gallery"
                style={{ background: "#ffffff", padding: "0px" }}
              >
                {/* <!-- START REVOLUTION SLIDER 5.4.7.2 fullscreen mode --> */}
                <div
                  id="welcome"
                  class="rev_slider fullscreenbanner"
                  style={{ display: "none" }}
                  data-version="5.4.7.2"
                >
                  <ul>
                    {/* <!-- SLIDE  --> */}
                    <li
                      data-index="rs-101"
                      data-transition="fadethroughdark"
                      data-slotamount="default"
                      data-hideafterloop="0"
                      data-hideslideonmobile="off"
                      data-easein="default"
                      data-easeout="default"
                      data-masterspeed="default"
                      data-thumb=""
                      data-rotate="0"
                      data-saveperformance="off"
                      data-title="Slide"
                      data-param1=""
                      data-param2=""
                      data-param3=""
                      data-param4=""
                      data-param5=""
                      data-param6=""
                      data-param7=""
                      data-param8=""
                      data-param9=""
                      data-param10=""
                      data-description=""
                    >
                      {/* <!-- MAIN IMAGE --> */}
                      <img
                        src="images/main-slider/dummy.png"
                        alt=""
                        data-lazyload="images/main-slider/slide10.jpg"
                        data-bgposition="center center"
                        data-kenburns="on"
                        data-duration="4000"
                        data-ease="Power3.easeInOut"
                        data-scalestart="150"
                        data-scaleend="100"
                        data-rotatestart="0"
                        data-rotateend="0"
                        data-blurstart="0"
                        data-blurend="0"
                        data-offsetstart="0 0"
                        data-offsetend="0 0"
                        data-bgparallax="4"
                        class="rev-slidebg"
                        data-no-retina
                      />

                      {/* <!-- LAYERS --> */}

                      {/* <!-- LAYER NR. 1 --> */}
                      <div
                        class="tp-caption tp-shape tp-shapewrapper ov-tp "
                        id="slide-101-layer-14"
                        data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['0','0','0','0']"
                        data-width="full"
                        data-height="full"
                        data-whitespace="nowrap"
                        data-type="shape"
                        data-basealign="slide"
                        data-responsive_offset="off"
                        data-responsive="off"
                        data-frames='[{"delay":10,"speed":1000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":1500,"frame":"999","to":"opacity:0;","ease":"Power4.easeIn"}]'
                        data-textAlign="['inherit','inherit','inherit','inherit']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{ zIndex: "5", fontFamily: "Open Sans" }}
                      >
                        {" "}
                      </div>

                      {/* <!-- LAYER NR. 2 --> */}
                      <div
                        class="tp-caption  "
                        id="slide-101-layer-1"
                        data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['-40','-80','-80','-70']"
                        data-fontsize="['70','70','50','30']"
                        data-lineheight="['90','80','70','60']"
                        data-letterspacing="['-5','-5','-2','-3']"
                        data-width="['800','none','768','260']"
                        data-height="none"
                        data-whitespace="['normal','nowrap','normal','normal']"
                        data-type="text"
                        data-responsive_offset="off"
                        data-responsive="off"
                        data-frames='[{"delay":900,"speed":2000,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:1.1;sY:1.1;skX:0;skY:0;opacity:0;","color":"#000000","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"frame":"999","color":"#000000","to":"opacity:0;","ease":"nothing"}]'
                        data-textAlign="['center','left','center','center']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[10,10,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: "6",
                          minWidth: "800px",
                          maxWidth: "800px",
                          whiteSpace: "normal",
                          fontSize: "90px",
                          lineHeight: "90px",
                          fontWeight: "600",
                          color: "#ffffff",
                          letterSpacing: "-5px",
                          fontFamily: "'Montserrat',sans-serif"
                        }}
                      >
                        MicroXen Techonology
                      </div>

                      {/* <!-- LAYER NR. 3 --> */}
                      <div
                        class="tp-caption  "
                        id="slide-101-layer-2"
                        data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['50','20','10','10']"
                        data-fontsize="['20','20','20','17']"
                        data-lineheight="['30','30','25','22']"
                        data-color="['rgba(255,255,255,0.75)','rgba(255,255,255,0.65)','rgba(255,255,255,0.65)','rgba(255,255,255,0.65)']"
                        data-width="['640','481','500','260']"
                        data-height="none"
                        data-whitespace="normal"
                        data-type="text"
                        data-responsive_offset="off"
                        data-responsive="off"
                        data-frames='[{"delay":900,"speed":2000,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:1.1;sY:1.1;skX:0;skY:0;opacity:0;","color":"#000000","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"frame":"999","color":"#000000","to":"opacity:0;","ease":"nothing"}]'
                        data-textAlign="['center','center','center','center']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: "7",
                          minWidth: "640px",
                          maxWidth: "640px",
                          whiteSpace: "normal",
                          fontSize: "20px",
                          lineHeight: "30px",
                          fontWeight: "400",
                          color: "rgba(255,255,255,0.75)",
                          fontFamily: "'Montserrat',sans-serif"
                        }}
                      >
                        MicroXen Technology is a full service of IT Solution
                        Provider that achieved through an compromised service
                        quality and customer satisfaction.
                      </div>

                      {/* <!-- LAYER NR. 4 --> */}
                      <Link
                        class="tp-caption rev-btn   tc-btnshadow tp-rs-menulink"
                        href="#"
                        target="_blank"
                        id="slide-101-layer-12"
                        data-x="['center','center','center','center']"
                        data-hoffset="['-150','-150','-110','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['150','140','100','100']"
                        data-lineheight="['60','60','50','50']"
                        data-width="['280','280','200','none']"
                        data-height="none"
                        data-whitespace="nowrap"
                        data-type="button"
                        data-actions=""
                        data-responsive_offset="off"
                        data-responsive="off"
                        data-frames='[{"delay":900,"speed":2000,"frame":"0","from":"x:-50px;z:0;rX:0;rY:0;rZ:0;sX:1.1;sY:1.1;skX:0;skY:0;opacity:0;fbr:100;","to":"o:1;fbr:100;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"frame":"999","to":"opacity:0;fbr:100;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"150","ease":"Power1.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;fbr:90%;","style":"c:rgba(255,255,255,1);"}]'
                        data-textAlign="['center','center','center','inherit']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[50,50,20,20]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[50,50,20,20]"
                        style={{
                          zIndex: "8",
                          minWidth: "280px",
                          maxWidth: "280px",
                          whiteSpace: "nowrap",
                          fontSize: "17px",
                          lineHeight: "60px",
                          fontWeight: "500",
                          color: "rgba(255,255,255,1)",
                          fontFamily: "'Montserrat',sans-serif",
                          borderRadius: "30px 30px 30px 30px",
                          outline: "none",
                          boxSizing: "border-box",
                          MozBoxSizing: "border-box",
                          WebkitBoxSizing: "border-box",
                          cursor: "pointer",
                          textDecoration: "none"
                        }}
                      >
                        <i
                          class="fa-icon-cube"
                          style={{ fontSize: "17px", marginRight: "5px" }}
                        ></i>{" "}
                        About Us{" "}
                      </Link>

                      {/* <!-- LAYER NR. 5 --> */}
                      <Link
                        class="tp-caption rev-btn   tc-btnshadow"
                        href="#"
                        target="_blank"
                        id="slide-101-layer-13"
                        data-x="['center','center','center','center']"
                        data-hoffset="['150','150','100','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['150','140','100','160']"
                        data-lineheight="['60','60','50','50']"
                        data-width="['280','280','200','none']"
                        data-height="none"
                        data-whitespace="nowrap"
                        data-type="button"
                        data-actions=""
                        data-responsive_offset="off"
                        data-responsive="off"
                        data-frames='[{"delay":900,"speed":2000,"frame":"0","from":"x:50px;z:0;rX:0;rY:0;rZ:0;sX:1.1;sY:1.1;skX:0;skY:0;opacity:0;fbr:100;","bgcolor":"#000000","to":"o:1;fbr:100;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"frame":"999","bgcolor":"#000000","to":"opacity:0;fbr:100;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"150","ease":"Power1.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;fbr:90%;","style":"c:rgba(0,0,0,1);"}]'
                        data-textAlign="['center','center','center','inherit']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[50,50,20,20]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[50,50,20,20]"
                        style={{
                          zIndex: "9",
                          minWidth: "280px",
                          maxWidth: "280px",
                          whiteSpace: "nowrap",
                          fontSize: "17px",
                          lineHeight: "60px",
                          fontWeight: "500",
                          color: "#000",
                          fontFamily: "'Montserrat',sans-serif",
                          backgroundColor: "#fff",
                          borderRadius: "30px 30px 30px 30px",
                          outline: "none",
                          boxSizing: "border-box",
                          MozBoxSizing: "border-box",
                          WebkitBoxSizing: "border-box",
                          cursor: "pointer",
                          textDecoration: "none"
                        }}
                      >
                        <i
                          class="fa-icon-cloud-download"
                          style={{ fontSize: "17px", marginRight: "5px" }}
                        ></i>{" "}
                        Read More{" "}
                      </Link>
                    </li>

                    {/* <!-- SLIDE  --> */}
                    <li
                      data-index="rs-102"
                      data-transition="fadethroughdark"
                      data-slotamount="default"
                      data-hideafterloop="0"
                      data-hideslideonmobile="off"
                      data-easein="default"
                      data-easeout="default"
                      data-masterspeed="default"
                      data-thumb=""
                      data-rotate="0"
                      data-saveperformance="off"
                      data-title="Slide"
                      data-param1=""
                      data-param2=""
                      data-param3=""
                      data-param4=""
                      data-param5=""
                      data-param6=""
                      data-param7=""
                      data-param8=""
                      data-param9=""
                      data-param10=""
                      data-description=""
                    >
                      {/* <!-- MAIN IMAGE --> */}
                      <img
                        src="images/main-slider/dummy.png"
                        alt=""
                        data-lazyload="images/main-slider/slide5.jpg"
                        data-bgposition="center center"
                        data-kenburns="on"
                        data-duration="4000"
                        data-ease="Power3.easeInOut"
                        data-scalestart="150"
                        data-scaleend="100"
                        data-rotatestart="0"
                        data-rotateend="0"
                        data-blurstart="0"
                        data-blurend="0"
                        data-offsetstart="0 0"
                        data-offsetend="0 0"
                        data-bgparallax="4"
                        class="rev-slidebg"
                        data-no-retina
                      />

                      {/* <!-- LAYERS --> */}

                      {/* <!-- LAYER NR. 1 --> */}
                      <div
                        class="tp-caption tp-shape tp-shapewrapper ov-tp "
                        id="slide-102-layer-14"
                        data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['0','0','0','0']"
                        data-width="full"
                        data-height="full"
                        data-whitespace="nowrap"
                        data-type="shape"
                        data-basealign="slide"
                        data-responsive_offset="off"
                        data-responsive="off"
                        data-frames='[{"delay":10,"speed":1000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":1500,"frame":"999","to":"opacity:0;","ease":"Power4.easeIn"}]'
                        data-textAlign="['inherit','inherit','inherit','inherit']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{ zIndex: "5", fontFamily: "Open Sans" }}
                      >
                        {" "}
                      </div>

                      {/* <!-- LAYER NR. 7 --> */}
                      <div
                        class="tp-caption  "
                        id="slide-102-layer-1"
                        data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['-40','-80','-80','-70']"
                        data-fontsize="['70','80','50','30']"
                        data-lineheight="['90','80','70','60']"
                        data-letterspacing="['-5','-5','-2','-3']"
                        data-width="['800','none','768','260']"
                        data-height="none"
                        data-whitespace="['normal','nowrap','normal','normal']"
                        data-type="text"
                        data-responsive_offset="off"
                        data-responsive="off"
                        data-frames='[{"delay":900,"speed":2000,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:1.1;sY:1.1;skX:0;skY:0;opacity:0;","color":"#000000","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"frame":"999","color":"#000000","to":"opacity:0;","ease":"nothing"}]'
                        data-textAlign="['center','left','center','center']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[10,10,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: "6",
                          minWidth: "800px",
                          maxWidth: "800px",
                          whiteSpace: "normal",
                          fontSize: "90px",
                          lineHeight: "90px",
                          fontWeight: "600",
                          color: "#ffffff",
                          letterSpacing: "-5px",
                          fontFamily: "'Montserrat',sans-serif"
                        }}
                      >
                        Creative Studio{" "}
                      </div>

                      {/* <!-- LAYER NR. 8 --> */}
                      <div
                        class="tp-caption  "
                        id="slide-102-layer-2"
                        data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['50','20','20','10']"
                        data-fontsize="['20','20','20','17']"
                        data-lineheight="['30','30','25','22']"
                        data-color="['rgba(255,255,255,0.75)','rgba(255,255,255,0.65)','rgba(255,255,255,0.65)','rgba(255,255,255,0.65)']"
                        data-width="['640','481','500','260']"
                        data-height="none"
                        data-whitespace="normal"
                        data-type="text"
                        data-responsive_offset="off"
                        data-responsive="off"
                        data-frames='[{"delay":900,"speed":2000,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:1.1;sY:1.1;skX:0;skY:0;opacity:0;","color":"#000000","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"frame":"999","color":"#000000","to":"opacity:0;","ease":"nothing"}]'
                        data-textAlign="['center','center','center','center']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: "7",
                          minWidth: "640px",
                          maxWidth: "640px",
                          whiteSpace: "normal",
                          fontSize: "20px",
                          lineHeight: "30px",
                          fontWeight: "400",
                          color: "rgba(255,255,255,0.75)",
                          fontFamily: "'Montserrat',sans-serif"
                        }}
                      >
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </div>

                      {/* <!-- LAYER NR. 4 --> */}
                      <Link
                        class="tp-caption rev-btn   tc-btnshadow tp-rs-menulink"
                        href="#"
                        target="_blank"
                        id="slide-102-layer-12"
                        data-x="['center','center','center','center']"
                        data-hoffset="['-150','-150','-110','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['150','140','100','100']"
                        data-lineheight="['60','60','50','50']"
                        data-width="['280','280','200','none']"
                        data-height="none"
                        data-whitespace="nowrap"
                        data-type="button"
                        data-actions=""
                        data-responsive_offset="off"
                        data-responsive="off"
                        data-frames='[{"delay":900,"speed":2000,"frame":"0","from":"x:-50px;z:0;rX:0;rY:0;rZ:0;sX:1.1;sY:1.1;skX:0;skY:0;opacity:0;fbr:100;","to":"o:1;fbr:100;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"frame":"999","to":"opacity:0;fbr:100;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"150","ease":"Power1.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;fbr:90%;","style":"c:rgba(255,255,255,1);"}]'
                        data-textAlign="['center','center','center','inherit']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[50,50,20,20]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[50,50,20,20]"
                        style={{
                          zIndex: "8",
                          minWidth: "280px",
                          maxWidth: "280px",
                          whiteSpace: "nowrap",
                          fontSize: "17px",
                          lineHeight: "60px",
                          fontWeight: "500",
                          color: "rgba(255,255,255,1)",
                          fontFamily: "'Montserrat',sans-serif",
                          borderRadius: "30px 30px 30px 30px",
                          outline: "none",
                          boxSizing: "border-box",
                          MozBoxSizing: "border-box",
                          WebkitBoxSizing: "border-box",
                          cursor: "pointer",
                          textDecoration: "none"
                        }}
                      >
                        <i
                          class="fa-icon-cube"
                          style={{ fontSize: "17px", marginRight: "5px" }}
                        ></i>{" "}
                        About Us{" "}
                      </Link>

                      {/* <!-- LAYER NR. 10 --> */}
                      <Link
                        class="tp-caption rev-btn   tc-btnshadow"
                        href=""
                        target="_blank"
                        id="slide-102-layer-13"
                        data-x="['center','center','center','center']"
                        data-hoffset="['150','150','100','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['150','140','100','160']"
                        data-lineheight="['60','60','50','50']"
                        data-width="['280','280','200','none']"
                        data-height="none"
                        data-whitespace="nowrap"
                        data-type="button"
                        data-actions=""
                        data-responsive_offset="off"
                        data-responsive="off"
                        data-frames='[{"delay":900,"speed":2000,"frame":"0","from":"x:50px;z:0;rX:0;rY:0;rZ:0;sX:1.1;sY:1.1;skX:0;skY:0;opacity:0;fbr:100;","bgcolor":"#000000","to":"o:1;fbr:100;","ease":"Power3.easeInOut"},{"delay":"wait","speed":500,"frame":"999","bgcolor":"#000000","to":"opacity:0;fbr:100;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"150","ease":"Power1.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;fbr:90%;","style":"c:rgba(0,0,0,1);"}]'
                        data-textAlign="['center','center','center','inherit']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[50,50,20,20]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[50,50,20,20]"
                        style={{
                          zIndex: "9",
                          minWidth: "280px",
                          maxWidth: "280px",
                          whiteSpace: "nowrap",
                          fontSize: "17px",
                          lineHeight: "60px",
                          fontWeight: "500",
                          color: "#000",
                          fontFamily: "'Montserrat',sans-serif",
                          backgroundColor: "#fff",
                          borderRadius: "30px 30px 30px 30px",
                          outline: "none",
                          boxSizing: "border-box",
                          MozBoxSizing: "border-box",
                          WebkitBoxSizing: "border-box",
                          cursor: "pointer",
                          textDecoration: "none"
                        }}
                      >
                        <i
                          class="fa-icon-cloud-download"
                          style={{ fontSize: "17px", marginRight: "5px" }}
                        ></i>{" "}
                        Read More{" "}
                      </Link>
                    </li>
                  </ul>
                  <div
                    class="tp-bannertimer tp-bottom"
                    style={{ visibility: "hidden !important" }}
                  ></div>{" "}
                </div>
              </div>
              {/* <!-- END REVOLUTION SLIDER -->      */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ReactRevSlider;
