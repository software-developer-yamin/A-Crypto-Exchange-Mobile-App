import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import PortfolioCoin from "../../components/PortfolioCoin";
import styles from "./styles";

const image = require("../../assets/images/Saly-10.png");

const data = [
  {
    id: 1,
    name: "Bitcoin",
    image: "https://bitcoin.org/img/icons/opengraph.png?1648897668",
    symbol: "BTC",
    amount: 70.01,
    valueUSD: 34.01,
  },
  {
    id: 2,
    name: "Ethereum",
    image: "https://bitcoin.org/img/icons/opengraph.png?1648897668",
    symbol: "ETH",
    amount: 70.01,
    valueUSD: 34.01,
  },
  {
    id: 3,
    name: "Litecoin",
    image: "https://bitcoin.org/img/icons/opengraph.png?1648897668",
    symbol: "LTC",
    amount: 70.01,
    valueUSD: 34.01,
  },
  {
    id: 4,
    name: "Bitcoin Cash",
    image: "https://bitcoin.org/img/icons/opengraph.png?1648897668",
    symbol: "BCH",
    amount: 70.01,
    valueUSD: 34.01,
  },
  {
    id: 5,
    name: "Ripple",
    image: "https://bitcoin.org/img/icons/opengraph.png?1648897668",
    symbol: "XRP",
    amount: 70.01,
    valueUSD: 34.01,
  },
  {
    id: 6,
    name: "Stellar",
    image: "https://bitcoin.org/img/icons/opengraph.png?1648897668",
    symbol: "XLM",
    amount: 70.01,
    valueUSD: 34.01,
  },
];

const PortfolioScreen = () => {
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={image} />
      <View style={styles.balanceContainer}>
        <Text style={styles.label}>Portfolio balance</Text>
        <Text style={styles.balance}>$90.70</Text>
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => <PortfolioCoin portfolioCoin={item} />}
      />
    </View>
  );
};

export default PortfolioScreen;
