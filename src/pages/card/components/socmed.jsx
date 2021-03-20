import { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Hoverable } from "react-native-web-hover";

function Socmed(props) {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Hoverable style={{ width: props.width }}>
        {({ hovered }) => (
          <TouchableOpacity
            onPress={props.onPress}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: props.bgColor,
              padding: 6,
              width: "100%",
              borderRadius: 12,
              borderWidth: 2,
              borderColor: props.borderColor || "#eee",
              opacity: (() => (hovered ? 0.7 : 1))(),
            }}
          >
            <Image
              source={props.icon}
              style={{
                width: 30,
                height: 30,
                marginRight: 8,
              }}
            />
            <Text
              style={{
                color: "#fff",
                fontSize: 15.5,
                fontWeight: "600",
              }}
            >
              {props.label}
            </Text>
          </TouchableOpacity>
        )}
      </Hoverable>
    </View>
  );
}

export default Socmed;
