import { useState, useEffect, useLayoutEffect } from "react";

import {
  HomeContainer,
  LogoArea,
  Step,
  StepsContainer,
  Subtitle,
  Title,
} from "./styles";
import BlueCircleIcon from "../../assets/icons/blueCircle.svg";
import BlueWitheCircleIcon from "../../assets/icons/bluewhiteCircle.svg";
import GreenCheckIcon from "../../assets/icons/greencheck.svg";
import ClarifonLogo from "../../assets/images/logo.svg";
import NortonLogo from "../../assets/images/norton.svg";
import McAfeeLogo from "../../assets/images/mcafee.svg";
import Table from "../../components/Table";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Home = () => {
  const logos = [McAfeeLogo, NortonLogo];

  const steps = [
    { icon: GreenCheckIcon, text: "Step 1 : Cart Review" },
    { icon: GreenCheckIcon, text: "Step 2 : Checkout" },
    { icon: BlueCircleIcon, text: "Step 3 : Special Offer" },
    { icon: BlueWitheCircleIcon, text: "Step 4 : Confirmation" },
  ];
  const reducedSteps = [
    { icon: GreenCheckIcon, text: "Cart Review" },
    { icon: GreenCheckIcon, text: "Checkout" },
    { icon: BlueCircleIcon, text: "Special Offer" },
    { icon: BlueWitheCircleIcon, text: "Confirmation" },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showSlider, setShowSlider] = useState(false);

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setShowSlider(windowWidth <= 600);
  }, [windowWidth]);

  return (
    <>
      <Header />
      <HomeContainer>
        <LogoArea>
          <img src={ClarifonLogo} alt="Clarifon logo" />
          <div style={{ gap: 20, display: "flex" }}>
            {logos.map((logo, index) => (
              <img key={index} src={logo} alt={`Logo ${index}`} />
            ))}
          </div>
        </LogoArea>

        <div style={{ margin: "20px" }}>
          <Title>Wait! Your Order In Progress.</Title>
          <Subtitle>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing
          </Subtitle>
        </div>

        <StepsContainer>
          {showSlider
            ? reducedSteps.map(({ icon, text }, index) => (
                <Step key={index}>
                  <img src={icon} alt={`${text} icon`} />
                  {index === 2 ? <h1>{text}</h1> : <h2>{text}</h2>}
                </Step>
              ))
            : steps.map(({ icon, text }, index) => (
                <Step key={index}>
                  <img src={icon} alt={`${text} icon`} />
                  {index === 2 ? <h1>{text}</h1> : <h2>{text}</h2>}
                </Step>
              ))}
        </StepsContainer>
        <Table />
      </HomeContainer>
      <Footer />
    </>
  );
};

export default Home;
