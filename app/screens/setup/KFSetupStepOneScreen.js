import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../../config/colors";
import { ExitGraphic, NextGraphic } from "../../assets/buttons/navigation";
import GenerateNameButton from "../../components/GenerateNameButton";
import NavButton from "../../components/NavButton";
import Screen from "../../components/Screen";
import Text from "../../components/Text";
import TextInput from "../../components/TextInput";

const background = require("../../assets/backgrounds/kf_background_xxxhdpi.png");

function KFSetupStepOneScreen(props) {
  return (
    <Screen style={styles.screenContainer} background={background}>
      <View style={styles.topContainer} />
      <View style={styles.bodyContainer} behavior="padding">
        <Text style={styles.title}>First...</Text>
        <Text style={styles.text}>
          Let's come up with a name for your gang.
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Name your gang"
          maxLength={22}
        />
        <View style={styles.nameButton}>
          <GenerateNameButton style={styles.button} />
        </View>
        <View style={styles.navContainer}>
          <NavButton
            style={styles.navButton}
            Graphic={ExitGraphic}
            onPress={() => console.log("Exit button pressed.")}
          />
          <NavButton
            style={styles.navButton}
            Graphic={NextGraphic}
            onPress={() => console.log("Next button pressed.")}
          />
        </View>
      </View>
      <View style={styles.bottomContainer} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    alignItems: "center",
    flex: 0.4,
    justifyContent: "center",
    paddingHorizontal: 25,
  },
  bottomContainer: {
    alignItems: "center",
    flex: 0.3,
  },
  nameButton: {
    height: 40,
    marginBottom: 15,
    width: "85%",
  },
  navButton: {
    height: "100%",
    width: "100%",
  },
  navContainer: {
    flexDirection: "row",
    height: 90,
  },
  screenContainer: {
    flex: 1,
  },
  text: {
    textAlign: "center",
  },
  textInput: {
    color: colors.white,
    fontSize: 20,
    marginHorizontal: 20,
    textAlign: "center",
  },
  title: {
    fontFamily: "default",
    fontSize: 50,
    textAlign: "center",
  },
  topContainer: {
    alignItems: "center",
    flex: 0.3,
  },
});

export default KFSetupStepOneScreen;
