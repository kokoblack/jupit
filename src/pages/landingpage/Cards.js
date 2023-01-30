import React from "react";
import { CardHolder } from "../../components/StyledComponent";
import Card from "../../components/Card";
// import star from "../../assets/star-img.png"

const Cards = () => {
  return (
    <div>
      <CardHolder>
        <Card text="Fast Transaction" />
        <Card text="Secure Wallet" />
        <Card text="Built for You" />
        <Card text="Customer First" />
        {/* <FlexibleWrapper >
          <CardImage src={star} alt="star" width={3.5} height={2.65}/>
        </FlexibleWrapper> */}
      </CardHolder>
    </div>
  );
};

export default Cards;
