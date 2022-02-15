/*
KFSetupStepOneScreen - View for the first setup screen.
*/

// External libraries
import React from "react";
import { View } from "react-native";

// Assets
import { ExitGraphic, NextGraphic } from "../../assets/buttons/navigation";
import { GenerateNameGraphic } from "../../assets/buttons/actions";

// Components
import Button from "../../components/Button";
import OpacityButton from "../../components/OpacityButton";
import Screen from "../../components/Screen";
import Text from "../../components/Text";
import TextInput from "../../components/TextInput";

// Resources
import routes from "../../navigation/routes";
import strings from "../../config/strings";
import styles from "./KFSetupStepOneStyles";

const background = require("../../assets/backgrounds/kf_background_xxxhdpi.png");

function KFSetupStepOneScreen({ navigation }) {
  return (
    <Screen style={styles.screenContainer} background={background}>
      <View style={styles.topContainer} />
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{strings.setup_step_one_title}</Text>
        <Text style={styles.text}>{strings.setup_step_one_text}</Text>
        <TextInput
          style={styles.textInput}
          placeholder={strings.setup_step_one_placeholder}
          maxLength={22}
        />
        <View style={styles.nameButton}>
          <Button Graphic={GenerateNameGraphic} style={styles.button} />
        </View>
        <View style={styles.navContainer}>
          <OpacityButton
            style={styles.navButton}
            Graphic={ExitGraphic}
            onPress={() => navigation.goBack()}
            width="45%"
          />
          <OpacityButton
            style={styles.navButton}
            Graphic={NextGraphic}
            onPress={() => navigation.navigate(routes.SETUP_STEP_TWO)}
            width="45%"
          />
        </View>
      </View>
      <View style={styles.bottomContainer} />
    </Screen>
  );
}

export default KFSetupStepOneScreen;
