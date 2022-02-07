import React from "react";
import { View, StyleSheet } from "react-native";

import Screen from "../../components/Screen";
import Text from "../../components/Text";

const background = require("../../assets/backgrounds/kf_background_xxxhdpi.png");

function KFToolsScreen(props) {
  return (
    <Screen style={styles.screenContainer} background={background}>
      <View style={styles.leftContainer}>
        <Text>leftContainer</Text>
      </View>
      <View style={styles.centerContainer}>
        <View style={styles.nameContainer}>
          <Text>nameContainer</Text>
        </View>
        <View style={styles.counterContainer}>
          <Text>counterContainer</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Text>rightContainer</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  centerContainer: {
    alignItems: "center",
    // backgroundColor: "skyblue",
    flex: 0.6,
  },
  counterContainer: {
    alignItems: "center",
    // backgroundColor: "pink",
    flex: 0.6,
    width: "100%",
  },
  leftContainer: {
    alignItems: "center",
    // backgroundColor: "limegreen",
    flex: 0.2,
  },
  nameContainer: {
    alignItems: "center",
    // backgroundColor: "orange",
    flex: 0.4,
    width: "100%",
  },
  rightContainer: {
    alignItems: "center",
    // backgroundColor: "crimson",
    flex: 0.2,
  },
  screenContainer: {
    // backgroundColor: "gold",
    flex: 1,
    flexDirection: "row",
  },
});

export default KFToolsScreen;
