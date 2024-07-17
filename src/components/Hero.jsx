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
    <div className='relative bg-black lg:h-[80vh]' data-aos="fade-down" data-aos-delay="300" data-aos-duration="3000" id="home">
        <video autoPlay muted loop className="absolute z-10 w-full h-full lg:top-0 -top-[12vh] object-cover opacity-55" >
            <source src="/video.webm" type="video/webm" />
        </video>
        <div className="flex flex-col items-center justify-center relative z-10 lg:h-full h-screen max-w-[1200px] px-6 lg:pt-0 pt-16 mx-auto"> 
          <p className="text-3xl text-orange mb-6">Let's explore</p>
          <h4 className="lg:text-[52px] text-3xl text-white">Where Would You Like To Go?</h4>
          <p className="text-gray text-2xl my-8">Checkout Beautiful Places Around the world.</p>
          <div className="bg-white grid lg:grid-cols-5 grid-cols-1 rounded-lg w-full">
            <span className="flex items-center py-7 border-r border-gray relative pl-4">
              <MdOutlineParagliding className="text-4xl text-orange"/>
              <span className="flex flex-col justify-center absolute h-full left-16 right-2">
                <p className="text-gray text-sm">Location</p>
                <select className="text-sm font-bold w-full">
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
                <span className="flex flex-col justify-center absolute h-full left-16 right-2">
                  <p className="text-gray text-sm">Type</p>
                  <select className="text-sm font-bold w-full">
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
                <span className="flex flex-col justify-center absolute h-full left-16 right-2">
                  <p className="text-gray text-sm">Date From</p>
                  <input type="date" className="text-sm font-bold w-full"/>
                </span>
              </span>
              <span className="flex items-center py-7 border-r border-gray relative pl-4">
                <FaPeopleGroup className="text-4xl text-orange"/>
                <span className="flex flex-col justify-center absolute h-full left-16 right-2">
                  <p className="text-gray text-sm">Guests</p>
                  <input type="text" placeholder="0" className="font-semibold placeholder:text-black outline-none"/>
                </span>
              </span>
              <button className="bg-orange text-white flex items-center justify-center gap-4 py-6 outline-none border-none rounded-r-lg font-semibold">
                <MdSearch size={20}/>
                SEARCH
              </button>
          </div>
          <img src="/logo.png" alt="" width={30} height={30} className="my-4"/>
          <p className="text-white font-semibold text-[28px]">or browse the selected type</p>
        </div>
        <div className="py-16 lg:-mt-24 relative z-10 max-w-[1200px] px-6 mx-auto">
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
            <div  className="shadow-xl bg-white p-8 rounded-lg flex flex-col justify-center items-center gap-4 mx-4">
              <GiDeer className="rounded-full w-20 h-20 p-4 bg-[#e5faf5] text-[#3fd2a8] hover:bg-orange hover:text-white" />
              <p className="font-bold">Wildlife</p>
            </div>
            <div className="shadow-xl bg-white p-8 rounded-lg flex flex-col justify-center items-center gap-4 mx-4">
              <MdOutlineParagliding className="rounded-full w-20 h-20 p-4 bg-[#26b2ec24] text-[#06aff6] hover:bg-orange hover:text-white"/>
              <p className="font-bold">Paragliding</p>
            </div>
            <div className="shadow-xl bg-white p-8 rounded-lg flex flex-col justify-center items-center gap-4 mx-4">
              <CiFlag1 className="rounded-full w-20 h-20 p-4 bg-[#f5ecfd] text-[#9e60e5] hover:bg-orange hover:text-white"/>
              <p className="font-bold">Adventure</p>
            </div>
            <div className="shadow-xl bg-white p-8 rounded-lg flex flex-col justify-center items-center gap-4 mx-4">
              <GiHangGlider className="rounded-full w-20 h-20 p-4 bg-[#fff4de] text-[#f6b23b] hover:bg-orange hover:text-white"/>
              <p className="font-bold">Hang Gliding</p>
            </div>
            <div className="shadow-xl bg-white p-8 rounded-lg flex flex-col justify-center items-center gap-4 mx-4">
              <GiFishingBoat className="rounded-full w-20 h-20 p-4 bg-[#d036321c] text-[#d03632] hover:bg-orange hover:text-white"/>
              <p className="font-bold">Sightseeing</p>
            </div>
          </Carousel>
        </div>
    </div>
  )
}

export default Hero