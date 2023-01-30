import React from "react";
import FeaturesCard from "../../components/FeaturesCard";
import { IoIosFlash } from "react-icons/io";
import { GiTwoCoins, GiFallingStar } from "react-icons/gi";
import { BsWallet2, BsCheckCircleFill } from "react-icons/bs";
import phone from '../../assets/phone2.png'
import {
  FeatContainer,
  Flex,
  FeatFlex,
  Feature1TextBig,
  Feature1TextMid,
  Feature1TextSmall,
  FeatureTextBig,
  FeatureTextSmall,
  Feat,
  FeatImg,
  FlexBasis,
} from "../../components/StyledComponent";

const Features = () => {
  return (
    <div>
      <Feat>
        <FeatureTextBig size={3} height={4}>
          Best services that works for you
        </FeatureTextBig>
        <FeatureTextSmall weight={500} size={1.3} height={1.7}>
          We provide a wide range of services to our users. Take a look at few
          of the solutions to expect from us.
        </FeatureTextSmall>
        <FeatContainer>
          <FeaturesCard
            header="Fast Transaction"
            text="Fast and easy-to-use trading services in one integrated platform."
          >
            <IoIosFlash />
          </FeaturesCard>
          <FeaturesCard
            header="Secure Wallet"
            text="You can rest easy knowing that your asset is safe with us anytime."
          >
            <BsWallet2 />
          </FeaturesCard>
          <FeaturesCard
            header="Fast Transaction"
            text="We want anyone & everyone in need for cryptocurrency gets prompt and clear access to their transactions."
          >
            <GiTwoCoins />
          </FeaturesCard>
          <FeaturesCard
            header="Customer First"
            text="We pride ourselves on providing excellent customer service."
          >
            <GiFallingStar />
          </FeaturesCard>
        </FeatContainer>
        <FeatFlex>
          <FlexBasis feat basis={50}>
          <Flex
          alnItm='flex-start'
          flxDir='column'>
            <Feature1TextBig weight={600} size={2} height={2}>
              We make crypto easy
            </Feature1TextBig>
            <Feature1TextSmall size={0.8} height={1.3}>
              We make sure that every cryptocurrency payment and transaction are
              processed seamlessly and quickly so that you can enjoy the result
              without stress
            </Feature1TextSmall>
            <Flex
            gap={.8}
            >
              <BsCheckCircleFill size={15} color='#F2921D'/>
              <Feature1TextMid weight={600} size={1} height={1.3}>Instant Transaction</Feature1TextMid>
            </Flex>
            <Flex gap={.8}> 
              <BsCheckCircleFill size={15} color='#F2921D'/>
              <Feature1TextMid weight={600} size={1} height={1.3}>Low Fee</Feature1TextMid>
            </Flex>
            <Flex gap={.8}>
              <BsCheckCircleFill size={15} color='#F2921D'/>
              <Feature1TextMid weight={600} size={1} height={1.3}>Seamless Experience</Feature1TextMid>
            </Flex>
            <Flex gap={.8}>
              <BsCheckCircleFill size={15} color='#F2921D'/>
              <Feature1TextMid weight={600} size={1} height={1.3}>Real Time Value</Feature1TextMid>
            </Flex>
          </Flex>
          </FlexBasis>
          <FlexBasis basis={50}>
          <FeatImg src={phone} alt='phone' width={44.5} height={22.5}/>
          </FlexBasis>
        </FeatFlex>
      </Feat>
    </div>
  );
};

export default Features;
