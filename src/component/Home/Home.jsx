import MainSlider from "../MainSlider/MainSlider"
import Navbar from "../Navbar/Navbar"


const Home = () => {
    return (
        <div className="relative">

            <div className=" w-full absolute top-0 left-0 z-[99999]">
                <Navbar />
            </div>

            <MainSlider />
        </div>
    )
}

export default Home