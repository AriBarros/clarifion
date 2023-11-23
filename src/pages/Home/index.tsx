import {
  ContentArea,
  ContentText,
  ContentWrapper,
  Footer,
  Header,
  HomeContainer,
  IconArea,
  LogoArea,
  ProductDescription,
  ProductText,
  Step,
  StepsContainer,
  Subtitle,
  Title,
} from "./styles";
import CheckmarkIcon from "../../assets/checkmark.svg";
import TruckIcon from "../../assets/truck.svg";
import HeartIcon from "../../assets/heart.svg";
import ArrowSyncIcon from "../../assets/arrowsync.svg";
import LockIcon from "../../assets/lock.svg";
import BlueCircleIcon from "../../assets/blueCircle.svg";
import BlueWitheCircleIcon from "../../assets/bluewhiteCircle.svg";
import GreenCheckIcon from "../../assets/greencheck.svg";
import ClarifonLogo from "../../assets/logo.svg";
import NortonLogo from "../../assets/norton.svg";
import McAfeeLogo from "../../assets/mcafee.svg";
import Stars from "../../assets/stars.svg";

import Clarifon from "../../assets/images/clarifon.svg";
import Product from "../../assets/images/product.svg";

export default function Home() {
  const icons = [
    { icon: CheckmarkIcon, text: "30-DAY SATISFACTION GUARANTEE" },
    { icon: TruckIcon, text: "FREE DELIVERY ON ORDERS OVER $40.00" },
    { icon: HeartIcon, text: "50.000+ HAPPY CUSTOMERS" },
    { icon: ArrowSyncIcon, text: "100% MONEY BACK GUARANTEE" },
  ];

  return (
    <HomeContainer>
      <Header>
        {icons.map(({ icon, text }) => (
          <IconArea key={text}>
            <img src={icon} alt={`${text} logo`} />
            <h2>{text}</h2>
          </IconArea>
        ))}
      </Header>
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

      <ContentArea>
        <ContentWrapper>
          <img src={`${Clarifon}`} alt="Clarifon image" />
          <ContentText>
            <text>
              <span className="highlight">ONE TIME ONLY</span> Special Price For
              6 Extra Clarifion For Only{" "}
              <span className="highlight">$14 Each </span>
              ($84.00 total!)
            </text>

            <ProductDescription>
              <img src={`${Product}`} alt="Product image" />
              <div
                style={{
                  display: "flex",
                  gap: 10,
                }}
              >
                <ProductText>
                  <span>Clarifion Air Ionizer</span>
                </ProductText>
                <text>$180</text>
                <span>$84</span>
              </div>
              <img src={`${Stars}`} alt="Stars image" />
            </ProductDescription>
          </ContentText>
        </ContentWrapper>
      </ContentArea>

      <Footer>
        <div>
          <span>Copyright (c) 2023</span>
          <span>|</span>
          <span>clarifionsupport@clarifion.com</span>
        </div>
        <div>
          <img src={`${LockIcon}`} alt="Lock icon" />
          <span>Secure 256-bit SSL encryption.</span>
        </div>
      </Footer>
    </HomeContainer>
  );
}
