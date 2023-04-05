import { useEffect, useState } from "react";
import Axios from "axios";
import {
  Flex,
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
} from "./StyledComponent";
import bitcoin from "../assets/btc.png";
import eth from "../assets/eth.png";
import { RiArrowDownSLine } from "react-icons/ri";
import { CgSync } from "react-icons/cg";
import "../styles/loadingspinner.css";

const BuySellCard = ({ coinMenu, coinMenu1,ref1,ref2, setCoinMenu, setCoinMenu1 }) => {
  const baseUrl =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20tether%2C%20litecoin%2C%20polkadot%2C%20solana%2C%20cardano%2C%20ripple%2C%20usd-coin%2C%20binancecoin&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  const [option, setOption] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [focus, setFocus] = useState(true);
  const [coinsData, setCoinsData] = useState([]);
  const [coinName, setCoinName] = useState("Ethereum");
  const [coinImage, setCoinImage] = useState(bitcoin);
  const [coinSymbol, setCoinSymbol] = useState("BTC");
  const [coinPrice, setCoinPrice] = useState("0");
  const [coinImage1, setCoinImage1] = useState(eth);
  const [coinSymbol1, setCoinSymbol1] = useState("ETH");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Axios.get(baseUrl).then((res) => {
      setCoinsData(res.data);
      setCoinName(res.data[1].name);
      setCoinPrice(res.data[1].current_price);
    });
    setLoading(false);
  }, []);

  return (
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
        <Flex style={{ position: "relative", width: "100%" }} flxDir="column">
          <HeroCoinHolder1 focus={focus ? false : true}>
            <MoveLeft>
              <HeroCoinInput
                defaultValue={0.1824}
                onFocus={() => setFocus(false)}
              />
            </MoveLeft>
            <MoveRight>
              <Flex gap={0.3}>
                <HeroCoinsImage src={coinImage} alt="btc" />
                <HeroCoinsText>{coinSymbol}</HeroCoinsText>
                <HeroCoinsIcon>
                  <div ref={ref1} onClick={() => setCoinMenu(!coinMenu)}>
                    <RiArrowDownSLine />
                  </div>
                  {coinMenu && (
                    <CoinContainer>
                      {loading ? (
                        <div className="spinner-container">
                          <div className="loading-spinner"></div>
                        </div>
                      ) : (
                        <>
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
                        </>
                      )}
                    </CoinContainer>
                  )}
                </HeroCoinsIcon>
              </Flex>
            </MoveRight>
          </HeroCoinHolder1>
          <HeroCoinsIconSync>
            <CgSync />
          </HeroCoinsIconSync>
          <HeroCoinHolder1 focus={focus}>
            <MoveLeft>
              <HeroCoinInput
                defaultValue={0.1824}
                autoFocus
                onFocus={() => setFocus(true)}
              />
            </MoveLeft>
            <MoveRight>
              <Flex gap={0.3}>
                <HeroCoinsImage src={coinImage1} alt={coinSymbol1} />
                <HeroCoinsText>{coinSymbol1}</HeroCoinsText>
                <HeroCoinsIcon>
                  <div ref={ref2} onClick={() => setCoinMenu1(!coinMenu1)}>
                    <RiArrowDownSLine />
                  </div>
                  {coinMenu1 && (
                    <CoinContainer>
                      {loading ? (
                        <div className="spinner-container">
                          <div className="loading-spinner"></div>
                        </div>
                      ) : (
                        <>
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
                        </>
                      )}
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
  );
};

export default BuySellCard;
