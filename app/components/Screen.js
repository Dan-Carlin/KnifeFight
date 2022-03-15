import React from "react";
import { SafeAreaView, StyleSheet, ImageBackground } from "react-native";
import Constants from "expo-constants";

function Screen({ children, background, isPortrait, style }) {
  const portraitBG = require("../assets/backgrounds/kf_background_xxxhdpi.png");
  const landscapeBG = require("../assets/backgrounds/kf_background_land_xxxhdpi.png");

  const getBackground = isPortrait ? portraitBG : landscapeBG;

  console.log(isPortrait);

  return (
    <ImageBackground
      style={styles.background}
      source={getBackground}
      resizeMode="cover"
    >
      <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});

export default Screen;
