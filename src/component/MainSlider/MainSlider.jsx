import {useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./MainSlider.css";

import one from "../../assets/cherry juice 1.png";
import two from "../../assets/kiwi juice 1.png";
import three from "../../assets/orange juice  1.png";


import cherry from "../../assets/cherry 1.png";
import kiwi from "../../assets/kiwi 1.png";
import mint from "../../assets/mint 1.png";

const images = [one, two, three];



const MainSlider = () => {


    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);
    const [slideIndex, setSlideIndex] = useState(0)
    const [currentSlide, setCurrentSlide] = useState(0)


    const mainSlider = {
        infinite: true,
        className: "center",
        speed: 500,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        rtl: false,

        beforeChange: (current, next) => {
            setSlideIndex(next)
        },
        afterChange: (one,) => {
            setCurrentSlide(one);
        }
    }


    const matchIndex = (index) => {
        if (index === slideIndex) {
            console.log(index,slideIndex, 'index')
            return 'slide slide-active';
        } else {
            return 'slide';
        }
    }

    const [activeSlide, setActiveSlide] = useState(0);
console.log(activeSlide, "active")


    return (
        <div className="h-[100vh] w-[100vw] border border-green-600 relative flex z-50">

            <div className="w-1/2 bg-cyan-500 h-full"></div>


            {/* Main Slider */}
             <div className="border border-red-600 w-1/2">

                <Slider {...mainSlider}
                    asNavFor={slider2}
                    ref={slider => (setSlider1(slider))}
                >
                    {
                        images.map((img, index) => (
                            <div className={index === (currentSlide - 1) ? 'prev-slide' : matchIndex(index)} key={img}>
                                <img src={img} alt="" /> </div>
                        ))
                    }
                </Slider>

            </div> 


            {/* particle Slider */}
            <div className="absolute w-1/2 h-full top-0 right-0 border-2 border-red-600 -z-10 " >
                <Slider

                    asNavFor={slider2}
                    ref={slider => (setSlider2(slider))}

                    arrows={false}
                    infinite={true}
                    speed={1500}
                    slidesToScroll={1}
                    vertical={true} 
                    afterChange={(current) => setActiveSlide(current)}
                    className="my-slider"
                >
                    {/* Slide 1 */}
                    <div className="w-[800px] h-[800px] border-4 border-orange-900 relative">
                        <img src={cherry} alt="" className="" />
                        <img src={cherry} alt="" className="absolute top-[500px] left-[350px]" />
                    </div>

                    {/* Slide 2 */}
                    <div className="w-[800px] h-[800px] border-4 border-orange-900 relative">
                        <img src={kiwi} alt="" className="" />
                        <img src={kiwi} alt="" className="absolute top-[500px] left-[350px]" />
                    </div>

                    {/* Slide 3 */}
                    <div className="w-[800px] h-[800px] border-4 border-orange-900 relative">
                        <img src={mint} alt="" className="" />
                        <img src={mint} alt="" className="absolute top-[500px] left-[350px]" />
                    </div>
                </Slider>
            </div>


            
            

        </div >
    );

}

export default MainSlider;