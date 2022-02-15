import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";
import Text from "../components/Text";

import strings from "../config/strings";

function CounterContainer({ width, Graphic, hpValue, gangColor }) {
  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: "black",
        borderColor: colors.light,
        borderEndWidth: 6,
        borderStartWidth: 6,
        borderTopEndRadius: width / 2,
        borderTopStartRadius: width / 2,
        borderTopWidth: 6,
        height: "100%",
        justifyContent: "center",
        padding: 20,
        width: width,
      }}
    >
      <Graphic style={styles.graphic} />
      <Text
        style={{
          bottom: -20,
          color: gangColor,
          fontFamily: "default",
          fontSize: 100,
          textAlign: "center",
        }}
      >
        {strings.app_hp_label}
      </Text>
      <Text style={styles.number}>{hpValue}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  graphic: {
    bottom: 8,
    opacity: 0.7,
    position: "absolute",
  },
  number: {
    bottom: 5,
    fontSize: 100,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CounterContainer;
