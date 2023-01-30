import React from "react";
import {
  Flex,
  HeroText,
  HeroTexTSmall,
  Button,
  ManImage,
  SuccsessImage,
  BuyImage,
  HeroFlexibleWrapper,
  FlexBasis,
  Herro
} from "../../components/StyledComponent";
import man from "../../assets/man-img.png";
import frame1 from "../../assets/Frame61.png";
import frame2 from "../../assets/Frame62.png";
import quickbuy from "../../assets/Quickbuy.png";

const Hero = () => {
  const zIndex = {
    zIndex: 6,
  };

  return (
    <div>
      <Herro>
        <FlexBasis center basis={70}>
          <HeroText
            family="Poppins"
            weight={600}
            size={3}
            height={4.9}
            align="left"
          >
            Make easy digital assets transactions anywhere, anytime with Jupit.
          </HeroText>
          <HeroTexTSmall
            family="Poppins"
            weight={500}
            size={1.1}
            height={1.75}
            align="left"
          >
            A place for everyone who wants to simply buy and sell digital
            assets, it just takes 120 seconds!
          </HeroTexTSmall>
          <Button hero style={{marginTop: "3rem"}} radius={10}>Get Started</Button>
        </FlexBasis>
        <FlexBasis basis={30} style={{position: 'relative'}}>
          <ManImage src={man} alt="man" height={38.6} width={31.8125} />
          <Flex flxDir="column">
            <HeroFlexibleWrapper buy top={6} left={-5}>
              <BuyImage
                src={quickbuy}
                alt="buy"
                height={13.75}
                width={16.3125}
                style={zIndex}
              />
            </HeroFlexibleWrapper>
            <HeroFlexibleWrapper avatar top={34} left={5}>
              <SuccsessImage
                src={frame1}
                alt="success"
                height={4.6875}
                width={15.6875}
                style={zIndex}
              />
            </HeroFlexibleWrapper>
            <HeroFlexibleWrapper top={24} left={13}>
              <SuccsessImage
                src={frame2}
                alt="success"
                height={4.6875}
                width={15.6875}
                style={zIndex}
              />
            </HeroFlexibleWrapper>
          </Flex>
        </FlexBasis>
      </Herro>
    </div>
  );
};

export default Hero;
