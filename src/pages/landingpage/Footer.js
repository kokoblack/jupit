import React from "react";
import logo from "../../assets/jupit1.png";
import {
  GrInstagram,
  GrLinkedinOption,
  GrFacebookOption,
} from "react-icons/gr";
import {
  FooterConataier,
  FooterContent,
  FooterBottomContent,
  FooterBottomContentFlex,
  FooterHeader,
  FooterText,
  FooterBottomText,
  FooterIcon,
  FooterImage,
  Flex,
  MoveLeft,
  MoveRight,
  FooterContentHolder,
  HR,
} from "../../components/StyledComponent";

const Footer = () => {
  return (
    <div>
      <FooterConataier>
        <FooterContentHolder>
          <FooterContent>
            <FooterHeader>Quick Links</FooterHeader>
            <FooterText>Company</FooterText>
            <FooterText>About Jupit</FooterText>
            <FooterText>Contact Us</FooterText>
          </FooterContent>
          <FooterContent>
            <FooterHeader>Product</FooterHeader>
            <FooterText>Bitcoin</FooterText>
            <FooterText>USDT</FooterText>
            <FooterText>Gift Card</FooterText>
            <FooterText>OTC</FooterText>
          </FooterContent>
          <FooterContent>
            <FooterHeader>Legal</FooterHeader>
            <FooterText>Terms of SErvices</FooterText>
            <FooterText>Privacy and Policy</FooterText>
            <FooterText>Anti-Money Laundering Policy</FooterText>
          </FooterContent>
          <FooterContent>
            <FooterHeader>Resources</FooterHeader>
            <FooterText>Blog</FooterText>
            <FooterText>FAQ</FooterText>
          </FooterContent>
          <FooterContent>
            <FooterText>support@jupitapp.co</FooterText>
            <FooterText>+234 802 8651 917</FooterText>
          </FooterContent>
        </FooterContentHolder>
        <HR />
        <FooterBottomContent>
          <MoveLeft footer>
            <FooterImage src={logo} alt='logo' />
          </MoveLeft>
          <FooterBottomContentFlex>
            <FooterBottomText>Quick Links</FooterBottomText>
            <FooterBottomText>Product</FooterBottomText>
            <FooterBottomText>Legal</FooterBottomText>
            <FooterBottomText>Resources</FooterBottomText>
            <FooterBottomText>FAQs</FooterBottomText>
          </FooterBottomContentFlex>
          <MoveRight footer>
            <Flex>
              <FooterIcon>
                <GrLinkedinOption />
              </FooterIcon>
              <FooterIcon>
                <GrFacebookOption />
              </FooterIcon>
              <FooterIcon>
                <GrInstagram />
              </FooterIcon>
            </Flex>
          </MoveRight>
        </FooterBottomContent>
      </FooterConataier>
    </div>
  );
};

export default Footer;
