import React from "react";
import { View, StyleSheet } from "react-native";

import Screen from "../../components/Screen";
import Text from "../../components/Text";

const background = require("../../assets/backgrounds/kf_background_xxxhdpi.png");

function KFBannerScreen(props) {
  return (
    <Screen style={styles.screenContainer} background={background}>
      <View style={styles.buttonContainer}>
        <Text>buttonContainer</Text>
      </View>
      <View style={styles.nameContainer}>
        <Text>nameContainer</Text>
      </View>
      <View style={styles.healthContainer}>
        <Text>healthContainer</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    // backgroundColor: "crimson",
    flex: 0.25,
  },
  healthContainer: {
    alignItems: "center",
    // backgroundColor: "limegreen",
    flex: 0.35,
  },
  nameContainer: {
    alignItems: "center",
    // backgroundColor: "skyblue",
    flex: 0.4,
  },
  screenContainer: {
    // backgroundColor: "gold",
    flex: 1,
  },
});

export default KFBannerScreen;
