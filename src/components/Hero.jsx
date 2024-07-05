import { MdSearch, MdOutlineParagliding } from "react-icons/md"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { GiDeer, GiHangGlider, GiFishingBoat } from "react-icons/gi"
import { CiFlag1 } from "react-icons/ci"
import { WiTime3 } from "react-icons/wi"
import { FaPeopleCarry } from "react-icons/fa"
import { FaPeopleGroup } from "react-icons/fa6"

const Hero = () => {

  const responsive = {
    superLargeDesktop: {
        breakpoint: {max: 4000, min: 3000},
        items: 5,
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 5,
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 3,
    },
    module: {
        breakpoint: {max: 464, min: 0},
        items: 1,
    }
  }

  return (
    <div className='relative bg-black lg:h-[80vh]' data-aos="fade-down" data-aos-delay="300" data-aos-duration="3000">
        <video autoPlay muted loop className="absolute z-10 w-full h-full lg:top-0 -top-[12vh] object-cover opacity-55" >
            <source src="/video.webm" type="video/webm" />
        </video>
        <div className="flex flex-col items-center justify-center relative z-10 lg:h-full h-screen max-w-[1200px] px-6 lg:pt-0 pt-16 mx-auto"> 
          <p className="text-3xl text-orange">Let's explore</p>
          <h4 className="lg:text-[52px] text-3xl text-white">Where Would You Like To Go?</h4>
          <p className="text-gray text-2xl my-8">Checkout Beautiful Places Around the world.</p>
          <div className="bg-white grid lg:grid-cols-5 grid-cols-1 rounded-lg w-full">
            <span className="flex items-center py-7 border-r border-gray relative pl-4">
              <MdOutlineParagliding className="text-4xl text-orange"/>
              <span className="flex flex-col justify-center absolute h-full left-16 right-2">
                <p>Location</p>
                <select>
                  <option>Destinations</option>
                  <option>Canada</option>
                  <option>Australia</option>
                  <option>Thailand</option>
                  <option>France</option>
                  <option>Switzerland</option>
                </select>
              </span>
            </span>
            <span className="flex items-center py-7 border-r border-gray relative pl-4">
                <FaPeopleCarry className="text-4xl text-orange"/>
                <span>
                  <p>Type</p>
                  <select>
                    <option>Activity</option>
                    <option>Adventure</option>
                    <option>Island</option>
                    <option>City Tours</option>
                    <option>Cruise</option>
                    <option>Hiking</option>
                    <option>Discovery</option>
                    <option>Historicial</option>
                  </select>
                </span>
              </span>

              <span className="flex items-center py-7 border-r border-gray relative pl-4">
                <WiTime3 className="text-4xl text-orange"/>
                <span>
                  <p>Date From</p>
                  <input type="date" />
                </span>
              </span>
              <span>
                <FaPeopleGroup className="text-4xl text-orange"/>
                <span>
                  <p>Guests</p>
                  <input type="text" placeholder="0" />
                </span>
              </span>
              <button>
                <MdSearch size={20} className="text-4xl text-orange"/>
                SEARCH
              </button>
          </div>
          <img src="/logo.png" alt="" width={30} height={30}/>
          <p>or browse the selected type</p>
        </div>
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
            <div>
              <GiDeer />
              <p>Wildlife</p>
            </div>
            <div>
              <MdOutlineParagliding />
              <p>Paragliding</p>
            </div>
            <div>
              <CiFlag1 />
              <p>Adventure</p>
            </div>
            <div>
              <GiHangGlider />
              <p>Hang Gliding</p>
            </div>
            <div>
              <GiFishingBoat />
              <p>Sightseeing</p>
            </div>
          </Carousel>
        </div>
    </div>
  )
}

export default Hero