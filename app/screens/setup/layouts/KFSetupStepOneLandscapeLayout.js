/*
KFSetupStepOneLandscapeLayout - Landscape layout for the first setup screen.
*/

// External libraries
import React from "react";
import { View, StyleSheet } from "react-native";

// Assets
import { ExitGraphic, NextGraphic } from "../../../assets/buttons/navigation";
import { GenerateNameGraphic } from "../../../assets/buttons/actions";

// Components
import Button from "../../../components/Button";
import OpacityButton from "../../../components/OpacityButton";
import Screen from "../../../components/Screen";
import Text from "../../../components/Text";
import TextInput from "../../../components/TextInput";

// Resources
import defaultStyles from "../../../config/styles";
import sounds from "../../../assets/sounds/sounds";
import strings from "../../../config/strings";
import styles from "./KFSetupStepOneStyles";

function KFSetupStepOneLandscapeLayout({ actions, values }) {
  return (
    <Screen style={defaultStyles.screenContainer} isPortrait={false}>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{strings.setup_step_one_title}</Text>
        <Text style={styles.text}>{strings.setup_step_one_text}</Text>
        <TextInput
          style={styles.textInput}
          placeholder={strings.setup_step_one_placeholder}
          maxLength={25}
          value={values.gangName}
          width={"55%"}
          onChangeText={(value) => actions.gangNameInput(value)}
        />
        <View style={styles.nameButton}>
          <Button
            Graphic={GenerateNameGraphic}
            sound={sounds.GENERATE_NAME}
            style={styles.button}
            onPress={() => actions.generateNameButton()}
          />
        </View>
        <View style={[styles.navContainer, landscapeStyles.navContainer]}>
          <OpacityButton
            Graphic={ExitGraphic}
            sound={sounds.BACK_CANCEL}
            onPress={() => actions.exitButton()}
            width="35%"
          />
          {values.nameIsEntered && (
            <OpacityButton
              Graphic={NextGraphic}
              sound={sounds.NEXT_CONFIRM}
              onPress={() => actions.nextButton()}
              width="35%"
            />
          )}
          {!values.nameIsEntered && (
            <NextGraphic style={styles.buttonDisabled} width="35%" />
          )}
        </View>
      </View>
    </Screen>
  );
}

const landscapeStyles = StyleSheet.create({
  navContainer: {
    justifyContent: "center",
  },
});

export default KFSetupStepOneLandscapeLayout;
