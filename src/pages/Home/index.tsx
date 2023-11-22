import { Footer, Header, HomeContainer, IconArea, LogoArea } from "./styles";
import CheckmarkIcon from "../../assets/checkmark.svg";
import TruckIcon from "../../assets/truck.svg";
import HeartIcon from "../../assets/heart.svg";
import ArrowSyncIcon from "../../assets/arrowsync.svg";
import ClarifonLogo from "../../assets/logo.svg";
import NortonLogo from "../../assets/norton.svg";
import McAfeeLogo from "../../assets/mcafee.svg";

export default function Home() {
  return (
    <HomeContainer>
      <Header>
        <IconArea>
          <img src={`${CheckmarkIcon}`} alt="Checkmark logo" />
          <h2>30-DAY SATISFACTION GUARANTEE</h2>
        </IconArea>
        <IconArea>
          <img src={`${TruckIcon}`} alt="Truck Button" />
          <h2>FREE DELIVERY ON ORDERS OVER $40.00</h2>
        </IconArea>
        <IconArea>
          <img src={`${HeartIcon}`} alt="Hear Button" />
          <h2>50.000+ HAPPY CUSTOMERS</h2>
        </IconArea>
        <IconArea>
          <img src={`${ArrowSyncIcon}`} alt="ArrowSync Button" />
          <h2>100% MONEY BACK GUARANTEE</h2>
        </IconArea>
      </Header>

      <LogoArea>
        <img src={`${ClarifonLogo}`} alt="Clarifon Button" />
        <div style={{ gap: 20, display: "flex" }}>
          <img src={`${McAfeeLogo}`} alt="Clarifon Button" />

          <img src={`${NortonLogo}`} alt="Clarifon Button" />
        </div>
      </LogoArea>
      <Footer>
        <div>
          <h2>Copyright (c) 2023</h2>
          <h2>|</h2>
          <h2>clarifionsupport@clarifion.com</h2>
        </div>
      </Footer>
    </HomeContainer>
  );
}
