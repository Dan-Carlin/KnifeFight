/*
KFSetupStepTwoPortraitLayout - Portrait layout for the second setup screen.
*/

// External libraries
import React from "react";
import { View, StyleSheet } from "react-native";

// Assets
import {
  BackGraphic,
  CloseGraphic,
  NextGraphic,
} from "../../../assets/buttons/navigation";

// Components
import ColorButton from "../../../components/ColorButton";
import OpacityButton from "../../../components/OpacityButton";
import Screen from "../../../components/Screen";
import Text from "../../../components/Text";

// Resources
import defaultStyles from "../../../config/styles";
import gangColors from "../../../data/gangColors";
import sounds from "../../../assets/sounds/sounds";
import strings from "../../../config/strings";
import styles from "./KFSetupStepTwoStyles";

function KFSetupStepTwoPortraitLayout({ actions, values }) {
  return (
    <Screen style={defaultStyles.screenContainer} isPortrait={true}>
      <View style={styles.bodyContainer}>
        <View style={[styles.closeButton, portraitStyles.closeButton]}>
          <OpacityButton
            Graphic={CloseGraphic}
            sound={sounds.BACK_CANCEL}
            onPress={() => actions.closeButton()}
          />
        </View>
        <Text style={styles.title}>{strings.setup_step_two_title}</Text>
        <Text style={styles.text}>{strings.setup_step_two_text}</Text>
        <View style={[styles.colorGrid, portraitStyles.colorGrid]}>
          <View style={portraitStyles.colorRow}>
            <View style={styles.colorButton}>
              <ColorButton
                Color={gangColors.PURPLE}
                isSelected={values.gangColor == gangColors.PURPLE}
                onSelect={() => actions.colorButton(gangColors.PURPLE)}
              />
            </View>
            <View style={styles.colorButton}>
              <ColorButton
                Color={gangColors.YELLOW}
                isSelected={values.gangColor == gangColors.YELLOW}
                onSelect={() => actions.colorButton(gangColors.YELLOW)}
              />
            </View>
            <View style={styles.colorButton}>
              <ColorButton
                Color={gangColors.GREEN}
                isSelected={values.gangColor == gangColors.GREEN}
                onSelect={() => actions.colorButton(gangColors.GREEN)}
              />
            </View>
            <View style={styles.colorButton}>
              <ColorButton
                Color={gangColors.RED}
                isSelected={values.gangColor == gangColors.RED}
                onSelect={() => actions.colorButton(gangColors.RED)}
              />
            </View>
            <View style={styles.colorButton}>
              <ColorButton
                Color={gangColors.ORANGE}
                isSelected={values.gangColor == gangColors.ORANGE}
                onSelect={() => actions.colorButton(gangColors.ORANGE)}
              />
            </View>
            <View style={styles.colorButton}>
              <ColorButton
                Color={gangColors.BLUE}
                isSelected={values.gangColor == gangColors.BLUE}
                onSelect={() => actions.colorButton(gangColors.BLUE)}
              />
            </View>
          </View>
          <View style={portraitStyles.colorRow}>
            <View style={styles.colorButton}>
              <ColorButton
                Color={gangColors.BLACK}
                isSelected={values.gangColor == gangColors.BLACK}
                onSelect={() => actions.colorButton(gangColors.BLACK)}
              />
            </View>
            <View style={styles.colorButton}>
              <ColorButton
                Color={gangColors.WHITE}
                isSelected={values.gangColor == gangColors.WHITE}
                onSelect={() => actions.colorButton(gangColors.WHITE)}
              />
            </View>
            <View style={styles.colorButton}>
              <ColorButton
                Color={gangColors.PINK}
                isSelected={values.gangColor == gangColors.PINK}
                onSelect={() => actions.colorButton(gangColors.PINK)}
              />
            </View>
            <View style={styles.colorButton}>
              <ColorButton
                Color={gangColors.BROWN}
                isSelected={values.gangColor == gangColors.BROWN}
                onSelect={() => actions.colorButton(gangColors.BROWN)}
              />
            </View>
            <View style={styles.colorButton}>
              <ColorButton
                Color={gangColors.CYAN}
                isSelected={values.gangColor == gangColors.CYAN}
                onSelect={() => actions.colorButton(gangColors.CYAN)}
              />
            </View>
            <View style={styles.colorButton}>
              <ColorButton
                Color={gangColors.GOLD}
                isSelected={values.gangColor == gangColors.GOLD}
                onSelect={() => actions.colorButton(gangColors.GOLD)}
              />
            </View>
          </View>
        </View>
        <View style={[styles.navContainer, portraitStyles.navContainer]}>
          <OpacityButton
            style={styles.navButton}
            Graphic={BackGraphic}
            sound={sounds.BACK_CANCEL}
            onPress={() => actions.backButton()}
            width="45%"
          />
          {values.colorIsSelected && (
            <OpacityButton
              style={styles.navButton}
              Graphic={NextGraphic}
              sound={sounds.NEXT_CONFIRM}
              onPress={() => actions.nextButton()}
              width="45%"
            />
          )}
          {!values.colorIsSelected && (
            <NextGraphic style={styles.buttonDisabled} width="45%" />
          )}
        </View>
      </View>
    </Screen>
  );
}

const portraitStyles = StyleSheet.create({
  closeButton: {
    top: 35,
  },
  colorGrid: {
    width: "95%",
  },
  colorRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 4,
  },
  navContainer: {
    justifyContent: "space-between",
  },
});

export default KFSetupStepTwoPortraitLayout;
