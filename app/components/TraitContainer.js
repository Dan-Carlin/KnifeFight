import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";

import gangColors from "../data/gangColors";
import gangTraits from "../data/gangTraits";
import { traits } from "../assets/traits/TraitArray";

function TraitContainer({
  child,
  width = "100%",
  Trait = gangTraits.NONE,
  Color = gangColors.NONE,
}) {
  const TraitGraphic = traits[Trait.svgId];

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.border,
          {
            backgroundColor: Color.dark,
            borderTopEndRadius: width / 2,
            borderTopStartRadius: width / 2,
            width: width,
          },
        ]}
      >
        <TraitGraphic style={styles.graphic} />
      </View>
      {child}
    </View>
  );
}

const styles = StyleSheet.create({
  border: {
    alignSelf: "center",
    alignItems: "center",
    borderEndWidth: 6,
    borderStartWidth: 6,
    borderTopWidth: 6,
    borderColor: colors.light,
    height: "100%",
    justifyContent: "center",
    padding: 20,
    position: "absolute",
  },
  container: {
    height: "100%",
    width: "100%",
  },
  graphic: {
    bottom: 8,
    opacity: 0.7,
    position: "absolute",
  },
});

export default TraitContainer;
