import { FaPlay } from "react-icons/fa"
import { GiDeer, GiHangGlider } from "react-icons/gi"
import { CiFlag1 } from "react-icons/ci"
import { MdOutlineParagliding } from "react-icons/md"

const About = () => {
  return (
    <div >
        <div className="bg-[url(/bg-1.webp)] bg-cover bg-center bg-no-repeat py-24">
            <div className="lg:flex gap-12 max-w-[1200px] px-6 mx-auto">
                <div className="lg:w-1/2">
                    <span data-aos="fade-up-right">
                        <button className="animate-pulse rounded-lg bg-orange w-20 h-20 flex justify-center items-center mb-8">
                            <FaPlay className="text-white"/>
                        </button>
                        <p className="text-orange text-xl pb-2">Are you ready to travel?</p>
                    </span>
                    <p className="text-[40px] text-white font-bold">Globe Trekker is a World Leading Online Tour Booking Platform</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="border border-gray rounded-lg p-8 flex flex-col items-center gap-4 text-orange hover:bg-orange hover:text-white transition-none" data-aos="fade-down-right">
                        <GiDeer className="text-2xl w-20 h-20"/>
                        <p className="text-white text-xl font-semibold">Wildlife Tours</p>
                    </div>
                    <div className="border border-gray rounded-lg p-8 flex flex-col items-center gap-4 text-orange hover:bg-orange hover:text-white transition-none" data-aos="fade-down-right">
                        <MdOutlineParagliding className="text-2xl w-20 h-20"/>
                        <p className="text-white text-xl font-semibold">Paragliding Tours</p>
                    </div>
                    <div className="border border-gray rounded-lg p-8 flex flex-col items-center gap-4 text-orange hover:bg-orange hover:text-white transition-none" data-aos="fade-down-right">
                        <CiFlag1 className="text-2xl w-20 h-20"/>
                        <p className="text-white text-xl font-semibold">Adventure Tours</p>
                    </div>
                    <div className="border border-gray rounded-lg p-8 flex flex-col items-center gap-4 text-orange hover:bg-orange hover:text-white transition-none" data-aos="fade-down-right">
                        <GiHangGlider  className="text-2xl w-20 h-20"/>
                        <p className="text-white text-xl font-semibold text-center">Hand Gliding Tours</p>
                    </div>
                </div>            
            </div>
        </div>

        <div className="bg-[url(/bg-line.png) bg-contain bg-bottom bg-orange py-[100px]" data-aos="fade-down">
            <div className="flex lg:flex-nowrap flex-wrap justify-between gap-16 max-w-[1200px] xl:px-0 px-6 mx-auto">
                <p className="text-[40px] font-bold text-white whitespace-pre">Our partners</p>
                <div className="flex flex-wrap gap-8 justify-between w-full">
                    <img src="/logo.png" alt="" width={30} />
                    <img src="/logo.png" alt="" width={30} />
                    <img src="/logo.png" alt="" width={30} />
                    <img src="/logo.png" alt="" width={30} />
                    <img src="/logo.png" alt="" width={30} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About