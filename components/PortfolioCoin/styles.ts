import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "85%",
    height: 50,
    marginVertical: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  symbol: {
    color: "#6d6d6d",
  },
  value: {
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 5,
  },
});

export default styles;
