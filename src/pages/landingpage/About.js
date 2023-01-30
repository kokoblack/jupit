import React from "react";
import {
  AboutCardContainer,
  AboutContainer,
  AboutTextBig,
  AboutTextSmall,
  AboutImg,
} from "../../components/StyledComponent";
import { AboutCard } from "../../components/AboutCard";
import indi from "../../assets/indicator.png";

const About = () => {
  return (
    <div>
      <AboutContainer>
        <AboutTextBig>See what our users’ <br/> say about us</AboutTextBig>
        <AboutTextSmall>
          This testimonies and much more; join us so we can hear your
          testimonies too
        </AboutTextSmall>
        <AboutCardContainer>
          <AboutCard />
          <AboutCard />
        </AboutCardContainer>
        <AboutImg src={indi} alt="loading" />
      </AboutContainer>
    </div>
  );
};

export default About;
