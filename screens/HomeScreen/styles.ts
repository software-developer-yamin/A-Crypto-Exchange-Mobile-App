import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
     root: {
          padding: 20,
          alignItems: 'center',
          flex: 1,
     },
     image: {
          height: "40%",
          aspectRatio: 1,
          backgroundColor: "white",
          borderRadius: 5,
     },
     header1: {
          fontSize: 24,
          fontWeight: "bold",
          marginTop: 50,
          marginBottom: 15,
     },
     header2: {
          textAlign: "center",
          fontSize: 20,
          color: "#707070",
     },
});

export default styles;