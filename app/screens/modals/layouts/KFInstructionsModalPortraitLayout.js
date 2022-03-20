/*
KFInstructionsModalPortraitLayout - Portrait layout for modal that activates when a game is started.
*/

// External libraries
import React from "react";
import { View, StyleSheet } from "react-native";

// Assets
import {
  ArrowLeftGraphic,
  ArrowRightGraphic,
  GotItGraphic,
} from "../../../assets/buttons/actions";

// Components
import Button from "../../../components/Button";
import Text from "../../../components/Text";

// Resources
import sounds from "../../../assets/sounds/sounds";
import strings from "../../../config/strings";
import styles from "./KFInstructionsModalStyles";

function InstructionsModalPortraitLayout({ actions, values }) {
  return (
    <View style={[styles.container, portraitStyles.container]}>
      <View style={[styles.titleContainer, portraitStyles.titleContainer]}>
        <Text style={styles.title}>{strings.modal_instructions_title}</Text>
        <View style={styles.pageLabel}>
          <Text style={styles.pageLabelText}>{values.pageLabel}</Text>
        </View>
      </View>
      <View style={[styles.bodyContainer, portraitStyles.bodyContainer]}>
        {values.pageLayout}
      </View>
      <View style={portraitStyles.navContainer}>
        <View style={portraitStyles.navButtons}>
          {values.count == 0 && (
            <ArrowLeftGraphic style={styles.buttonDisabled} />
          )}
          {values.count > 0 && (
            <Button
              Graphic={ArrowLeftGraphic}
              sound={sounds.ARROW_LEFT}
              onPress={() => actions.pageArrowLeft()}
            />
          )}
        </View>
        <View style={portraitStyles.confirmButton}>
          <Button
            Graphic={GotItGraphic}
            sound={sounds.NEXT_CONFIRM}
            onPress={() => actions.gotItButton()}
          />
        </View>
        <View style={portraitStyles.navButtons}>
          {values.count == values.howToScreens.length - 1 && (
            <ArrowRightGraphic style={styles.buttonDisabled} />
          )}
          {values.count < values.howToScreens.length - 1 && (
            <Button
              Graphic={ArrowRightGraphic}
              sound={sounds.ARROW_RIGHT}
              onPress={() => actions.pageArrowRight()}
            />
          )}
        </View>
      </View>
    </View>
  );
}

const portraitStyles = StyleSheet.create({
  bodyContainer: {
    flex: 0.82,
  },
  confirmButton: {
    height: "72%",
    width: "35%",
  },
  container: {
    height: "80%",
    width: "95%",
  },
  navButtons: {
    height: "100%",
    width: "20%",
  },
  navContainer: {
    alignItems: "center",
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  titleContainer: {
    flex: 0.08,
  },
});

export default InstructionsModalPortraitLayout;
