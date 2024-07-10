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
            <div>
                <div>
                    <img src={image} />
                    <p>
                        10 <span className='font-normal text-xs'>JULY</span>
                    </p>
                </div>
                <div className='border border-[#ebe6de] rounded-b-lg relative'>
                    <div className='absolute w-full h-5 -top-5 bg-white rounded-t-[20px]'>
                        <div className='p-6'>
                            <div className='flex items-center gap-4'>
                                <span className='flex item-center gap-1 text-xs'>
                                    <MdPerson /> ADMIN
                                </span>
                                <span className='flex item-center gap-1 text-xs'>
                                    <MdComment /> 0 COMMENTS
                                </span>
                            </div>
                            <h4 className='text-2xl font-semibold py-2 hover:text-orange'>{text}</h4>
                            <p className='pt-2 leading-8'>There are many variations of but the majority have simply free text available not sufferd</p>
                            <a href='#'>Read More <MdArrowRight /></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

  return (
    <div>
        <div>
            <img src="/bg-1.webp" />
        </div>
        <div>
            <div>
                <div className=''>
                    <p>Our benefit lists</p>
                    <h4>Why Choose Globe Trekker</h4>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo doloribus minus ipsam dolorum eos cupiditate dolores, temporibus, maxime nisi esse dicta ad quos deserunt, suscipit accusamus reiciendis autem perferendis optio!
                    </p>
                    <div>
                        <span>
                            <RiFlightTakeoffFill />
                        </span>
                        <span>
                            <h6>Professional and Certificated</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iste quidem nesciunt vel excepturi qui illum fugiat unde debitis enim. Doloribus, numquam. Maiores iure temporibus, necessitatibus voluptates inventore sed optio!</p>
                        </span>
                    </div>
                    <div>
                        <span><GiRuleBook /></span>
                        <span>
                            <h6>Get Instant Tour Bookings</h6>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo voluptatem laborum voluptatum tempora placeat. Accusantium est in dolor maiores. Cumque voluptatem aspernatur voluptates amet porro praesentium quidem ducimus asperiores aperiam?</p>
                        </span>
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
                            <Card image="/ape.png" text="Things to See and Do When Visiting Japan" />
                            <Card image="/ape2.png" text="A Place where Start New Life with Peace" />
                            <Card image="/ape3.png" text="Journeys are Best Measured with Friends" />
                            <Card image="/ape4.png" text="Travel the Most Beautiful Places in the World" />
                        </Carousel>
                    </div>
                </div>
            </div>
            
        
            <div className='bg-[#faf5ee]' data-aos="fade-down">
                <div className='flex flex-wrap max-w-[1200px] xl:px-0 px-6 mx-auto lg:pt-28 pt-14'>
                    <div className='lg:w-1/2'>
                        <p className='text-xl text-orange pb-4'>Join us</p>
                        <p className='lg:text-[50px] text-3xl text-textColor font-semibold'>Not a Member Yet?</p>
                        <p className='text-[#757783] py-4'>Join us! Our members can access savings of up to 50% and earn Trip Coins while booking.</p>
                        <div className='flex gap-4 pt-6'>
                            <button className='bg-orange text-white text-xs font-bold rounded flex gap-2 px-8 h-12 items-center hoverBtn'>
                                <MdArrowCircleRight size={20} /> SIGN IN
                            </button>
                            <button className='bg-white text-textColor text-xs font-bold rounded flex gap-2 px-8 h-12 items-center hoverBtn'>
                                <MdPerson size={20} /> REGISTER
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-center lg:w-1/2 w-full lg:mt-0 mt-14'>
                        <img src="/logo.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Benefit