import { useEffect, useState } from "react";

import { ArrowForwardIcon, CheckIcon } from "@chakra-ui/icons";
import {
  BadgeArea,
  BadgeContent,
  Button,
  ButtonArea,
  CheckArea,
  CommentSection,
  ContentArea,
  ContentText,
  ContentWrapper,
  ImageArea,
  InfoArea,
  ProductDescription,
  ProductStock,
  ProductText,
} from "./styles";

import { Theme } from "../../styles/theme";

import Stars from "../../assets/icons/stars.svg";
import Stock from "../../assets/icons/stock.svg";
import Percentage from "../../assets/icons/percentage.svg";

import Clarifon from "../../assets/images/clarifon.svg";
import Product from "../../assets/images/product.svg";
import Cards from "../../assets/images/cards.svg";
import MobileCards from "../../assets/images/mobilecards.svg";
import Badge from "../../assets/images/badge.svg";
import ProfilePhoto from "../../assets/images/profilephoto.svg";
import VerifiedProfile from "../../assets/images/verify.svg";

const Table = () => {
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowSlider(window.innerWidth <= 480);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (showSlider) {
    return (
      <ContentWrapper>
        <ImageArea>
          <text>
            <span className="highlight">ONE TIME ONLY</span> Special Price For 6
            Extra Clarifion For Only{" "}
            <span className="highlight">$14 Each </span>
            ($84.00 total!)
          </text>
          <img src={`${Clarifon}`} alt="Clarifon" />
        </ImageArea>
        <ContentText>
          <ProductDescription>
            <img src={`${Product}`} alt="Product" style={{ width: 100 }} />
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
          <h3>
            Simply plug a Clarifion into any standard outlet and replace bulky,
            expensive air purifiers with a simple.
          </h3>
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
            <Button>
              YES - CLAIM MY DISCOUNT
              <ArrowForwardIcon boxSize={8} color={Theme} />
            </Button>
          </ButtonArea>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <img src={`${MobileCards}`} alt="Mobile Cards" />
          </div>
          <BadgeArea>
            <span>No thanks, I don’t want this.</span>
          </BadgeArea>
          <BadgeContent>
            <img src={`${Badge}`} alt="Badge" />
            <span>
              If you are not completely thrilled with your Clarifion - We have a{" "}
              <b>30 day satisfaction guarantee</b>. Please refer to our return
              policy at the bottom of the page for more details. Happy Shopping!
            </span>
          </BadgeContent>
        </ContentText>
      </ContentWrapper>
    );
  } else {
    return (
      <ContentArea>
        <ContentWrapper>
          <ImageArea>
            <img src={`${Clarifon}`} alt="Clarifon" />
            <CommentSection>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <img src={`${ProfilePhoto}`} alt="Profile" />
                <div>
                  <img src={`${Stars}`} alt="Stars" style={{ width: 300 }} />
                  <div style={{ display: "flex", gap: 10 }}>
                    <b>Ken T.</b>
                    <img
                      src={`${VerifiedProfile}`}
                      alt="Verified profile"
                      style={{ width: 150 }}
                    />
                  </div>
                </div>
              </div>
              <div>
                <span>
                  “As soon as the Clarifions arrived I put one in my bedroom.
                  This was late in the afternoon. When I went to the bedroom in
                  the evening it smelled clean. When I went to bed I felt I
                  could breathe better. Wonderful.”
                </span>
              </div>
            </CommentSection>
          </ImageArea>
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
              <Button>
                YES - CLAIM MY DISCOUNT
                <ArrowForwardIcon boxSize={8} color={Theme} />
              </Button>
            </ButtonArea>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <img src={`${Cards}`} alt="Cards" />
            </div>
            <BadgeArea>
              <span>No thanks, I don’t want this.</span>
            </BadgeArea>
            <BadgeContent>
              <img src={`${Badge}`} alt="Badge" />
              <span>
                If you are not completely thrilled with your Clarifion - We have
                a <b>30 day satisfaction guarantee</b>. Please refer to our
                return policy at the bottom of the page for more details. Happy
                Shopping!
              </span>
            </BadgeContent>
          </ContentText>
        </ContentWrapper>
      </ContentArea>
    );
  }
};

export default Table;
