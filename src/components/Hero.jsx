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
    <div className=''>
        <video>
            <source src="/video.mp4" type="video/mp4" />
        </video>
    </div>
  )
}

export default Hero