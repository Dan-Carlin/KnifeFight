/*
InstructionsModalLandscapeLayout - Portrait layout for modal that activates when a game is started.
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
import styles from "./InstructionsModalStyles";

function InstructionsModalLandscapeLayout({ actions, values }) {
  return (
    <View style={[styles.container, landscapeStyles.container]}>
      <View style={[styles.titleContainer, landscapeStyles.titleContainer]}>
        <Text style={styles.title}>{strings.modal_instructions_title}</Text>
        <View style={styles.pageLabel}>
          <Text style={styles.pageLabelText}>{values.pageLabel}</Text>
        </View>
      </View>
      <View style={[styles.bodyContainer, landscapeStyles.bodyContainer]}>
        <View style={styles.leftContainer}>
          <View style={landscapeStyles.navButtons}>
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
        </View>
        <View style={styles.centerContainer}>{values.pageLayout}</View>
        <View style={styles.rightContainer}>
          <View style={landscapeStyles.navButtons}>
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
      <View style={[styles.confirmButton, landscapeStyles.confirmButton]}>
        <Button
          Graphic={GotItGraphic}
          sound={sounds.NEXT_CONFIRM}
          onPress={() => actions.gotItButton()}
        />
      </View>
    </View>
  );
}

const landscapeStyles = StyleSheet.create({
  bodyContainer: {
    flex: 0.88,
    flexDirection: "row",
  },
  confirmButton: {
    height: "14%",
    width: "20%",
  },
  container: {
    height: "95%",
    width: "80%",
  },
  navButtons: {
    height: "100%",
    width: "100%",
  },
  titleContainer: {
    flex: 0.12,
  },
});

export default InstructionsModalLandscapeLayout;
