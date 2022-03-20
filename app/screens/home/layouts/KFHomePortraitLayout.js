/*
KFHomePortraitLayout - Portrait layout for the home screen of the app.
*/

// External libraries
import React from "react";
import { View, StyleSheet } from "react-native";

// Assets
import { FGLogo, KFLogo, SGLogo } from "../../../assets/logos";
import { SettingsGraphic } from "../../../assets/buttons/navigation";

// Components
import AutoSizeText from "../../../components/AutoSizeText";
import OpacityButton from "../../../components/OpacityButton";
import Screen from "../../../components/Screen";
import StartGameButton from "../../../components/StartGameButton";
import Text from "../../../components/Text";

// Resources
import defaultStyles from "../../../config/styles";
import sounds from "../../../assets/sounds/sounds";
import strings from "../../../config/strings";
import styles from "./KFHomeStyles";

function KFHomePortraitLayout({ actions }) {
  return (
    <Screen style={defaultStyles.screenContainer} isPortrait={true}>
      <View style={[styles.logoContainer, portraitStyles.logoContainer]}>
        <KFLogo style={portraitStyles.logo} />
        <View style={styles.settingsButton}>
          <OpacityButton
            Graphic={SettingsGraphic}
            sound={sounds.NEXT_CONFIRM}
            onPress={() => actions.settingsButton()}
          />
        </View>
      </View>
      <View style={[styles.buttonContainer, portraitStyles.buttonContainer]}>
        <View style={styles.button}>
          <StartGameButton
            sound={sounds.START_END_TURN}
            onPress={() => actions.startButton()}
          />
        </View>
      </View>
      <View style={[styles.bottomContainer, portraitStyles.bottomContainer]}>
        <View style={portraitStyles.bottomContents}>
          <AutoSizeText style={styles.disclaimer} maxLines={2}>
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
          </AutoSizeText>
          <View style={portraitStyles.companyLogos}>
            <SGLogo style={[styles.smallLogo, portraitStyles.smallLogo]} />
            <FGLogo style={[styles.smallLogo, portraitStyles.smallLogoB]} />
          </View>
        </View>
      </View>
    </Screen>
  );
}

const portraitStyles = StyleSheet.create({
  bottomContainer: {
    flex: 0.22,
  },
  bottomContents: {
    height: "100%",
    width: "70%",
  },
  buttonContainer: {
    flex: 0.2,
  },
  companyLogos: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  logo: {
    height: "60%",
    width: "100%",
  },
  logoContainer: {
    flex: 0.58,
    justifyContent: "space-between",
  },
  smallLogo: {
    height: "80%",
    width: "50%",
  },
  smallLogoB: {
    height: "80%",
    width: "25%",
  },
});

export default KFHomePortraitLayout;
