import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MainSlider.css";

import one from "../../assets/slide-1-img1.png";
import two from "../../assets/slide-1-img1.png";
import three from "../../assets/slide-3-img1.png";

import img1 from "../../assets/slide-1-img2.png";
import img2 from "../../assets/slide-1-img2.png";
import img3 from "../../assets/slide-3-img2.png";

import bg1 from "../../assets/slide-1-img3.png";
import bg2 from "../../assets/slide-1-img3.png";
import bg3 from "../../assets/slide-3-img3.png";

import bg from "../../assets/bgImg.png";
import { motion } from "framer-motion";

const images = [three, two, three];

const datas = [
  {
    img: one,
    title: "Indonesia",
    des: "Hill View"
  },
  {
    img: two,
    title: "Malaysia",
    des: "Hill View"
  },
  {
    img: three,
    title: "Nepal",
    des: "Hill View"
  },
]

const MainSlider = () => {

  const [prevSlide, setPrevSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(0);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  const [slider3, setSlider3] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const backgroundSliderRef = useRef(null);

  const mainSlider = {
    fade: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    dots: true,

    beforeChange: (current, next) => {
      setPrevSlide(current);

      if (current < next) {
        setNextSlide(next + 1);
      } else {
        setNextSlide(next - 1);
      }

      setSlideIndex(next);
      backgroundSliderRef.current.slickGoTo(next);
      slider1.slickGoTo(next);
    },

    afterChange: (current) => {
      setCurrentSlide(current);
    },
  };

  const matchIndex = (index) => {
    if (index === slideIndex) {
      return "slide slick-active";
    } else if (index === prevSlide) {
      return "slide prev-slide";
    } else if (index === nextSlide) {
      return "slide next-slide";
    } else {
      return "slide";
    }
  };

  return (
    <div className="overflow-hidden h-screen w-screen flex justify-center items-center relative ">
      {/* Main Slider */}

      <div className="w-[810px] h-[810px] bg-transparent absolute flex justify-center items-center z-[100] rounded-full border-2">
        <Slider
          {...mainSlider}
          asNavFor={slider3}
          ref={(slider) => setSlider1(slider)}
          className="w-full h-full bg-transparent rounded-full mainSlider border border-red-600"
        >
          {datas.map((data, index) => (
            <div key={index} className={`${matchIndex(index)} border border-green-600 relative`}>
              <img src={data.img} alt="" />
              <h1 className="text-[300px] leading-0 border-2 border-orange-800 absolute top-0 ">{data.title}</h1>
            </div>
          ))}
        </Slider>
      </div>

      {/* Particle Slider*/}
      <div className=" w-[1450px] h-[1450px] absolute z-[10] ">
        <Slider
          fade={true}
          asNavFor={slider2}
          ref={(slider) => setSlider3(slider)}
          infinite={true}
          slidesToShow={1}
          swipeToSlide={true}
          speed={2000}
          arrows={false}
          className="z-[-10] w-[1450px] h-[1450px] ParticaleSlider"
        >
          <div className="w-full h-full rounded-full object-cover relative">
            <img
              src={img3}
              alt=""
              className="w-full h-full rounded-full object-cover"
            />

          </div>

          <div className="w-full h-full rounded-full object-cover relative">
            <img
              src={img2}
              alt=""
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          <div className="w-full h-full rounded-full object-cover relative">
            <img
              src={img3}
              alt=""
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </Slider>
      </div>

      {/* Background Slider */}
      <div className="w-[2400px] h-[2400px] absolute border-2 border-white">
        <Slider
          asNavFor={slider1}
          ref={backgroundSliderRef}
          slidesToShow={1}
          fade={true}
          arrows={false}
          infinite={true}
          speed={1000}
          dots={true}
          className=" w-full h-full  BackgroundSlider "
        >
          <div className="w-full h-full  object-cover">
            <img src={bg3} alt="" />
          </div>

          <div className="w-full h-full  object-cover">
            <img src={bg} alt="" />
          </div>

          <div className="w-full h-full  object-cover">
            <img src={bg3} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default MainSlider;
