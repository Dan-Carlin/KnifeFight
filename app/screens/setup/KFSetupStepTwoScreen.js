/*
KFSetupStepTwoScreen - View for the second setup screen.
*/

// External libraries
import React from "react";
import { View } from "react-native";

// Assets
import {
  BackGraphic,
  CloseGraphic,
  NextGraphic,
} from "../../assets/buttons/navigation";
import * as ColorSvgs from "../../assets/buttons/colors/index";

// Components
import ColorButton from "../../components/ColorButton";
import OpacityButton from "../../components/OpacityButton";
import Screen from "../../components/Screen";
import Text from "../../components/Text";

// Resources
import routes from "../../navigation/routes";
import strings from "../../config/strings";
import styles from "./KFSetupStepTwoStyles";

const background = require("../../assets/backgrounds/kf_background_xxxhdpi.png");

function KFSetupStepTwoScreen({ navigation }) {
  return (
    <Screen style={styles.screenContainer} background={background}>
      <View style={styles.topContainer}>
        <View style={styles.closeButton}>
          <OpacityButton
            Graphic={CloseGraphic}
            onPress={() => navigation.popToTop()}
          />
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{strings.setup_step_two_title}</Text>
        <Text style={styles.text}>{strings.setup_step_two_text}</Text>
        <View style={styles.colorGrid}>
          <View style={styles.colorRow}>
            <View style={styles.colorButton}>
              <ColorButton Graphic={ColorSvgs.Purple} />
            </View>
            <View style={styles.colorButton}>
              <ColorButton Graphic={ColorSvgs.Yellow} />
            </View>
            <View style={styles.colorButton}>
              <ColorButton Graphic={ColorSvgs.Green} />
            </View>
            <View style={styles.colorButton}>
              <ColorButton Graphic={ColorSvgs.Red} />
            </View>
            <View style={styles.colorButton}>
              <ColorButton Graphic={ColorSvgs.Orange} />
            </View>
            <View style={styles.colorButton}>
              <ColorButton Graphic={ColorSvgs.Blue} />
            </View>
          </View>
          <View style={styles.colorRow}>
            <View style={styles.colorButton}>
              <ColorButton Graphic={ColorSvgs.Black} />
            </View>
            <View style={styles.colorButton}>
              <ColorButton Graphic={ColorSvgs.White} />
            </View>
            <View style={styles.colorButton}>
              <ColorButton Graphic={ColorSvgs.Pink} />
            </View>
            <View style={styles.colorButton}>
              <ColorButton Graphic={ColorSvgs.Brown} />
            </View>
            <View style={styles.colorButton}>
              <ColorButton Graphic={ColorSvgs.Cyan} />
            </View>
            <View style={styles.colorButton}>
              <ColorButton Graphic={ColorSvgs.Gold} />
            </View>
          </View>
        </View>
        <View style={styles.navContainer}>
          <OpacityButton
            style={styles.navButton}
            Graphic={BackGraphic}
            onPress={() => navigation.goBack()}
            width="45%"
          />
          <OpacityButton
            style={styles.navButton}
            Graphic={NextGraphic}
            onPress={() => navigation.navigate(routes.SETUP_STEP_THREE)}
            width="45%"
          />
        </View>
      </View>
      <View style={styles.bottomContainer} />
    </Screen>
  );
}

export default KFSetupStepTwoScreen;
