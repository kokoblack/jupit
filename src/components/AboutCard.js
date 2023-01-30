import React from "react";
import {
  AboutCardContent,
  AboutCardTextBig,
  AboutCardTextsmall,
  AboutCardImg,
  color,
} from "../components/StyledComponent";
import avatar from "../assets/avatar2.png";

export const AboutCard = () => {
  return (
    <div>
      <AboutCardContent>
        <AboutCardImg src={avatar} alt="avatar" />
        <AboutCardTextsmall color={color.primary}>Eji Jupit</AboutCardTextsmall>
        <AboutCardTextBig>All your crypto in one place</AboutCardTextBig>
        <AboutCardTextsmall color={color.black1}>
          We make sure that every cryptocurrency payment and transaction are
          processed seamlessly and quickly so that you could enjoy the result
          without any stress.
        </AboutCardTextsmall>
      </AboutCardContent>
    </div>
  );
};
