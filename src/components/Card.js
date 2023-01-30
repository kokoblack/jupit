import React from "react";
import {
  CardContainer,
  CardTextBig,
  CardTextSmall,
  CardTextfooter,
  Circle,
  Flex,
  Icon1,
  Icon2
} from "./StyledComponent";
import { BsArrowRightShort, BsArrowLeftRight } from "react-icons/bs";
import {RiArrowLeftRightLine} from "react-icons/ri"

export const size = 30

const Card = ({ text }) => {
  return (
    <div>
      <CardContainer>
        <Circle className='arrow'>
        <Icon1 className='arrow1'><RiArrowLeftRightLine/></Icon1>
        </Circle>
        <CardTextBig className="white" family="Poppins" weight={700} size={1.5} height={2}>
          {text}
        </CardTextBig>
        <CardTextSmall className="white" family="Poppins" weight={400} size={0.9} height={1.375}>
          Invest in crypto anytime, anywhere with our safe, secure, and easy to
          use online platform
        </CardTextSmall>
        <Flex gap={1}>
          <CardTextfooter className="white" family="Poppins" weight={400} size={0.9} height={1.375}>
            Get Started
          </CardTextfooter>
          <Icon2 className='arrow2'><BsArrowRightShort/></Icon2>
        </Flex>
      </CardContainer>
    </div>
  );
};

export default Card;
