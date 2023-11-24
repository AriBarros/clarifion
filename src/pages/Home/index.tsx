import {
  HomeContainer,
  LogoArea,
  Step,
  StepsContainer,
  Subtitle,
  Title,
} from "./styles";

import BlueCircleIcon from "../../assets/blueCircle.svg";
import BlueWitheCircleIcon from "../../assets/bluewhiteCircle.svg";
import GreenCheckIcon from "../../assets/greencheck.svg";
import ClarifonLogo from "../../assets/logo.svg";
import NortonLogo from "../../assets/norton.svg";
import McAfeeLogo from "../../assets/mcafee.svg";

import Table from "../../components/Table";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <LogoArea>
        <img src={`${ClarifonLogo}`} alt="Clarifon logo" />
        <div style={{ gap: 20, display: "flex" }}>
          <img src={`${McAfeeLogo}`} alt="McAfeeLogo logo" />

          <img src={`${NortonLogo}`} alt="Norton logo" />
        </div>
      </LogoArea>

      <div style={{ margin: "20px" }}>
        <Title>Wait ! Your Order In Progress.</Title>
        <Subtitle>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing</Subtitle>
      </div>

      <StepsContainer>
        <Step>
          <img src={`${GreenCheckIcon}`} alt="GreenCheck icon" />
          <h2>Step 1 : Cart Review</h2>
        </Step>
        <Step>
          <img src={`${GreenCheckIcon}`} alt="GreenCheck icon" />
          <h2>Step 2 : Checkout</h2>
        </Step>
        <Step>
          <img src={`${BlueCircleIcon}`} alt="BlueCircle icon" />
          <h1>Step 3 : Special Offer</h1>
        </Step>
        <Step>
          <img src={`${BlueWitheCircleIcon}`} alt="BlueWhite icon" />
          <h2>Step 4 : Confirmation</h2>
        </Step>
      </StepsContainer>

      <Table />
      <Footer />
    </HomeContainer>
  );
}
