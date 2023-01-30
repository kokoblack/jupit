import styled from "styled-components";
import aboutimage from "../assets/about-img.png";
import downloadimg from "../assets/download-img.png";
import footerimg from "../assets/footer-img.png";

export const color = {
  primary: "#1C1D93",
  secondary: "#F2921D",
  black: "#000000",
  black1: "#3D3D3D",
  black2: "#040415",
  blue1: "#090931",
  blue2: "#040415",
  grey: "#777777",
  grey1: "#EFEFEF",
  grey2: "#626262",
};

// styled Component
// predefined styled
export const MoveLeft = styled.div`
  margin-right: auto;

  @media (max-width: 950px) {
  margin-right: ${({footer}) => footer? 0: 'auto'};
}
`;

export const MoveRight = styled.div`
  margin-left: auto;

  @media (max-width: 950px) {
  margin-left: ${({footer}) => footer? 0: 'auto'};
}
`;

export const Logo = styled.img`
  height: ${({ height }) => height}rem;
  width: ${({ width }) => width}rem;

  @media (max-width: 1120px) {
    height: ${({ height }) => height - 0.7}rem;
    width: ${({ width }) => width - 2}rem;
  }
`;

export const Image = styled.img`
  height: ${({ height }) => height}rem;
  width: ${({ width }) => width}rem;
`;

export const HeaderText = styled.h1`
  font-family: ${({ family }) => (family ? family : "Montserrat")};
  font-style: normal;
  font-weight: ${({ weight }) => (weight ? weight : 700)};
  font-size: ${({ size }) => size}rem;
  line-height: ${({ height }) => height}rem;
  text-align: ${({ align }) => (align ? align : "center")};
`;

export const SubText = styled.h3`
  font-family: ${({ family }) => (family ? family : "Montserrat")};
  font-style: normal;
  font-weight: ${({ weight }) => (weight ? weight : 700)};
  font-size: ${({ size }) => size}rem;
  line-height: ${({ height }) => height}rem;
  text-align: ${({ align }) => (align ? align : "center")};
`;

export const Text = styled.p`
  font-family: ${({ family }) => (family ? family : "Montserrat")};
  font-style: normal;
  font-weight: ${({ weight }) => (weight ? weight : 400)};
  font-size: ${({ size }) => size}rem;
  line-height: ${({ height }) => height}rem;
  text-align: ${({ align }) => (align ? align : "center")};
`;

export const Button = styled.button`
  padding: 16px 50px;
  background: ${color.secondary};
  border-radius: ${({ radius }) => (radius ? radius : 0)}px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid ${color.secondary};

  @media (max-width: ${({ hero }) => (hero ? 462 : null)}px) {
    padding: 12px 40px;
    font-size: 12px;
    line-height: 20px;
    margin-top: 2rem;
  }

  @media (max-width: ${({ hero }) => (hero ? 280 : null)}px) {
    padding: 10px 30px;
    font-size: 12px;
    line-height: 20px;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: ${(props) => (props.jusCont ? props.jusCont : "center")};
  align-items: ${(props) => (props.alnItm ? props.alnItm : "center")};
  flex-direction: ${(props) => (props.flxDir ? props.flxDir : "row")};
  gap: ${(props) => (props.gap ? props.gap : 0)}rem;
`;

export const FlexibleWrapper = styled.div`
  position: absolute;
  left: ${({ left }) => (left ? left : null)}rem;
  right: ${({ right }) => (right ? right : null)}rem;
  top: ${({ top }) => (top ? top : null)}rem;
  bottom: ${({ bottom }) => (bottom ? bottom : null)}rem;
`;

export const FlexBasis = styled.div`
  flex-basis: ${({ basis }) => basis}%;

  @media (max-width: 1118px) {
    text-align: ${({ center }) => (center ? "center" : null)};
  }

  @media (max-width: 889px) {
    flex-basis: ${({ basis, feat }) => (feat ? basis + 20 : basis - 20)}%;
  }

  @media (max-width: 599px) {
    flex-basis: ${({ basis, feat }) => (feat ? (basis = 100) : (basis = 0))}%;
  }
`;

export const Icon = styled(Flex)`
  font-size: 0;
`;

export const Icon1 = styled(Flex)`
  font-size: 35px;
  color: ${color.primary};

  @media (max-width: 335px) {
    font-size: 20px;
  }
`;

export const Icon2 = styled(Flex)`
  font-size: 35px;
  color: ${color.primary};

  @media (max-width: 335px) {
    font-size: 25px;
  }
`;

// navbar
export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 5rem;

  @media (max-width: 550px) {
    padding: 3rem 1rem;
  }
`;

export const NavAnchor = styled.a`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.25rem;
  text-decoration: none;
  margin: 1rem;
  color: ${color.black1};

  @media (max-width: ${({ breakpoint }) => breakpoint}px) {
    display: none;
  }

  @media (max-width: 1120px) {
    font-size: 1rem;
  }

  @media (max-width: 720px) {
    font-size: 1.2rem;
    color: ${color.primary};
  }

  @media (max-width: 550px) {
    color: #fff;
  }
`;

const Link = ({ className, children }) => (
  <a className={className}>{children}</a>
);

export const StyledLink = styled(Link)`
  padding: 21px 39px;
  background-color: ${({ secondary }) =>
    secondary ? color.secondary : "#fff"};
  border: 1px solid ${color.primary};
  border-radius: 5px;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.25rem;
  margin: 0.5rem;
  color: ${color.primary};

  &:hover {
    color: ${({ secondary }) => (secondary ? color.secondary : "#fff")};
    background-color: ${color.primary};
  }

  @media (max-width: ${({ breakpoint }) => breakpoint}px) {
    display: none;
  }

  @media (max-width: 1120px) {
    font-size: 0.8rem;
    padding: 18px 30px;
  }
`;

export const Show = styled.div`
  display: none;

  @media (max-width: ${({ breakpoint }) => breakpoint}px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const Menu = styled.div`
  position: absolute;
  right: 3rem;
  top: 5.5rem;
  background-color: #fff;
  width: 15rem;
  padding: 3rem 0 3rem 0;
  box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%);
  /* box-shadow: 3px 3px 3px whitesmoke, -3px -3px 3px whitesmoke; */
  z-index: 3;

  @media (max-width: 550px) {
    width: 100%;
    height: 100%;
    right: 0;
    top: 0;
    background-color: ${color.primary};
    padding-top: 6rem;
  }
`;

// hero section
export const Herro = styled(Flex)`
  padding: 0 5rem 0 5rem;
  gap: 4rem;

  @media (max-width: 1118px) {
    flex-direction: column;
  }

  @media (max-width: 462px) {
    padding: 0 1rem 0 1rem;
  }
`;

export const HeroText = styled(HeaderText)`
  padding-right: 2rem;

  @media (max-width: 1250px) {
    font-size: ${({ size }) => size - 0.5}rem;
  }

  @media (min-width: 1119px) and (max-width: 1220px) {
    font-size: ${({ size }) => size - 0.8}rem;
    line-height: ${({ height }) => height - 1}rem;
  }

  @media (max-width: 1118px) {
    text-align: center;
    padding: 0;
  }

  @media (max-width: 692px) {
    font-size: ${({ size }) => size - 1}rem;
    line-height: ${({ height }) => height - 1.5}rem;
  }

  @media (max-width: 550px) {
    font-size: ${({ size }) => size - 1.5}rem;
    line-height: ${({ height }) => height - 1.8}rem;
  }

  @media (max-width: 335px) {
    font-size: ${({ size }) => size - 1.9}rem;
    line-height: ${({ height }) => height - 2}rem;
  }

  @media (max-width: 280px) {
    font-size: ${({ size }) => size - 2.1}rem;
    line-height: ${({ height }) => height - 2.8}rem;
  }
`;

export const HeroTexTSmall = styled(Text)`
  @media (max-width: 1250px) {
    font-size: ${({ size }) => size - 0.2}rem;
  }

  @media (max-width: 1118px) {
    text-align: center;
  }

  @media (max-width: 550px) {
    font-size: ${({ size }) => size - 0.4}rem;
    line-height: ${({ height }) => height - 0.4}rem;
  }

  @media (max-width: 280px) {
    font-size: ${({ size }) => size - 0.6}rem;
    line-height: ${({ height }) => height - 0.7}rem;
  }
`;

export const ManImage = styled(Image)`
  @media (max-width: 1250px) {
    height: ${({ height }) => height - 4}rem;
    width: ${({ width }) => width - 3}rem;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const SuccsessImage = styled(Image)`
  @media (max-width: 1250px) {
    height: ${({ height }) => height - 0.7}rem;
    width: ${({ width }) => width - 3}rem;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const BuyImage = styled(Image)`
  @media (max-width: 1250px) {
    height: ${({ height }) => height - 2}rem;
    width: ${({ width }) => width - 3}rem;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const HeroFlexibleWrapper = styled(FlexibleWrapper)`
  @media (max-width: 1250px) {
    top: ${({ avatar, buy, top }) =>
      avatar ? top - 3.3 : buy ? top - 1.7 : top - 3.3}rem;
    left: ${({ avatar, buy, left }) =>
      avatar ? left - 2 : buy ? left + 2 : left - 2}rem;
  }
`;
// card
export const CardHolder = styled(Flex)`
  justify-content: space-around;
  padding: 3rem;
  background-color: #f5f5f5;
  box-sizing: border-box;
  gap: 20px;
  flex-wrap: wrap;
  position: relative;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem;
  gap: 17px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(196, 196, 196, 0.25);
  backdrop-filter: blur(20px);
  border-radius: 25px;
  width: 15rem;

  &:hover {
    background: linear-gradient(180deg, #1c1d93 0%, #3a3b8f 100%);
    color: #ffffff;
  }

  &:hover .white {
    color: #efefef;
  }

  &:hover .arrow2 {
    color: #efefef;
  }

  &:hover .arrow {
    background: radial-gradient(
      111.14% 111.14% at 8.37% 0%,
      rgba(255, 255, 255, 0.36) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    color: ${color.secondary};
  }

  &:hover .arrow1 {
    color: ${color.secondary};
  }

  @media (max-width: 335px) {
    width: 12rem;
  }

  @media (max-width: 270px) {
    width: 10rem;
  }
`;
export const CardTextBig = styled(SubText)`
  color: ${color.black1};
  margin-top: 0.4rem;

  @media (max-width: 335px) {
    font-size: ${({ size }) => size - 0.5}rem;
  }

  @media (max-width: 270px) {
    font-size: ${({ size }) => size - 0.8}rem;
    line-height: ${({ height }) => height - 1.5}rem;
  }
`;
export const CardTextSmall = styled(Text)`
  color: ${color.black1};
  margin-top: 0;

  @media (max-width: 335px) {
    font-size: ${({ size }) => size - 0.2}rem;
  }

  @media (max-width: 270px) {
    font-size: ${({ size }) => size - 0.4}rem;
    line-height: ${({ height }) => height - 0.5}rem;
  }
`;
export const CardTextfooter = styled(Text)`
  color: ${color.primary};
  /* margin-top: 0; */

  @media (max-width: 335px) {
    font-size: ${({ size }) => size - 0.2}rem;
  }

  @media (max-width: 270px) {
    line-height: ${({ height }) => height - 0.5}rem;
  }
`;
export const Circle = styled.div`
  border-radius: 100%;
  box-shadow: 1px 0 3px ${color.primary}, 0 -1px 3px gray;
  padding: 0.5rem 0.5rem;

  @media (max-width: 335px) {
    padding: 0.3rem 0.3rem;
  }
`;

export const CardImage = styled(Image)`
  @media (max-width: 335px) {
    height: ${({ height }) => height - 1}rem;
    width: ${({ width }) => width - 1.65}rem;
  }

  @media (max-width: 270px) {
    height: ${({ height }) => height - 1.5}rem;
    width: ${({ width }) => width - 2}rem;
  }
`;
// Features
export const Feat = styled(Flex)`
  padding: 3rem 3rem 0 3rem;
  flex-direction: column;
  position: relative;

  @media (max-width: 470px) {
    padding: 10%;
  }
`;
export const FeatContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  column-gap: 4rem;
  row-gap: 2rem;
  justify-items: center;
  align-items: flex-start;

  @media (max-width: 470px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
export const FeatCard = styled(Flex)`
  flex-direction: column;

  @media (min-width: 471px) and (max-width: 865px) {
    width: 25rem;
  }
`;
export const FeatureTextBig = styled(HeaderText)`
  color: ${color.blue1};
  padding: 0 3rem;

  @media (max-width: 810px) {
    font-size: ${({ size }) => size - 0.5}rem;
    line-height: ${({ height }) => height - 0.5}rem;
  }

  @media (max-width: 570px) {
    font-size: ${({ size }) => size - 0.8}rem;
    line-height: ${({ height }) => height - 0.8}rem;
    padding: 0;
  }

  @media (max-width: 410px) {
    font-size: ${({ size }) => size - 1}rem;
    line-height: ${({ height }) => height - 1}rem;
  }

  @media (max-width: 380px) {
    font-size: ${({ size }) => size - 1.5}rem;
    line-height: ${({ height }) => height - 1.9}rem;
  }
`;
export const FeatureTextSmall = styled(Text)`
  color: ${color.grey};
  padding: 0 2rem;
  margin-bottom: 10%;

  @media (max-width: 810px) {
    font-size: ${({ size }) => size - 0.3}rem;
    line-height: ${({ height }) => height - 0.3}rem;
    /* margin-bottom: 5rem; */
  }

  @media (max-width: 570px) {
    font-size: ${({ size }) => size - 0.5}rem;
    line-height: ${({ height }) => height - 0.5}rem;
    padding: 0;
  }

  @media (max-width: 410px) {
    font-size: ${({ size }) => size - 0.6}rem;
    line-height: ${({ height }) => height - 0.6}rem;
  }
`;
export const FeatTextBig = styled(SubText)`
  color: ${color.blue1};

  @media (max-width: 570px) {
    font-size: ${({ size }) => size - 0.3}rem;
    line-height: ${({ height }) => height - 0.3}rem;
  }

  @media (max-width: 410px) {
    font-size: ${({ size }) => size - 0.4}rem;
    line-height: ${({ height }) => height - 0.4}rem;
  }
`;
export const FeatTextSmall = styled(Text)`
  color: ${color.grey};

  @media (max-width: 570px) {
    font-size: ${({ size }) => size - 0.2}rem;
    line-height: ${({ height }) => height - 0.2}rem;
  }

  @media (max-width: 410px) {
    font-size: ${({ size }) => size - 0.3}rem;
    line-height: ${({ height }) => height - 0.3}rem;
  }
`;
export const Feature1TextBig = styled(HeaderText)`
  color: ${color.blue2};
  text-align: left;

  @media (max-width: 1020px) {
    font-size: ${({ size }) => size - 0.4}rem;
    line-height: ${({ height }) => height - 0.5}rem;
  }

  @media (max-width: 410px) {
    font-size: ${({ size }) => size - 0.6}rem;
    line-height: ${({ height }) => height - 0.7}rem;
  }

  @media (max-width: 280px) {
    text-align: center;
  }
`;
export const Feature1TextMid = styled(SubText)`
  color: ${color.blue2};
  text-align: left;

  @media (max-width: 1020px) {
    font-size: ${({ size }) => size - 0.2}rem;
    line-height: ${({ height }) => height - 0.4}rem;
  }

  @media (max-width: 410px) {
    font-size: ${({ size }) => size - 0.3}rem;
    line-height: ${({ height }) => height - 0.5}rem;
  }
`;
export const Feature1TextSmall = styled(Text)`
  color: rgba(4, 4, 21, 0.8);
  text-align: left;

  @media (max-width: 1020px) {
    font-size: ${({ size }) => size - 0.1}rem;
    line-height: ${({ height }) => height - 0.3}rem;
  }
`;
export const FeatFlex = styled(Flex)`
  background: radial-gradient(110% 20% at bottom, transparent 50%, #ededf6 51%);
  border-radius: 1rem;
  padding: 2rem 3rem 6rem 3rem;
  /* width: 100%; */
  position: relative;
  margin-top: 5rem;

  @media (max-width: 899px) {
    padding-bottom: 4rem;
  }

  @media (max-width: 599px) {
    padding-bottom: 2rem;
    background: none;
    background-color: #ededf6;
  }

  @media (max-width: 470px) {
    padding: 2rem 1rem;
  }
`;
export const FeatIcon = styled(Icon)`
  background-color: rgba(242, 146, 29, 0.15);
  opacity: 0.5;
  color: ${color.secondary};
  border-radius: 100%;
  padding: 1rem;
  font-size: 30px;

  @media (max-width: 410px) {
    font-size: 16px;
    padding: 0.7rem;
  }
`;
export const FeatImg = styled(Image)`
  position: absolute;
  bottom: 2rem;
  right: 2rem;

  @media (max-width: 1020px) {
    height: ${({ height }) => height - 3}rem;
    width: ${({ width }) => width - 4}rem;
    bottom: 1rem;
  }

  @media (max-width: 899px) {
    display: none;
  }
`;
export const FeatIconImage = styled(Image)`
  @media (max-width: 1120px) {
    height: ${({ height }) => height - 2}rem;
    width: ${({ width }) => width - 1.5}rem;
  }
`;

// about section
export const AboutContainer = styled(Flex)`
  flex-direction: column;
  background-image: url(${aboutimage});
  background-color: ${color.primary};
  background-size: cover;
  padding: 3rem;

  @media (max-width: 420px) {
    padding: 1rem;
  }
`;
export const AboutCardContainer = styled(Flex)`
  gap: 10px;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;
export const AboutCardContent = styled(Flex)`
  flex-direction: column;
  padding: 2.5rem;
  background: linear-gradient(180deg, #ffffff 0%, #fff9ee 100%);
  border-radius: 5px;

  @media (max-width: 950px) {
    width: 30rem;
  }

  @media (max-width: 650px) {
    width: auto;
  }

  @media (max-width: 500px) {
    padding: 1rem;
  }
`;
export const AboutTextBig = styled(HeaderText)`
  font-size: 2rem;
  line-height: 2rem;
  font-family: "Poppins";
  font-weight: 900;
  color: ${color.grey1};
  margin-top: 2rem;

  @media (max-width: 420px) {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }

  @media (max-width: 276px) {
    font-size: 1.2rem;
    line-height: 1.2rem;
  }
`;
export const AboutTextSmall = styled(Text)`
  font-size: 1rem;
  line-height: 1.5rem;
  font-family: "Poppins";
  color: ${color.grey1};
  margin-bottom: 3rem;

  @media (max-width: 420px) {
    font-size: 0.8rem;
    line-height: 1.3rem;
  }

  @media (max-width: 276px) {
    font-size: 0.75rem;
    line-height: 1.3rem;
  }
`;
export const AboutCardTextBig = styled(SubText)`
  font-size: 1.5rem;
  line-height: 1.8rem;
  font-family: "Poppins";
  font-weight: 900;
  color: ${color.secondary};

  @media (max-width: 420px) {
    font-size: 1.1rem;
    line-height: 1.3rem;
  }

  @media (max-width: 276px) {
    font-size: 1rem;
    line-height: 1.2rem;
  }
`;
export const AboutCardTextsmall = styled(Text)`
  font-size: 1rem;
  line-height: 1.3rem;
  font-family: "Poppins";
  color: ${({ color }) => color};

  @media (max-width: 420px) {
    font-size: 0.8rem;
    line-height: 1.1rem;
  }

  @media (max-width: 276px) {
    font-size: 0.75rem;
    line-height: 1rem;
  }
`;
export const AboutCardImg = styled.img`
  height: 5rem;
  width: 5.5rem;
`;
export const AboutImg = styled.img`
  height: 0.5625rem;
  width: 2.4rem;
  margin-top: 3rem;
  margin-bottom: 1rem;
`;

// download container
export const DownloadContainer = styled(Flex)`
  flex-direction: column;
  padding: 0 5% 4% 5%;
`;
export const DownloadLinkContainer = styled(Flex)`
  flex-wrap: wrap;
  column-gap: 6rem;

  @media (max-width: 949px) {
    column-gap: 5%;
  }

  @media (max-width: 670px) {
    flex-direction: column;
  }

  @media (max-width: 550px) {
    padding: 0 3% 4% 3%;
  }
`;
export const DownloadFlex = styled(Flex)`
  width: 23rem;
  gap: 1rem;
  justify-content: flex-start;

  @media (max-width: 949px) {
    width: 40%;
  }

  @media (max-width: 670px) {
    width: 60%;
  }

  @media (max-width: 550px) {
    width: 80%;
  }

  @media (max-width: 420px) {
    width: 90%;
  }
`;
export const DownloadBigText = styled(HeaderText)`
  font-size: 3rem;
  line-height: 4rem;
  color: ${color.blue1};

  @media (max-width: 949px) {
    font-size: 2.5rem;
    line-height: 3rem;
  }

  @media (max-width: 800px) {
    font-size: 2rem;
    line-height: 2.5rem;
  }

  @media (max-width: 420px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;
export const DownloadSmallText = styled(Text)`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 500;
  color: ${color.grey};

  @media (max-width: 949px) {
    font-size: 1.2rem;
    line-height: 1.7rem;
  }

  @media (max-width: 800px) {
    font-size: 0.95rem;
    line-height: 1.5rem;
  }

  @media (max-width: 420px) {
    font-size: 0.75rem;
    line-height: 1.2rem;
  }
`;
export const DownloadLinkText = styled(SubText)`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.3rem;
  color: ${color.blue1};
  text-align: left;

  @media (max-width: 949px) {
    font-size: 0.9rem;
    line-height: 1.2rem;
  }

  @media (max-width: 800px) {
    font-size: 0.75rem;
    line-height: 1.1rem;
  }

  @media (max-width: 420px) {
    font-size: 0.7rem;
    line-height: 1.1rem;
  }
`;
export const DownloadFooterText = styled(SubText)`
  font-family: "Poppins";
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.5rem;
  color: #ffffff;

  @media (max-width: 949px) {
    font-size: 1.7rem;
    line-height: 2.2rem;
  }

  @media (max-width: 800px) {
    font-size: 1.3rem;
    line-height: 2rem;
  }

  @media (max-width: 550px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  @media (max-width: 420px) {
    font-size: 0.9rem;
    line-height: 1.4rem;
  }

  @media (max-width: 340px) {
    font-size: 0.75rem;
    line-height: 1.2rem;
  }
`;
export const DownloadButton = styled(Button)`
  padding: 0.8rem 1.5rem;
  font-family: "Poppins";
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;

  @media (max-width: 800px) {
    font-size: 0.8rem;
    line-height: 1.2rem;
    padding: 0.7rem 1.3rem;
  }

  @media (max-width: 550px) {
    font-size: 0.6rem;
    line-height: 1rem;
    padding: 0.4rem 0.9rem;
  }
`;
export const DownloadFooterContainer = styled(Flex)`
  flex-direction: column;
  position: relative;
  background-image: url(${downloadimg});
  background-color: ${color.primary};
  background-size: cover;
  padding: 4% 10%;
  margin-top: 6%;
  border-radius: 8px;
`;
export const Bitcoin = styled(Image)`
  position: absolute;
  height: 6.375rem;
  width: 6.375rem;
  top: -20%;
  right: 5%;

  @media (max-width: 950px) {
    height: 4rem;
    width: 4rem;
    top: -15%;
  }

  @media (max-width: 550px) {
    width: 3rem;
    height: 3rem;
  }

  @media (max-width: 340px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
export const Naira = styled(Image)`
  position: absolute;
  height: 5rem;
  width: 5rem;
  top: 10%;
  right: -3.5%;

  @media (max-width: 950px) {
    height: 3.5rem;
    width: 3.5rem;
  }

  @media (max-width: 550px) {
    width: 2.5rem;
    height: 2.5rem;
  }

  @media (max-width: 340px) {
    width: 2rem;
    height: 2rem;
  }
`;
export const Eth = styled(Image)`
  position: absolute;
  bottom: -10%;
  left: 5%;
  height: 5rem;
  width: 5rem;

  @media (max-width: 950px) {
    height: 3.5rem;
    width: 3.5rem;
  }

  @media (max-width: 550px) {
    width: 2.5rem;
    height: 2.5rem;
  }

  @media (max-width: 340px) {
    width: 2rem;
    height: 2rem;
  }
`;
export const DownloadImg = styled(Image)`
  height: 45.25rem;
  width: 45.25rem;

  @media (max-width: 850px) {
    width: 100%;
    height: auto;
  }
`;

// footer section

export const FooterConataier = styled(Flex)`
  background-image: url(${footerimg});
  background-color: ${color.primary};
  background-size: cover;
  flex-direction: column;
  padding: 4% 5%;
  margin-top: 2rem;
`;
export const FooterContentHolder = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
column-gap: 2rem;

@media (max-width: 950px) {
  grid-template-columns: repeat(3, 1fr);
  column-gap: .5rem;
}

@media (max-width: 550px) {
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 210px) {
  grid-template-columns: 1fr;
}
`;
export const FooterContent = styled(Flex)`
  text-align: left;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const FooterBottomContent = styled(Flex)`
width: 100%;

@media (max-width: 950px) {
    flex-direction: column;
  }
`;
export const FooterBottomContentFlex = styled(Flex)`
gap: 1rem;

@media (max-width: 950px) {
  margin: 1rem 0;
  flex-wrap: wrap;

  }
`;
export const FooterHeader = styled(SubText)`
  font-family: "Poppins";
  font-weight: 700;
  font-size: 1rem;
  line-height: 2rem;
  color: #ffffff;
  margin-bottom: 0;
  text-align: left;

  @media (max-width: 420px) {
    font-size: .8rem;
  line-height: 1.7rem;
  }
`;
export const FooterText = styled(Text)`
  font-family: "Poppins";
  font-size: 1rem;
  line-height: 2rem;
  color: #ffffff;
  margin-bottom: 0;
  text-align: left;

  @media (max-width: 420px) {
    font-size: .8rem;
  line-height: 1.7rem;
  }
`;
export const FooterBottomText = styled(Text)`
  font-family: "Poppins";
  font-size: 1rem;
  line-height: 1.3rem;
  color: #ffffff;
  margin-bottom: 0;

  @media (max-width: 420px) {
    font-size: .8rem;
  line-height: 1rem;
  }
`;
export const FooterIcon = styled.div`
  border: 1px solid #ffffff;
  color: #ffffff;
  padding: .8rem .8rem .4rem .8rem;
  font-size: 20px;
  border-radius: 100%;
  margin: .5rem;

  @media (max-width: 420px) {
    padding: .6rem .6rem .3rem .6rem;
  font-size: 15px;
  }
`;
export const FooterImage = styled(Image)`
  width: 6.5rem;
  height: 2rem;
  color: #fff;
`;
export const HR = styled.div`
border: .5px solid #fff;
width: 100%;
margin: 2rem 0 1.5rem 0;
`
