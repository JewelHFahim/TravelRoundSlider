import Navbar from "../Navbar/Navbar"
import AsNavFor from "../Slider/Slider"


const Home = () => {
    return (
        <div className="relative">

            <div className=" w-full absolute top-0 left-0 z-[99999]">
                <Navbar />
            </div>

            <AsNavFor />
        </div>
    )
}

export default Home