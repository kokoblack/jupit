import React from "react";
import { CardHolder, CardFlexibleWrapper, CardImage } from "../components/StyledComponent";
import Card from "../components/Card";
import star from "../assets/star-img.png"

const Cards = () => {
  return (
    <div>
      <CardHolder>
        <Card text="Fast Transaction" />
        <Card text="Secure Wallet" />
        <Card text="Built for You" />
        <Card text="Customer First" />
        <CardFlexibleWrapper >
          <CardImage src={star} alt="star" width={2} height={2}/>
        </CardFlexibleWrapper> 
      </CardHolder>
    </div>
  );
};

export default Cards;
