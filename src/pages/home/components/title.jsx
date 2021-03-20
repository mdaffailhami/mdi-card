import { View, Text } from "react-native";

function Title() {
  return (
    <View style={{ textAlign: "center" }}>
      <Text style={{ fontSize: "2rem", fontWeight: "bold", fontFamily: "arial" }}>MDI Card</Text>
      <Text style={{ fontSize: "1.5rem", fontFamily: "arial" }}>
        Buat kartu nama online dan tautkan sosial media anda
      </Text>
    </View>
  );
}

export default Title;
