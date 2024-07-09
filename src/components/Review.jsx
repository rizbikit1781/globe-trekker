import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import { MdStar } from "react-icons/md"

const Review = () => {
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
            items: 3,
        },
        module: {
            breakpoint: {max: 464, min: 0},
            items: 1,
        }
        }
        
    const Card = ({ image, name, position }) => {
        return ( 
            <div className="flex flex-col items-center p-6">
                <img src={image} alt="" className="rounded-full" width={300} height={300}/>
                <div className="shadow-bg rounded-lg mt-10 bg-white p-8 text-center">
                    <span className="flex justify-center mb-4">
                    {[...Array(5)].map((_, index) => (
                        <MdStar key={index} className="text-[#ffa801] text-xl"/>
                    ))}
                    </span>
                    <p className="text-md mb-4">
                        This is due to their best service, pricing and customer support.
                        It's throughly refreshing to such a personal touch.
                    </p>
                    <p className="text-textColor text-xl font-semibold">{name}</p>
                    <p className=" text-orange py-2 uppercase">{position}</p>
                </div>
            </div>
        )
    }
        

  return (
    <div>
        <div data-aos="fade-up">
            <div className="bg-yellow-50 bg-contain bg-bottom bg-no-repeat relative z-10">
                <div className="max-w-[1200px] xl:px-0 px-6 mx-auto text-center pt-16">
                    <p className="text-orange text-xl pb-2">Testimonials & reviews</p>
                    <h4 className="text-[40px] font-bold mb-8">What People Are Saying</h4>
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
                            <Card image="/ape.png" name="John Doe" position="Founder & CEO" />
                            <Card image="/ape2.png" name="John Doe" position="Founder & CEO" />
                            <Card image="/ape3.png" name="Jane Doe" position="Founder & CEO" />
                            <Card image="/ape4.png" name="John Doe" position="Founder & CEO" />
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Review