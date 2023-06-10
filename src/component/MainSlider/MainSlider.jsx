import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MainSlider.css";

import one from "../../assets/cherry juice 1.png";
import two from "../../assets/kiwi juice 1.png";
import three from "../../assets/orange juice  1.png";

import cherry2 from "../../assets/cherry 1.png";
import cherry3 from "../../assets/cherry 2 1.png";
import cherry4 from "../../assets/cherry 2.png";
import cherry5 from "../../assets/cherry 3 1.png";
import cherry6 from "../../assets/cherry 4.png";


import kiwi2 from "../../assets/kiwi 1.png";
import kiwi3 from "../../assets/kiwi 2.png";
import kiwi4 from "../../assets/kiwi 3.png";
import kiwi5 from "../../assets/lemon 1.png";
import kiwi6 from "../../assets/mint 1.png";


import orange2 from "../../assets/orange  1.png";
import orange3 from "../../assets/orange half 1.png";
import orange4 from "../../assets/orance half 2 1.png";
import orange5 from "../../assets/orange 2  1.png";


import bgRedOne from "../../assets/Ellipse 2 red.png"
import bgRedTwo from "../../assets/Ellipse 2.1 red.png"
import bgRedThree from "../../assets/Ellipse 2.2 red.png"

import bgGreenOne from "../../assets/bgGreenOne.png";
import bgGreenTwo from "../../assets/bgGrrenTwo .png";
import bgGreenThree from "../../assets/bgGrrenThree.png";


import bgOrangeOne from "../../assets/bgOrangeOne.png";
import bgOrangeTwo from "../../assets/bgOrangeTwo.png";
import bgOrangeThree from "../../assets/bgOrangeThree.png";

const images = [one, two, three,];

const MainSlider = () => {

    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);
    const [slider3, setSlider3] = useState(null);
    const [slider4, setSlider4] = useState(null);
    const [slideIndex, setSlideIndex] = useState(0)
    const [currentSlide, setCurrentSlide] = useState(0);
    const backgroundSliderRef = useRef(null);

    const mainSlider = {
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        

        beforeChange: (current, next) => {
            setSlideIndex(next);
            backgroundSliderRef.current.slickGoTo(next);
            slider1.slickGoTo(next);
        },

        afterChange: (current) => {
            setCurrentSlide(current);
        }
    }

    const matchIndex = (index) => {
        if (index === slideIndex) {
            return 'slide slide-active';
        } else {
            return 'slide';
        }
    }

    return (
        <div
            className="overflow-hidden h-screen w-screen flex justify-center items-center relative"
        >

            {/* Text Slider */}
            <div className="w-screen h-screen flex justify-center items-center bg-transparent">
                <Slider
                    asNavFor={slider2}
                    ref={slider => (setSlider2(slider))}
                    slidesToShow={1}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    fade={true}
                    arrows={false}
                    infinite={true}
                    speed={1000}
                    className=" w-screen h-[900px] pt-[120px] bg-transparent"
                >

                    <div className="w-[100%] h-[900px]  py-20">
                        <div className="px-[100px]">
                            <p className="font-Grechen text-[300px] leading-[250px]">Cherry</p>
                            <p className="font-Poppins text-[60px] leading-[60px] pl-3">Test yourself</p>
                            <p className="font-Podkova text-[30px] ml-4">Refresh your mind and be healthy.</p>
                            <div className="w-[311px] h-[61px] rounded-[18px] bg-[#FF3358] flex justify-center items-center mt-[48px] ml-4 shadow-lg shadow-[#FF3358]">
                                <button className="font-Poppins text-[25px] font-[800] text-white">ADD TO CART</button>
                            </div>
                        </div>
                    </div>

                    <div className="w-[100%] h-[900px] py-20 ">
                        <div className="px-[100px]">
                            <p className="font-Grechen text-[300px] leading-[250px]">Kiwi</p>
                            <p className="font-Poppins text-[60px] leading-[60px] pl-3">Test yourself</p>
                            <p className="font-Podkova text-[30px] ml-4">Refresh your mind and be healthy.</p>
                            <div className="w-[311px] h-[61px] rounded-[18px] bg-[#8FC12A] flex justify-center items-center mt-[48px] ml-4 shadow-lg shadow-[#8FC12A]">
                                <button className="font-Poppins text-[25px] font-[800] text-white">ADD TO CART</button>
                            </div>
                        </div>
                    </div>

                    <div className="w-[100%] h-[900px] py-20 ">
                        <div className="px-[100px]">
                            <p className="font-Grechen text-[300px] leading-[250px]">Orange</p>
                            <p className="font-Poppins text-[60px] leading-[60px] pl-3">Test yourself</p>
                            <p className="font-Podkova text-[30px] ml-4">Refresh your mind and be healthy.</p>
                            <div className="w-[311px] h-[61px] rounded-[18px] bg-[#E59901] flex justify-center items-center mt-[48px] ml-4 shadow-lg shadow-[#E59901]">
                                <button className="font-Poppins text-[25px] font-[800] text-white">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>

            {/* Main Slider */}
             <div
                className="w-full h-screen bg-transparent absolute right-0 top-0 flex justify-center items-center
                 z-[100] ">
                <Slider {...mainSlider}
                    asNavFor={slider3}
                    ref={slider => setSlider1(slider)}
                    className="w-full h-full bg-transparent pt-[140px]"
                >
                    {
                        images.map((img, index) => (
                            <div className={index === (currentSlide - 1) ? 'prev-slide' : matchIndex(index)} key={img}>
                                <img src={img} alt="" className="" /> </div>
                        ))
                    }
                </Slider>
            </div> 

            {/* Particale Slider*/}
            <div className=" w-1/2 top-0 right-0 h-screen absolute z-[10] ">

                <Slider
                    asNavFor={slider2}
                    ref={(slider) => setSlider3(slider)}
                    infinite={true}
                    slidesToShow={1}
                    swipeToSlide={true}
                    vertical={true}
                    speed={2000}
                    arrows={false}
                    
                    className="z-[-10] h-screen w-full flex flex-col justify-center items-center">
                    <div className="h-screen relative">
                        <div className="flex h-full">
                            <img src={cherry2} alt="" className="w-[184px] h-[196px] absolute top-[19%] left-[23%]" />
                            <img src={cherry3} alt="" className="w-[170px] h-[170px] absolute top-[18%] left-[50%]" />
                            <img src={cherry4} alt="" className="w-[340px] h-[270px] absolute top-[37%] left-[48%]" />
                        </div>
                    </div>

                    <div className="h-screen relative">
                        <div className="flex h-full">
                            <img src={kiwi3} alt="" className="w-[187px] h-[187px] absolute top-[20%] left-[17%]" />
                            <img src={kiwi4} alt="" className="w-[196px] h-[185px] absolute top-[16%] left-[55%]" />
                        </div>
                    </div>

                    <div className="h-screen relative">
                        <div className="flex h-full">
                            <img src={orange3} alt="" className="w-[194px] h-[194px] absolute top-[20%] left-[16%]" />
                            <img src={orange5} alt="" className="w-[191px] h-[191px] absolute top-[11%] left-[45%]" />
                            <img src={orange2} alt="" className="w-[350px] h-[350px] absolute top-[49%] left-[18%]" />
                            <img src={orange4} alt="" className="w-[300px] h-[300px] absolute top-[40%] left-[45%]" />
                        </div>
                    </div>

                </Slider>
            </div>


            {/* Particale Slider Two*/}
            <div className=" w-1/2 top-0 right-0 h-screen absolute z-[150] ">

                <Slider
                    asNavFor={slider1}
                    ref={slider =>setSlider4(slider)}
                    infinite={true}
                    slidesToShow={1}
                    swipeToSlide={true}
                    vertical={true}
                    speed={2000}
                    arrows={false}
                    
                    className="h-screen w-full flex flex-col justify-center items-center ">

                    <div className="h-screen relative">
                        <div className="flex h-full">
                            <img src={cherry5} alt="" className="w-[250px] h-[250px] absolute top-[48%] left-[8%]" />
                            <img src={cherry6} alt="" className="w-[184px] h-[195px] absolute top-[65%] left-[40%]" />
                        </div>
                    </div>

                    <div className="h-screen relative">
                        <div className="flex h-full">
                            <img src={kiwi6} alt="" className="w-[188px] h-[188px] absolute top-[8%] left-[36%]" />
                            <img src={kiwi2} alt="" className="w-[269px] h-[269px] absolute top-[56%] left-[8%]" />
                            <img src={kiwi6} alt="" className="w-[188px] h-[188px] absolute top-[56%] left-[60%]" />
                            <img src={kiwi5} alt="" className="w-[184px] h-[195px] absolute top-[60%] left-[50%]" />
                        </div>
                    </div>

                    <div className="h-screen relative">
                        <div className="flex h-full">
                            <img src={orange4} alt="" className="w-[300px] h-[300px] absolute top-[40%] left-[45%]" />
                        </div>
                    </div>

                </Slider>
            </div>



            {/* Background Slider */}
            <div className="absolute">
                <Slider
                    asNavFor={slider1}
                    ref={backgroundSliderRef}
                    slidesToShow={1}
                    fade={true}
                    arrows={false}
                    infinite={true}
                    speed={1000}
                    className=" w-screen h-screen"
                >

                    <div className="w-full h-full">
                        <div className="flex justify-between w-full h-full">
                            <img src={bgRedOne} alt="" className="w-[500px] h-[550px] mt-[100px]" />
                            <img src={bgRedThree} alt="" className="w-[600px] h-[600px] mt-[230px] ml-[420px] z-10" />
                            <img src={bgRedTwo} alt="" className="w-[450px] h-[450px] " />
                        </div>
                    </div>

                    <div className="w-full h-full">
                        <div className="flex justify-between w-full h-full">
                            <img src={bgGreenTwo} alt="" className="w-[500px] h-[550px] mt-[100px]" />
                            <img src={bgGreenOne} alt="" className="w-[600px] h-[600px] mt-[230px] ml-[420px] z-10" />
                            <img src={bgGreenThree} alt="" className="w-[450px] h-[450px] " />
                        </div>
                    </div>

                    <div className="w-full h-full">
                        <div className="flex justify-between w-full h-full">
                            <img src={bgOrangeOne} alt="" className="w-[500px] h-[550px] mt-[100px]" />
                            <img src={bgOrangeTwo} alt="" className="w-[600px] h-[600px] mt-[230px] ml-[420px] z-10" />
                            <img src={bgOrangeThree} alt="" className="w-[450px] h-[450px] " />
                        </div>
                    </div>

                </Slider>
            </div> 

        </div>
    );

}

export default MainSlider;