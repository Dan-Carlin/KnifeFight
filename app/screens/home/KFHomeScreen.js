/*
KFHomeScreen - View for the home screen of the app.
*/

// External libraries
import React from "react";
import { View, Image } from "react-native";

// Assets
import { FGLogo, KFLogo } from "../../assets/logos";
import Gradient from "../../assets/backgrounds/split_gradient_green.svg";
import { StartGameGraphic } from "../../assets/buttons/navigation";

// Components
import OpacityButton from "../../components/OpacityButton";
import Screen from "../../components/Screen";
import Text from "../../components/Text";

// Resources
import routes from "../../navigation/routes";
import sounds from "../../assets/sounds/sounds";
import strings from "../../config/strings";
import styles from "./KFHomeStyles";

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
        <View style={styles.button}>
          <OpacityButton
            Graphic={StartGameGraphic}
            sound={sounds.START_END_TURN}
            onPress={() => {
              setTimeout(() => {
                navigation.navigate(routes.SETUP_STEP_ONE);
              }, 100);
            }}
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomContents}>
          <Text style={styles.disclaimer}>
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
          <View style={styles.companyLogos}>
            <Image style={styles.sgLogo} source={sgLogo} />
            <FGLogo style={styles.fgLogo} />
          </View>
        </View>
      </View>
    </Screen>
  );
}

export default KFHomeScreen;
