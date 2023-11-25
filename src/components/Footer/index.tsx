import { Container } from "./styles";
import LockIcon from "../../assets/icons/lock.svg";

const Footer = () => {
  return (
    <Container>
      <div>
        <span>Copyright (c) 2023</span>
        <span>|</span>
        <span>clarifionsupport@clarifion.com</span>
      </div>
      <div>
        <img src={`${LockIcon}`} alt="Lock icon" />
        <span>Secure 256-bit SSL encryption.</span>
      </div>
    </Container>
  );
};

export default Footer;
