import React from "react";
import { View, StyleSheet, Image } from "react-native";

import FGLogo from "../../assets/logos/fg_logo.svg";
import Gradient from "../../assets/backgrounds/split_gradient_green.svg";
import KFLogo from "../../assets/logos/kf_logo.svg";
import routes from "../../navigation/routes";
import Screen from "../../components/Screen";
import StartGameButton from "../../components/StartGameButton";
import Text from "../../components/Text";

const background = require("../../assets/backgrounds/kf_background_xxxhdpi.png");
const sgLogo = require("../../assets/logos/sg_logo_light.png");

function KFHomeScreen({ navigation }) {
  return (
    <Screen style={styles.screenContainer} background={background}>
      <View style={styles.logoContainer}>
        <KFLogo style={styles.logo} />
      </View>
      <View style={styles.buttonContainer}>
        <Gradient style={styles.gradient} />
        <StartGameButton
          style={styles.button}
          onPress={() => navigation.navigate(routes.SETUP_STEP_ONE)}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomContents}>
          <Text style={styles.disclaimer}>
            <Text style={styles.disclaimerBold}>DISCLAIMER:</Text> This is a
            companion app for the{" "}
            <Text style={styles.disclaimerItalic}>Knife Fight</Text> board game,
            not a standalone game.
          </Text>
          <View style={styles.companyLogos}>
            <Image style={styles.sgLogo} source={sgLogo} />
            <FGLogo style={styles.fgLogo} />
          </View>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    alignItems: "center",
    flex: 0.22,
  },
  bottomContents: {
    height: "100%",
    width: "55%",
  },
  button: {
    height: "100%",
    width: "100%",
  },
  buttonContainer: {
    alignItems: "center",
    flex: 0.18,
    justifyContent: "center",
  },
  companyLogos: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },
  disclaimer: {
    fontSize: 12,
    marginTop: 15,
    textAlign: "center",
  },
  disclaimerBold: {
    fontSize: 12,
    fontWeight: "bold",
  },
  disclaimerItalic: {
    fontSize: 12,
    fontStyle: "italic",
  },
  fgLogo: {
    height: "100%",
    opacity: 0.5,
    width: "30%",
  },
  gradient: {
    position: "absolute",
  },
  logo: {
    height: "48.2%",
    marginTop: 10,
    width: "85%",
  },
  logoContainer: {
    alignItems: "center",
    flex: 0.6,
  },
  screenContainer: {
    flex: 1,
  },
  sgLogo: {
    flex: 1,
    height: "100%",
    marginEnd: 30,
    opacity: 0.5,
    resizeMode: "contain",
  },
});

export default KFHomeScreen;
