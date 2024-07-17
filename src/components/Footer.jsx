import { MdPhone, MdOutlineMailOutline, MdOutlineLocationOn } from "react-icons/md"

const Footer = () => {
  return (
    <footer className="bg-[#313041] py-16 bg-contain">
        <div className="text-[#a9a8b6] flex lg:flex-nowrap flex-wrap justify-between max-w-[1200px] xl:px-0 px-6 mx-auto gap-10">
            <div className="lg:w-1/3">
                <img src="/globe_logo.png" width={100} height={100} alt="" className="mb-2" />
                <p>
                    Welcome to our Trip and Tour Agency. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <hr className="my-3"/>
                <div>
                    <ul>
                        <a href="#" className="flex items-center gap-2 hover:text-orange my-1">
                            <MdPhone className="text-orange"/> 92 666 888 0000
                        </a>
                        <a href="#" className="flex items-center gap-2 hover:text-orange my-1">
                            <MdOutlineMailOutline className="text-orange"/> contact@example.com
                        </a>
                        <a href="#" className="flex items-center gap-2 hover:text-orange my-1">
                            <MdOutlineLocationOn className="text-orange"/> 140 10 AVE SW, Calgary, AB, CA
                        </a>
                    </ul>
                </div>
            </div>
            <div className="lg:w-1/5">
                <h6 className="text-white text-xl font-bold my-5 lg:mt-0">Company</h6>
                <ul className="flex flex-col gap-4">
                    <a href="#">About us</a>
                    <a href="#">Community Blogs</a>
                    <a href="#">Rewards</a>
                    <a href="#">Work with us</a>
                    <a href="#">Contact</a>
                </ul>
            </div>
            <div className="lg:w-1/5">
                <h6 className="text-white text-xl font-bold my-5 lg:mt-0">Explore</h6>
                <ul className="flex flex-col gap-4">
                    <a href="#">Account</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Affiliate Program</a>
                    <a href="#">Our Partner</a>
                    <a href="#">Events</a>
                </ul>
            </div>
            <div className="lg:w-[30%] flex flex-col">
                <h6 className="text-white text-xl font-bold my-5 lg:mt-0">Newsletter</h6>
                <input type="email" placeholder="Email Address" className="text-center p-2 rounded-md bg-[#24232f] focus:outline-none"/>
                <button className="bg-orange p-2 my-2 rounded-md text-white">SUBSCRIBE</button>
                <label>
                    <input type="checkbox"/> I agree to all terms and policies
                </label>
            </div>
        </div>
    </footer>
  )
}

export default Footer