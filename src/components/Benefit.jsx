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
            <div className="m-4 border border-[#ebe6de] rounded-lg overflow-hidden">
                <div className="relative">
                    <img src={image} alt={text} className="w-full" />
                    <p className="absolute bottom-2 right-2 bg-orange px-2 py-2 rounded-md text-white">
                        10 <span className='font-normal text-xs'>JULY</span>
                    </p>
                </div>
                <div className='p-4'>
                    <div className='flex items-center gap-4'>
                        <span className='flex items-center gap-1 text-xs'>
                            <MdPerson /> ADMIN
                        </span>
                        <span className='flex items-center gap-1 text-xs'>
                            <MdComment /> 0 COMMENTS
                        </span>
                    </div>
                    <h4 className='text-2xl font-semibold py-2 hover:text-orange-500'>{text}</h4>
                    <p className='pt-2 leading-8'>There are many variations of but the majority have simply free text available not suffered</p>
                    <a href='#' className="flex items-center text-orange-500 hover:underline">Read More <MdArrowRight /></a>
                </div>
            </div>
        )
    }

  return (
        <div className="bg-white">
            <div className="mx-auto bg-[url(/bg-1.webp)] bg-cover bg-center bg-no-repeat">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <img src="src/assets/italy.jpg" alt="Benefit" className="shadow-xl w-full h-auto" />
                    </div>
                    <div className="lg:w-1/2 lg:p-0 p-10">
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
                                    <h6 className="text-xl font-semibold text-orange mb-2">Professional and Certificated</h6>
                                    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iste quidem nesciunt vel excepturi qui illum fugiat unde debitis enim. Doloribus, numquam. Maiores iure temporibus, necessitatibus voluptates inventore sed optio!</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-orange text-3xl">
                                    <GiRuleBook />
                                </span>
                                <div>
                                    <h6 className="text-xl font-semibold text-orange mb-2">Get Instant Tour Bookings</h6>
                                    <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo voluptatem laborum voluptatum tempora placeat. Accusantium est in dolor maiores. Cumque voluptatem aspernatur voluptates amet porro praesentium quidem ducimus asperiores aperiam?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-16 lg:py-24 flex justify-center flex-col items-center" id="news">
                <p className="text-orange text-xl pb-2">From the block post</p>
                <h4 className="text-[40px] font-bold mb-8">News & Articles</h4>
                <div className="max-w-[1200px] w-full">
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
                        <Card image="src/assets/tourist-1.jpg" text="Things to See and Do When Visiting Japan" />
                        <Card image="src/assets/tourist-2.jpg" text="A Place where Start New Life with Peace" />
                        <Card image="src/assets/tourist-3.jpg" text="Journeys are Best Measured with Friends" />
                        <Card image="src/assets/tourist-4.jpg" text="Travel the Most Beautiful Places in the World" />
                    </Carousel>
                </div>
            </div>
            
            <div className="bg-[#faf5ee] py-16 lg:py-12" data-aos="fade-down" id="contact">
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
                            <img src="/globe_logo.png" alt="Logo" className="w-64 h-64 object-contain" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefit