import React from "react";
import { RiStarFill } from "@remixicon/react";

const OurVisionSlider = ({
  img,
  Comma,
  description,
  name,
  title,
  stars,
  currentslide,
}) => {
  return (
    <div className="TestimonialSlider position-relative" data-aos="flip-left">
      {/* <figure>
        <img className="rounded-circle" src={img} alt="SliderImg1" />
      </figure> */}
      <div className="d-flex justify-content-center align-items-center flex-column text-center">
        <h3 style={{marginBottom:'1rem'}}>{name}</h3>
        <p>{description}</p>
      </div>
      <div>
        <img className="position-absolute" src={Comma} alt="" />
      </div>
    </div>
  );
};

export default OurVisionSlider;