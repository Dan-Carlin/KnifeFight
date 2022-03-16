/*
KFSetupStepOnePortraitLayout - Portrait layout for the first setup screen.
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

function KFSetupStepOnePortraitLayout({ actions, values }) {
  return (
    <Screen style={defaultStyles.screenContainer} isPortrait={true}>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{strings.setup_step_one_title}</Text>
        <Text style={styles.text}>{strings.setup_step_one_text}</Text>
        <TextInput
          style={styles.textInput}
          placeholder={strings.setup_step_one_placeholder}
          maxLength={25}
          value={values.gangName}
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
        <View style={[styles.navContainer, portraitStyles.navContainer]}>
          <OpacityButton
            Graphic={ExitGraphic}
            sound={sounds.BACK_CANCEL}
            onPress={() => actions.exitButton()}
            width="45%"
          />
          {values.nameIsEntered && (
            <OpacityButton
              Graphic={NextGraphic}
              sound={sounds.NEXT_CONFIRM}
              onPress={() => actions.nextButton()}
              width="45%"
            />
          )}
          {!values.nameIsEntered && (
            <NextGraphic style={styles.buttonDisabled} width="45%" />
          )}
        </View>
      </View>
    </Screen>
  );
}

const portraitStyles = StyleSheet.create({
  navContainer: {
    justifyContent: "space-between",
  },
});

export default KFSetupStepOnePortraitLayout;
