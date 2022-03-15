/*
KFHomeLandscapeLayout - Landscape layout for the home screen of the app.
*/

// External libraries
import React from "react";
import { View, StyleSheet } from "react-native";

// Assets
import { FGLogo, KFLogo, SGLogo } from "../../../assets/logos";
import { SettingsGraphic } from "../../../assets/buttons/navigation";

// Components
import OpacityButton from "../../../components/OpacityButton";
import Screen from "../../../components/Screen";
import StartGameButton from "../../../components/StartGameButton";
import Text from "../../../components/Text";

// Resources
import defaultStyles from "../../../config/styles";
import sounds from "../../../assets/sounds/sounds";
import strings from "../../../config/strings";
import styles from "./KFHomeStyles";

function KFHomeLandscapeLayout({ actions }) {
  return (
    <Screen style={defaultStyles.screenContainer} isPortrait={false}>
      <View style={[styles.logoContainer, landscapeStyles.logoContainer]}>
        <KFLogo style={landscapeStyles.logo} />
        <View style={[styles.settingsButton, landscapeStyles.settingsButton]}>
          <OpacityButton
            Graphic={SettingsGraphic}
            sound={sounds.NEXT_CONFIRM}
            onPress={() => actions.settingsButton()}
          />
        </View>
      </View>
      <View style={[styles.buttonContainer, landscapeStyles.buttonContainer]}>
        <View style={styles.button}>
          <StartGameButton
            sound={sounds.START_END_TURN}
            onPress={() => actions.startButton()}
          />
        </View>
      </View>
      <View style={[styles.bottomContainer, landscapeStyles.bottomContainer]}>
        <SGLogo style={[styles.smallLogo, landscapeStyles.smallLogo]} />
        <Text style={[styles.disclaimer, landscapeStyles.disclaimer]}>
          <Text style={styles.disclaimerBold}>
            {strings.home_disclaimer_title}
          </Text>
          <Text style={styles.disclaimer}>
            {strings.home_disclaimer_text_a}
          </Text>
          <Text style={styles.disclaimerItalic}>{strings.app_name}</Text>
          <Text style={styles.disclaimer}>
            {strings.home_disclaimer_text_b}
          </Text>
        </Text>
        <FGLogo style={[styles.smallLogo, landscapeStyles.smallLogo]} />
      </View>
    </Screen>
  );
}

const landscapeStyles = StyleSheet.create({
  bottomContainer: {
    flex: 0.22,
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 0.3,
  },
  disclaimer: {
    width: "30%",
  },
  logo: {
    alignSelf: "center",
    height: "100%",
    width: "100%",
  },
  logoContainer: {
    flex: 0.48,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  settingsButton: {
    position: "absolute",
    right: 20,
  },
  smallLogo: {
    height: "70%",
    width: "30%",
  },
});

export default KFHomeLandscapeLayout;
