import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
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

  const Places = ({ image, country, tours, column }) => {
    return (
        <div className={`relative overflow-hidden h-[270px] lg:col-span-${column}`}>
            <img src={image} alt="" className="h-full w-full rounded-lg object-cover hoverImg"/>
            <p className="text-3xl text-white font-semibold absolute left-6 bottom-6">{country}</p>
            <button className="bg-orange text-white rounded-lg px-4 py-2 text-xs font-semibold absolute top-4 right-4">{tours} TOURS</button>
        </div>
    )
  }

  const Tours = ({ image, name }) => {
    return (
      <div className="mx-4">
        <div className="relative overflow-hidden rounded-t-lg">
          <img src={image} alt="tours" className="rounded-t-lg hoverImg" />
          <div className="absolute flex justify-between top-4 left-4 right-4">
            <p className="bg-[#14B0C3] rounded-md px-4 py-1 text-white text-sm">FEATURED</p>
            <button className="bg-[#00000066] p-1 rounded-md">
              <CiHeart className="text-white text-xl"/>
            </button>
          </div>
        </div>

        <div className="border border-[#ebe6de] rounded-b-lg relative h-[230px]">
          <div className="absolute w-full h-5 -top-5 bg-white rounded-t-[20px]">
            <div className="p-6 pt-0 mt-4">
              <div className="flex items-center gap-4 justify-between">
                <span className="flex justify-center">
                  {[...Array(5)].map((_, index) => (
                    <MdStar key={index} className="text-[#ffa801] text-xl"/>
                  ))}
                  <p className="text-[#757783] pl-2">4.6</p>
                </span>
                <span className="flex gap-2">
                  <div className="relative">
                    <CiCamera />
                    <button className="bg-orange text-xs rounded-full text-white w-4 h-4 flex items-center justify-center absolute top-0 right-0">5</button>
                  </div>
                  <IoVideocamOutline size={30} />
                </span>
              </div>
              <h4 className="text-xl font-semibold py-2 hover:text-orange">{name}</h4>
              <span className="flex items-center gap-2">
                  <MdLocationPin className="text-orange text-xl"/>
                  <p className="text-[#757783] text-sm">Central Park West NY, USA</p>
              </span>
              <span className="text-[#757783] flex py-4"> 
                  From <p className="text-orange">$109.00</p>
              </span>
              
              <div className="bg-[#faf8f4] flex justify-between py-4 px-4">
                <span className="flex items-center gap-2">
                  <WiTime3 className="text-orange" /> 10 days
                </span>
                <span className="flex items-center gap-2">
                  <MdPeopleOutline className="text-orange"/> 50
                </span>
                <a href="#" className="flex items-center gap-2 text-orange text-sm font-bold mt-2">
                  explore <MdArrowRightAlt />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="lg:mt-60 mt-10" data-aos="fade-down">
      <div className="max-w-[1200px] px-6 mx-auto text-center">
        <p className="text-orange text-xl">Destination Lists</p>
        <h4 className="font-bold lg:text-[50px] text-[30px] py-4">Go exotic places</h4>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-2">
          <Places country='Thailand' image="src/assets/thailand.jpg" tours='4' column='1' />
          <Places country='Singapore' image="src/assets/singapore.jpg" tours='6' column='2' />
          <Places country='Canada' image="src/assets/canada.jpg" tours='3' column='1' />
          <Places country='France' image="src/assets/france.jpg" tours='2' column='2' />
          <Places country='Denmark' image="src/assets/denmark.jpg" tours='5' column='2' />
          <Places country='New Zealand' image="src/assets/newzealand.jpg" tours='9' column='2' />
          <Places country='Australia' image="src/assets/australia.jpg" tours='7' column='1' />
          <Places country='Italy' image="src/assets/italy.jpg" tours='4' column='2' />

        </div>
      </div>

      <div className="bg-[url(/bg-line-bird.png)] bg-no-repeat py-16">
        <div className="lg:flex max-w-[1200px] px-6 mx-auto gap-8">
          <div className="relative lg:w-1/2" data-aos="fade-down">
            <img src="src/assets/discount.jpg" alt="" className="opacity-70 rounded-3xl" />
            <div className="absolute top-4 right-4">
              <p className="text-orange font-semibold text-[80px]">30%</p>
              <p className="text-[50px] font-semibold -mt-8">Discount</p>
            </div>
            <button className="bg-white shadow-md px-12 py-4 absolute left-4 top-1/2 rounded-xl">
              <p className="text-gray text-xs font-medium">Book Tour Now</p>
              <p className="font-semibold text-lg">888-8888888</p>
            </button>
          </div>
          <div className="lg:w-1/2" data-aos="fade-up">
            <p className="text-orange text-xl">Get to know us</p>
            <h4 className="font-bold lg:text-[50px] text-[30px] py-4">Plan Your Trip with Globe Trekker</h4>
            <p className="text-[#757783] leading-8 mb-8">
              There are many variations of passages of available but the majority have sufferd alteration is some form,
              by injected hum randomised words which don&apos;t lool even slightly.
            </p>
          
            <span className="flex items-center gap-4 py-2 font-medium">
              <MdCheck className="bg-orange text-white rounded-xl"/> Invest in your simply neighborhood
            </span>
            <span className="flex items-center gap-4 py-2 font-medium">
              <MdCheck className="bg-orange text-white rounded-xl"/> Invest in your simply neighborhood
            </span>
            <span className="flex items-center gap-4 py-2 font-medium">
              <MdCheck className="bg-orange text-white rounded-xl"/> Invest in your simply neighborhood
            </span>
            <div className="mt-8">
              <button className="bg-orange text-white text-xs font-bold rounded-md px-8 h-12 items-center hoverBtn">BOOK WITH US NOW</button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center my-10 px-6" data-aos="fade-down">
        <p className="text-orange text-xl pb-2">Featured tours</p>
        <h4 className="lg:text-[50px] text-[30px] font-bold mb-6">Most popular tours</h4>
        <div>
          <Carousel
              partialVisbile={false}
              swipeable={true}
              draggable={false}
              responsive={responsive}
              ssr={true}
              infinite
              autoPlay={true}
              arrows={true}
              keyBoardControl={true}
              itemClass="carouselItem"
            >
              <Tours image="src/assets/beach.jpg" name="Party Beach in Australia"/>
              <Tours image="src/assets/hiking_iceland.jpg" name="Hiking in Iceland"/>
              <Tours image="src/assets/market.jpg" name="Shopping market"/>
              <Tours image="src/assets/sailing_dam.jpg" name="Sailing boat in Surathani"/>
              <Tours image="src/assets/japan.jpg" name="Ancient Temple in Japan"/>

            </Carousel> 
        </div>
      </div>
    </div>
    
  );
};

export default Destination;
