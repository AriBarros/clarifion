import { useEffect, useState } from "react";

import CheckmarkIcon from "../../assets/checkmark.svg";
import TruckIcon from "../../assets/truck.svg";
import HeartIcon from "../../assets/heart.svg";
import ArrowSyncIcon from "../../assets/arrowsync.svg";
import { Container, IconArea, SliderArrow, SliderWrapper } from "./styles";

const Header = () => {
  const [showSlider, setShowSlider] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setShowSlider(window.innerWidth <= 600);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const icons = [
    { icon: CheckmarkIcon, text: "30-DAY SATISFACTION GUARANTEE" },
    { icon: TruckIcon, text: "FREE DELIVERY ON ORDERS OVER $40.00" },
    { icon: HeartIcon, text: "50.000+ HAPPY CUSTOMERS" },
    { icon: ArrowSyncIcon, text: "100% MONEY BACK GUARANTEE" },
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % icons.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? icons.length - 1 : prevSlide - 1
    );
  };

  return (
    <Container>
      {showSlider && (
        <SliderWrapper>
          <SliderArrow onClick={handlePrevSlide}>&lt;</SliderArrow>
          <IconArea key={icons[currentSlide].text}>
            <img
              src={icons[currentSlide].icon}
              alt={`${icons[currentSlide].text} logo`}
            />
            <h2>{icons[currentSlide].text}</h2>
          </IconArea>
          <SliderArrow onClick={handleNextSlide}>&gt;</SliderArrow>
        </SliderWrapper>
      )}
      {!showSlider &&
        icons.map(({ icon, text }) => (
          <IconArea key={text}>
            <img src={icon} alt={`${text} logo`} />
            <h2>{text}</h2>
          </IconArea>
        ))}
    </Container>
  );
};

export default Header;
