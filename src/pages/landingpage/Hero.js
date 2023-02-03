import { React, useState, useEffect } from "react";
import Axios from "axios";
import {
  Flex,
  HeroText,
  HeroTexTSmall,
  Button,
  ManImage,
  SuccsessImage,
  HeroFlexibleWrapper,
  FlexBasis,
  Herro,
  HeroCoinButton,
  HeroCoinHolder,
  HeroCoinInput,
  HeroCoinsText,
  HeroCoinsIcon,
  HeroCoinsIconSync,
  HeroCoinsDiverder,
  HeroCoinsImage,
  HeroCryptoFlexibleWrapper,
  MoveLeft,
  MoveRight,
  HeroCoinHolder1,
  HeroCoinOptionButton,
  CoinContainer,
  CoinsButton,
} from "../../components/StyledComponent";
import man from "../../assets/man-img.png";
import frame1 from "../../assets/Frame61.png";
import frame2 from "../../assets/Frame62.png";
import bitcoin from "../../assets/btc.png";
import eth from "../../assets/eth.png";
import { RiArrowDownSLine } from "react-icons/ri";
import { CgSync } from "react-icons/cg";

const Hero = () => {
  const zIndex = {
    zIndex: 6,
  };

  const [option, setOption] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [focus, setFocus] = useState(true)
  const [coinMenu, setCoinMenu] = useState(false);
  const [coinMenu1, setCoinMenu1] = useState(false);
  const [coinName, setCoinName] = useState('Ethereum');
  const [coinImage, setCoinImage] = useState(bitcoin);
  const [coinSymbol, setCoinSymbol] = useState('BTC');
  const [coinPrice, setCoinPrice] = useState('3,113.21');
  const [coinImage1, setCoinImage1] = useState(eth);
  const [coinSymbol1, setCoinSymbol1] = useState('ETH');


  const [coinsData, setCoinsData] = useState([]);

  const baseUrl =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20tether%2C%20litecoin%2C%20polkadot%2C%20solana%2C%20cardano%2C%20ripple%2C%20usd-coin%2C%20binancecoin&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  useEffect(() => {
    Axios.get(baseUrl)
      .then((res) => {
        setCoinsData(res.data);
      })
  }, []);

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
          <Button hero style={{ marginTop: "3rem" }} radius={10}>
            Get Started
          </Button>
        </FlexBasis>

        <HeroCryptoFlexibleWrapper>
          <HeroCoinHolder>
            <Flex gap={4}>
              <HeroCoinOptionButton
                onClick={() => {
                  setOption("BUY");
                  setIsActive(false);
                }}
                active={isActive ? false : true}
              >
                Buy
              </HeroCoinOptionButton>
              <HeroCoinsDiverder>|</HeroCoinsDiverder>
              <HeroCoinOptionButton
                onClick={() => {
                  setOption("SELL");
                  setIsActive(true);
                }}
                active={isActive}
              >
                Sell
              </HeroCoinOptionButton>
            </Flex>
            <HeroCoinsText weight={400}>{`${coinName} Price`}</HeroCoinsText>
            <HeroCoinsText color="#1f1f1f">{`$${coinPrice}`}</HeroCoinsText>
            <Flex style={{ position: "relative", width: '100%' }} flxDir="column">
              <HeroCoinHolder1 focus = {focus ? false : true}>
                <MoveLeft>
                  <HeroCoinInput defaultValue={0.1824} onFocus={() => setFocus(false)}/>
                </MoveLeft>
                <MoveRight>
                  <Flex gap={0.3}>
                    <HeroCoinsImage src={coinImage} alt="btc" />
                    <HeroCoinsText>{coinSymbol}</HeroCoinsText>
                    <HeroCoinsIcon>
                      <RiArrowDownSLine
                        onClick={() => setCoinMenu(!coinMenu)}
                      />
                      {coinMenu && (
                        <CoinContainer>
                          {coinsData.map((data) => {
                            return (
                              <CoinsButton 
                              key={data.id}
                              onClick={() => {
                                setCoinName(data.name);
                                setCoinPrice(data.current_price);
                                setCoinImage(data.image);
                                setCoinSymbol(data.symbol.toUpperCase());
                              }}
                              >
                                {data.name}
                              </CoinsButton>
                            );
                          })}
                        </CoinContainer>
                      )}
                    </HeroCoinsIcon>
                  </Flex>
                </MoveRight>
              </HeroCoinHolder1>
              <HeroCoinsIconSync>
                <CgSync />
              </HeroCoinsIconSync>
              <HeroCoinHolder1 focus = {focus}>
                <MoveLeft>
                  <HeroCoinInput defaultValue={0.1824} autoFocus onFocus={() => setFocus(true)}/>
                </MoveLeft>
                <MoveRight>
                  <Flex gap={0.3}>
                    <HeroCoinsImage src={coinImage1} alt={coinSymbol1} />
                    <HeroCoinsText>{coinSymbol1}</HeroCoinsText>
                    <HeroCoinsIcon>
                      <RiArrowDownSLine
                        onClick={() => setCoinMenu1(!coinMenu1)}
                      />
                      {coinMenu1 && (
                        <CoinContainer>
                          {coinsData.map((data) => {
                            return (
                              <CoinsButton
                                key={data.id}
                                onClick={() => {
                                  setCoinName(data.name);
                                  setCoinPrice(data.current_price);
                                  setCoinImage1(data.image);
                                  setCoinSymbol1(data.symbol.toUpperCase());
                                }}
                              >
                                {data.name}
                              </CoinsButton>
                            );
                          })}
                        </CoinContainer>
                      )}
                    </HeroCoinsIcon>
                  </Flex>
                </MoveRight>
              </HeroCoinHolder1>
              <HeroCoinButton>{option ? option : "SELL"}</HeroCoinButton>
            </Flex>
          </HeroCoinHolder>
        </HeroCryptoFlexibleWrapper>

        <FlexBasis basis={30} style={{ position: "relative" }}>
          <ManImage src={man} alt="man" height={38.6} width={31.8125} />
          <Flex flxDir="column">
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
