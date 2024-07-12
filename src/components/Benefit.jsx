import React from 'react'
import { GiRuleBook } from 'react-icons/gi'
import { MdArrowCircleRight, MdArrowRight, MdComment, MdPerson } from 'react-icons/md'
import { RiFlightTakeoffFill } from 'react-icons/ri'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css"

const Benefit = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000},
            items: 3,
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3,
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2,
        },
        module: {
            breakpoint: {max: 464, min: 0},
            items: 1,
        }
    }

    const Card = ({ image, text }) => {
        return (
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="relative">
                    <img src={image} alt={text} className="w-full h-48 object-cover" />
                    <p className="absolute bottom-0 left-0 bg-orange-500 text-white px-3 py-1 rounded-tr-lg">
                        <span className="text-lg font-bold">10</span>{" "}
                        <span className="text-xs font-normal">JULY</span>
                    </p>
                </div>
                <div className="border border-gray-200 rounded-b-lg relative">
                    <div className="absolute w-full h-5 -top-5 bg-white rounded-t-[20px]"></div>
                    <div className="p-6">
                        <div className="flex items-center gap-4 text-gray-500 mb-3">
                            <span className="flex items-center gap-1 text-xs">
                                <MdPerson className="text-orange-500" /> ADMIN
                            </span>
                            <span className="flex items-center gap-1 text-xs">
                                <MdComment className="text-orange-500" /> 0 COMMENTS
                            </span>
                        </div>
                        <h4 className="text-xl font-semibold py-2 text-gray-800 hover:text-orange-500 transition-colors duration-300">
                            {text}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            There are many variations of but the majority have simply free text available not suffered
                        </p>
                        <a href="#" className="inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors duration-300">
                            Read More <MdArrowRight className="ml-1" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }

  return (
        <div className="bg-white">
            <div className="container mx-auto px-4 py-16 lg:py-16 bg-[url(/bg-1.webp)] bg-cover bg-center bg-no-repeat bg-opacity-80">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <img src="src/assets/hiking_iceland.jpg" alt="Benefit" className="rounded-lg shadow-xl w-full h-auto" />
                    </div>
                    <div className="lg:w-1/2">
                        <p className="text-orange font-semibold mb-2">Our benefit lists</p>
                        <h4 className="text-3xl lg:text-4xl font-bold text-white mb-6">Why Choose Globe Trekker</h4>
                        <p className="text-gray mb-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo doloribus minus ipsam dolorum eos cupiditate dolores, temporibus, maxime nisi esse dicta ad quos deserunt, suscipit accusamus reiciendis autem perferendis optio!
                        </p>
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <span className="text-orange text-3xl">
                                    <RiFlightTakeoffFill />
                                </span>
                                <div>
                                    <h6 className="text-xl font-semibold text-gray-800 mb-2">Professional and Certificated</h6>
                                    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iste quidem nesciunt vel excepturi qui illum fugiat unde debitis enim. Doloribus, numquam. Maiores iure temporibus, necessitatibus voluptates inventore sed optio!</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-orange-500 text-3xl">
                                    <GiRuleBook />
                                </span>
                                <div>
                                    <h6 className="text-xl font-semibold text-gray-800 mb-2">Get Instant Tour Bookings</h6>
                                    <p className="text-g">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo voluptatem laborum voluptatum tempora placeat. Accusantium est in dolor maiores. Cumque voluptatem aspernatur voluptates amet porro praesentium quidem ducimus asperiores aperiam?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 py-16 lg:py-24">
                <div className="container mx-auto px-4">
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
                        itemClass="carouselItem px-4"
                    >  
                        <Card image="/ape.png" text="Things to See and Do When Visiting Japan" />
                        <Card image="/ape2.png" text="A Place where Start New Life with Peace" />
                        <Card image="/ape3.png" text="Journeys are Best Measured with Friends" />
                        <Card image="/ape4.png" text="Travel the Most Beautiful Places in the World" />
                    </Carousel>
                </div>
            </div>
            
            <div className="bg-[#faf5ee] py-16 lg:py-12" data-aos="fade-down">
                <div className="container">
                    <div className="flex flex-wrap max-w-[1200px] xl:px-0 px-6 mx-auto lg:pt-20 pt-14">
                        <div className="lg:w-1/2 mb-8 lg:mb-0">
                            <p className="text-xl text-orange font-semibold mb-4">Join us</p>
                            <h4 className="text-3xl lg:text-5xl text-gray-800 font-bold mb-4">Not a Member Yet?</h4>
                            <p className="text-gray-600 mb-8">Join us! Our members can access savings of up to 50% and earn Trip Coins while booking.</p>
                            <div className="flex gap-4">
                                <button className="bg-orange text-white text-sm font-bold rounded-full flex items-center px-6 py-3 transition duration-300 ease-in-out hover:bg-orange-600">
                                    <MdArrowCircleRight className="mr-2" size={20} /> SIGN IN
                                </button>
                                <button className="bg-white text-gray-800 text-sm font-bold rounded-full flex items-center px-6 py-3 transition duration-300 ease-in-out hover:bg-gray-100">
                                    <MdPerson className="mr-2" size={20} /> REGISTER
                                </button>
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex justify-center">
                            <img src="/logo.png" alt="Logo" className="w-64 h-64 object-contain" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefit