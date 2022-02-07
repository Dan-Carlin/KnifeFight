import React from "react";
import { SafeAreaView, StyleSheet, ImageBackground } from "react-native";
import Constants from "expo-constants";

function Screen({ children, background, style }) {
  return (
    <ImageBackground
      style={styles.background}
      source={background}
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
