import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import Button from "./Button";
import colors from "../config/colors";
import { GotItGraphic } from "../assets/buttons/actions";
import KFHowToModalOneScreen from "../screens/instructions/KFHowToModalOneScreen";
import KFHowToModalTwoScreen from "../screens/instructions/KFHowToModalTwoScreen";
import KFHowToModalThreeScreen from "../screens/instructions/KFHowToModalThreeScreen";
import Text from "./Text";

function InstructionsModal({ onConfirm }) {
  const howToScreens = [
    <KFHowToModalOneScreen
      onNextPress={() => setCurrentScreen(howToScreens[1])}
    />,
    <KFHowToModalTwoScreen
      onPreviousPress={() => setCurrentScreen(howToScreens[0])}
      onNextPress={() => setCurrentScreen(howToScreens[2])}
    />,
    <KFHowToModalThreeScreen
      onPreviousPress={() => setCurrentScreen(howToScreens[1])}
    />,
  ];

  const [currentScreen, setCurrentScreen] = useState(howToScreens[0]);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>How to use this app:</Text>
      </View>
      <View style={styles.bodyContainer}>{currentScreen}</View>
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <Button Graphic={GotItGraphic} onPress={onConfirm} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 0.83,
    padding: 10,
  },
  button: {
    height: "60%",
    width: "50%",
  },
  buttonsContainer: {
    alignItems: "center",
    flex: 0.11,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: colors.dark,
    borderColor: colors.black,
    borderRadius: 20,
    height: "165%",
    overflow: "hidden",
    transform: [{ rotate: "-90deg" }],
    width: "45%",
  },
  title: {
    fontFamily: "default",
    fontSize: 40,
    textAlign: "center",
  },
  titleContainer: {
    alignItems: "center",
    backgroundColor: "#0005",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    borderBottomColor: colors.black,
    borderEndColor: colors.black,
    borderStartColor: colors.light,
    borderTopColor: colors.light,
    borderWidth: 2,
    flex: 0.06,
    flexDirection: "row",
    padding: 4,
  },
});

export default InstructionsModal;
