import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";
import Text from "../components/Text";

import gangColors from "../data/gangColors";
import gangTraits from "../data/gangTraits";
import strings from "../config/strings";
import { traits } from "../assets/traits/TraitArray";

function CounterContainer({
  width,
  Trait = gangTraits.NONE,
  hpValue,
  Color = gangColors.NONE,
  testID,
}) {
  const TraitGraphic = traits[Trait.svgId];

  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: Color.dark,
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
      <TraitGraphic style={styles.graphic} />
      <Text
        style={{
          bottom: -20,
          color: Color.normal,
          fontFamily: "default",
          fontSize: 100,
          textAlign: "center",
        }}
      >
        {strings.app_hp_label}
      </Text>
      <Text testID={testID} style={styles.number}>
        {hpValue}
      </Text>
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
