import { useState } from "react";
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
  const [slideIndex, setSlideIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const mainSlider = {
    infinite: true,
    className: "center",
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    rtl: false, // Set rtl prop to true for right-to-left sliding

    beforeChange: (current, next) => {
      if (next > current) {
        setSlideIndex(current + 1);
      } else {
        setSlideIndex(current - 1);
      }
    },
    afterChange: (current) => {
      setCurrentSlide(current);
    }
  };

  const matchIndex = (index) => {
    if (index === slideIndex) {
      return "slide slide-active";
    } else {
      return "slide";
    }
  };

  return (
    <div className="h-[100vh] w-[100vw] border border-green-600 relative flex z-50">
      <div className="w-1/2 bg-cyan-500 h-full"></div>

      {/* Main Slider */}
      <div className="border border-red-600 w-1/2">
        <Slider {...mainSlider} asNavFor={slider2} ref={(slider) => setSlider1(slider)}>
          {images.map((img, index) => (
            <div className={index === currentSlide - 1 ? "prev-slide" : matchIndex(index)} key={img}>
              <img src={img} alt="" />
            </div>
          ))}
        </Slider>
      </div>

      {/* Particle Slider */}
      
    </div>
  );
};

export default MainSlider;
