import {useState, useEffect} from 'react'
import Axios from "axios";

const CryptoData = () => {

    const baseUrl =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20tether%2C%20litecoin%2C%20polkadot%2C%20solana%2C%20cardano%2C%20ripple%2C%20usd-coin%2C%20binancecoin&order=market_cap_desc&per_page=100&page=1&sparkline=false";
    const [coinsData, setCoinsData] = useState([]);

    useEffect(() => {
        Axios.get(baseUrl).then((res) => {
          setCoinsData(res.data);
        })
        });
      
  return coinsData
}

export default CryptoData