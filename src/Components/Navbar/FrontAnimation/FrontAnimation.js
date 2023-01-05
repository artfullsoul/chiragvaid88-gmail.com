import React,{ useEffect, useState } from "react";
import "./FrontAnimation.css";

export default function FrontAnimation() {
  useEffect(() => {}, []);
  return (
    <div className="front-animation">
      <div className="left-sec"></div>
      <div className="right-sec"></div>
      <p className="brand-name">CV</p>
      {/* <div className="main-page-loader">
        <Lottie animationData={Loader} loop={true} />
      </div> */}
    </div>
  );
}
