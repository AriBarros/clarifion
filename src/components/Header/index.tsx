import CheckmarkIcon from "../../assets/checkmark.svg";
import TruckIcon from "../../assets/truck.svg";
import HeartIcon from "../../assets/heart.svg";
import ArrowSyncIcon from "../../assets/arrowsync.svg";
import { Container, IconArea } from "./styles";

const Header = () => {
  const icons = [
    { icon: CheckmarkIcon, text: "30-DAY SATISFACTION GUARANTEE" },
    { icon: TruckIcon, text: "FREE DELIVERY ON ORDERS OVER $40.00" },
    { icon: HeartIcon, text: "50.000+ HAPPY CUSTOMERS" },
    { icon: ArrowSyncIcon, text: "100% MONEY BACK GUARANTEE" },
  ];

  return (
    <Container>
      {icons.map(({ icon, text }) => (
        <IconArea key={text}>
          <img src={icon} alt={`${text} logo`} />
          <h2>{text}</h2>
        </IconArea>
      ))}
    </Container>
  );
};

export default Header;
