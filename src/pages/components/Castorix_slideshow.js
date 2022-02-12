import React from "react";
import { Fade } from "react-slideshow-image";
import "./slideshow.css";

const fadeImages = [
  "./comp_img/castorix_temp.jpg",   
  "./comp_img/castorix_temp2.jpg",
  "./comp_img/castorix_temp3.jpg",
  "./comp_img/castorix_temp4.jpg"
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} alt="img" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} alt="img" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} alt="img" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[3]} alt="img" />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Slideshow;