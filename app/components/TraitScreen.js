import React from "react";
import { SafeAreaView, StyleSheet, ImageBackground } from "react-native";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";

import gangColors from "../data/gangColors";
import gangTraits from "../data/gangTraits";
import { traits } from "../assets/traits/TraitArray";

function Screen({
  children,
  background,
  Color = gangColors.NONE,
  Trait = gangTraits.NONE,
  style,
}) {
  const TraitGraphic = traits[Trait.svgId];

  return (
    <ImageBackground
      style={styles.background}
      source={background}
      resizeMode="cover"
    >
      <LinearGradient
        style={styles.gradient}
        colors={["#0000", Color.normal]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 0, y: 1 }}
      />
      <TraitGraphic style={styles.traitGraphic} />
      <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    transform: [{ rotate: "180deg" }],
  },
  gradient: {
    height: "100%",
    opacity: 0.4,
    position: "absolute",
    width: "100%",
  },
  screen: {
    paddingBottom: Constants.statusBarHeight / 2,
  },
  traitGraphic: {
    height: "100%",
    opacity: 0.7,
    position: "absolute",
    width: "100%",
  },
});

export default Screen;
