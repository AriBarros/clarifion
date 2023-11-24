import {
  ButtonArea,
  CheckArea,
  ContentArea,
  ContentText,
  ContentWrapper,
  Footer,
  Header,
  HomeContainer,
  IconArea,
  InfoArea,
  LogoArea,
  ProductDescription,
  ProductStock,
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
import Stock from "../../assets/stock.svg";
import Percentage from "../../assets/percentage.svg";

import Clarifon from "../../assets/images/clarifon.svg";
import Product from "../../assets/images/product.svg";
import Cards from "../../assets/images/cards.svg";

import { ArrowForwardIcon, CheckIcon } from "@chakra-ui/icons";
import { Theme } from "../../styles/theme";
import { Button } from "@chakra-ui/react";

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
          <img src={`${Clarifon}`} alt="Clarifon" />
          <ContentText>
            <text>
              <span className="highlight">ONE TIME ONLY</span> Special Price For
              6 Extra Clarifion For Only{" "}
              <span className="highlight">$14 Each </span>
              ($84.00 total!)
            </text>

            <ProductDescription>
              <img src={`${Product}`} alt="Product" />
              <ProductText>
                <div
                  style={{
                    display: "flex",
                    gap: 5,
                    flexDirection: "column",
                  }}
                >
                  <span>Clarifion Air Ionizer</span>
                  <img src={`${Stars}`} alt="Stars" />
                  <ProductStock>
                    <img src={`${Stock}`} alt="Stock" />
                    <span>12 left in Stock</span>
                  </ProductStock>
                  <h3>
                    Simply plug a Clarifion into any standard outlet and replace
                    bulky, expensive air purifiers with a simple.
                  </h3>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                    marginLeft: "auto",
                  }}
                >
                  <text>$180</text>
                  <span>$84</span>
                </div>
              </ProductText>
            </ProductDescription>
            <CheckArea>
              <CheckIcon boxSize={6} color={Theme.colors.lightBlue} />
              <span>
                Negative Ion Technology may <b>help with allergens</b>
              </span>
            </CheckArea>
            <CheckArea>
              <CheckIcon boxSize={6} color={Theme.colors.lightBlue} />
              <span>
                Designed for <b>air rejuvenation</b>
              </span>
            </CheckArea>
            <CheckArea>
              <CheckIcon boxSize={6} color={Theme.colors.lightBlue} />
              <span>
                <b>Perfect for every room</b> in all types of places.
              </span>
            </CheckArea>
            <InfoArea>
              <img src={`${Percentage}`} alt="Percentage icon" />
              <span>
                Save <b>53%</b> and get <b>6 extra Clarifision</b> for only{" "}
                <b>$14 Each</b>.
              </span>
            </InfoArea>
            <ButtonArea>
              <Button
                __css={{
                  bacgroundColor: "none",
                  width: "100%",
                  height: "100%",
                }}
                placeholder="oi"
              >
                YES - CLAIM MY DISCOUNT
                <ArrowForwardIcon boxSize={8} color={Theme} />
              </Button>
            </ButtonArea>
            <div
              style={{
                margin: "0 auto",
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img src={`${Cards}`} alt="Cards" />
            </div>
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
