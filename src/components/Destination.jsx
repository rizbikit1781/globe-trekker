import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/style.css"
import { CiHeart, CiCamera } from "react-icons/ci";
import { MdStar, MdCheck, MdPeopleOutline, MdLocationPin, MdArrowRightAlt } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { WiTime3 } from "react-icons/wi";

const Destination = () => {
  
    const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    module: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const Places = ({ image, country, tours }) => {
    return (
        <div>
            <img src={image} alt="" />
            <p>{country}</p>
        </div>
    )
  }


  return (
    <div>
      <div>
        <p>Destination Lists</p>
        <h4>Go exotic places</h4>
      </div>
    </div>
  );
};

export default Destination;
