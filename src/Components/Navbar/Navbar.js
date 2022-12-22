import "./styles.css";
import React,{ useState, useEffect } from "react";
import HamburgerMenu from "react-hamburger-menu";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {}, []);
  return (
    <div>
      <div className="navbar fnt-fam">
        <div className="navbar-cont">
          <div
            className={`disp-flx-rw navbar-upp-cont ${
              !showMenu ? "slide-down" : "slide-up"
            }`}
          >
            {/* ABOUT */}
            <div className={`nav-upp-sec flx-1 ${!showMenu && "disp-none"}`}>
              <div className="nav-upp-sec-cont">
                <p className="nav-upp-sec-head fnt-nrm clr-white txt-bld">
                  ABOUT
                </p>
                <p className="nav-upp-sec-list fnt-sm clr-white" onClick={() => document.getElementById('about').scrollIntoView()}>About Me</p>
                <p className="nav-upp-sec-list fnt-sm clr-white" onClick={() => document.getElementById('certification').scrollIntoView()}>
                  Certificate
                </p>
              </div>
            </div>
            {/* SERVICES */}
            <div className={`nav-upp-sec flx-1 ${!showMenu && "disp-none"}`}>
              <div className="nav-upp-sec-cont">
                <p className="nav-upp-sec-head fnt-nrm clr-white txt-bld">
                  SERVICES
                </p>
                <p className="nav-upp-sec-list fnt-sm clr-white" onClick={() => document.getElementById('services').scrollIntoView()}>Services</p>
                <p className="nav-upp-sec-list fnt-sm clr-white" onClick={() => document.getElementById('projects').scrollIntoView()}>Project</p>
              </div>
            </div>
            {/* CONTACT */}
            <div className={`nav-upp-sec flx-1 ${!showMenu && "disp-none"}`}>
              <div className="nav-upp-sec-cont">
                <p className="nav-upp-sec-head fnt-nrm clr-white txt-bld">
                  CONTACT
                </p>
                <p className="nav-upp-sec-list fnt-sm clr-white" onClick={() => document.getElementById('connect').scrollIntoView()}>Connect</p>
                <p className="nav-upp-sec-list fnt-sm clr-white" onClick={() => window.open("https://docs.google.com/document/d/1imqHc_Y7bs4AyLJPcGJ_2ILD9chiiYA-/edit?usp=sharing&ouid=111943270678545187797&rtpof=true&sd=true")}>Resume</p>
              </div>
            </div>
          </div>
          <div className="disp-flx-rw navbar-low-cont">
            <div className={`navbar-main ${showMenu && "pink-fade"}`}>
              <p
                className={` marg-0 clr-white txt-bld fnt-nrm fnt-fam-pac ${
                  showMenu === true ? "slide-out" : "slide-in"
                }`}
              >
                CV
              </p>
              <div>
                <p
                  className=" marg-0 marg-txt clr-white txt-bld fnt-nrm curs-pointer"
                  onClick={() => {
                    console.log("......");
                    setShowMenu(!showMenu);
                  }}
                >
                  <HamburgerMenu
                    isOpen={showMenu}
                    width={15}
                    height={10}
                    strokeWidth={2}
                    rotate={0}
                    color='rgb(255, 255, 255)'
                    borderRadius={5}
                    animationDuration={0.5}
                  />
                </p>
              </div>
            </div>
            <div
              className={`navbar-links-cont disp-flx-rw ${
                showMenu && "disp-none"
              }`}
            >
              <div className="navbar-indi-links curs-pointer" onClick={() => document.getElementById('about').scrollIntoView()}>
                <p className=" marg-0 marg-txt clr-white txt-bld-600 fnt-sm">
                  About
                </p>
              </div>
              <div className="navbar-indi-links curs-pointer" onClick={() => document.getElementById('services').scrollIntoView()}>
                <p className=" marg-0 marg-txt clr-white txt-bld-600 fnt-sm">
                  Services
                </p>
              </div>
              <div className="navbar-indi-links curs-pointer" onClick={() => document.getElementById('connect').scrollIntoView()}>
                <p className=" marg-0 marg-txt clr-white txt-bld-600 fnt-sm">
                  Contact
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
