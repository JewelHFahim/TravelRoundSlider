import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LandingPage.css"; // Import custom CSS file

const SliderComponent = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [nav3, setNav3] = useState(null);
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);
  const slider3Ref = useRef(null);

  useEffect(() => {
    setNav1(slider1Ref.current);
    setNav2(slider2Ref.current);
    setNav3(slider3Ref.current);
  }, []);

  const handleAfterChange = (currentSlide, nextSlide) => {
    if (nav1 && nav2 && nav3) {
      nav1.slickGoTo(nextSlide);
      nav2.slickGoTo(nextSlide);
      nav3.slickGoTo(nextSlide);
    }
  };

  const NextArrow = ({ onClick }) => (
    <button className="custom-arrow next" onClick={onClick}>
      Next
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button className="custom-arrow prev" onClick={onClick}>
      Prev
    </button>
  );

  return (
    <div className="slider-container">
      <h4>Slider 1 (Right to Left)</h4>
      <Slider
        asNavFor={nav2}
        ref={(slider) => (slider1Ref.current = slider)}
        className="slider slider1"
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
      >
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
      </Slider>

      <h4>Slider 2 (Left to Right)</h4>
      <Slider
        asNavFor={nav1}
        ref={(slider) => (slider2Ref.current = slider)}
        className="slider slider2"
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
      >
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
      </Slider>

      <h4>Slider 3 (Top to Bottom)</h4>
      <Slider
        asNavFor={nav1}
        ref={(slider) => (slider3Ref.current = slider)}
        className="slider slider3"
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
        vertical
        rtl={true}
      >
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
