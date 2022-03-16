/*
KFSetupStepThreeLandscapeLayout - Landscape layout for the third setup screen.
*/

// External libraries
import React from "react";
import { View, StyleSheet } from "react-native";

// Assets
import {
  BackGraphic,
  CloseGraphic,
  FinishGraphic,
} from "../../../assets/buttons/navigation";

// Components
import OpacityButton from "../../../components/OpacityButton";
import Screen from "../../../components/Screen";
import Text from "../../../components/Text";
import TraitButton from "../../../components/TraitButton";

// Resources
import defaultStyles from "../../../config/styles";
import gangTraits from "../../../data/gangTraits";
import sounds from "../../../assets/sounds/sounds";
import strings from "../../../config/strings";
import styles from "./KFSetupStepThreeStyles";

function KFSetupStepThreeLandscapeLayout({ actions, values }) {
  return (
    <Screen style={defaultStyles.screenContainer} isPortrait={false}>
      <View style={styles.bodyContainer}>
        <View style={[styles.closeButton, landscapeStyles.closeButton]}>
          <OpacityButton
            Graphic={CloseGraphic}
            sound={sounds.BACK_CANCEL}
            onPress={() => actions.closeButton()}
          />
        </View>
        <Text style={styles.title}>{strings.setup_step_three_title}</Text>
        <Text style={styles.text}>{strings.setup_step_three_text}</Text>
        <View style={[styles.traitGrid, landscapeStyles.traitGrid]}>
          <View style={styles.traitRow}>
            <View style={[styles.traitButton, landscapeStyles.traitButton]}>
              <TraitButton
                Trait={gangTraits.ADVENTUROUS}
                isSelected={values.gangTrait == gangTraits.ADVENTUROUS}
                onSelect={() => actions.traitButton(gangTraits.ADVENTUROUS)}
              />
            </View>
            <View style={[styles.traitButton, landscapeStyles.traitButton]}>
              <TraitButton
                Trait={gangTraits.AGGRESSIVE}
                isSelected={values.gangTrait == gangTraits.AGGRESSIVE}
                onSelect={() => actions.traitButton(gangTraits.AGGRESSIVE)}
              />
            </View>
            <View style={[styles.traitButton, landscapeStyles.traitButton]}>
              <TraitButton
                Trait={gangTraits.BRASH}
                isSelected={values.gangTrait == gangTraits.BRASH}
                onSelect={() => actions.traitButton(gangTraits.BRASH)}
              />
            </View>
            <View style={[styles.traitButton, landscapeStyles.traitButton]}>
              <TraitButton
                Trait={gangTraits.BURLY}
                isSelected={values.gangTrait == gangTraits.BURLY}
                onSelect={() => actions.traitButton(gangTraits.BURLY)}
              />
            </View>
            <View style={[styles.traitButton, landscapeStyles.traitButton]}>
              <TraitButton
                Trait={gangTraits.COCKY}
                isSelected={values.gangTrait == gangTraits.COCKY}
                onSelect={() => actions.traitButton(gangTraits.COCKY)}
              />
            </View>
            <View style={[styles.traitButton, landscapeStyles.traitButton]}>
              <TraitButton
                Trait={gangTraits.EAGER}
                isSelected={values.gangTrait == gangTraits.EAGER}
                onSelect={() => actions.traitButton(gangTraits.EAGER)}
              />
            </View>
            <View style={[styles.traitButton, landscapeStyles.traitButton]}>
              <TraitButton
                Trait={gangTraits.FIERCE}
                isSelected={values.gangTrait == gangTraits.FIERCE}
                onSelect={() => actions.traitButton(gangTraits.FIERCE)}
              />
            </View>
            <View style={[styles.traitButton, landscapeStyles.traitButton]}>
              <TraitButton
                Trait={gangTraits.HEAVY}
                isSelected={values.gangTrait == gangTraits.HEAVY}
                onSelect={() => actions.traitButton(gangTraits.HEAVY)}
              />
            </View>
            <View style={[styles.traitButton, landscapeStyles.traitButton]}>
              <TraitButton
                Trait={gangTraits.LOW_KEY}
                isSelected={values.gangTrait == gangTraits.LOW_KEY}
                onSelect={() => actions.traitButton(gangTraits.LOW_KEY)}
              />
            </View>
            <View style={[styles.traitButton, landscapeStyles.traitButton]}>
              <TraitButton
                Trait={gangTraits.LUCKY}
                isSelected={values.gangTrait == gangTraits.LUCKY}
                onSelect={() => actions.traitButton(gangTraits.LUCKY)}
              />
            </View>
            <View style={[styles.traitButton, landscapeStyles.traitButton]}>
              <TraitButton
                Trait={gangTraits.PRACTICAL}
                isSelected={values.gangTrait == gangTraits.PRACTICAL}
                onSelect={() => actions.traitButton(gangTraits.PRACTICAL)}
              />
            </View>
          </View>
          <View style={styles.traitRow}>
            <View style={[styles.traitButton, landscapeStyles.traitButton]}>
              <TraitButton
                Trait={gangTraits.QUICK}
                isSelected={values.gangTrait == gangTraits.QUICK}
                onSelect={() => actions.traitButton(gangTraits.QUICK)}
              />
            </View>
            <View style={[styles.traitButton, landscapeStyles.traitButton]}>
              <TraitButton
                Trait={gangTraits.SAVAGE}
                isSelected={values.gangTrait == gangTraits.SAVAGE}
                onSelect={() => actions.traitButton(gangTraits.SAVAGE)}
              />
            </View>
            <View style={[styles.traitButton, landscapeStyles.traitButton]}>
              <TraitButton
                Trait={gangTraits.SKETCHY}
                isSelected={values.gangTrait == gangTraits.SKETCHY}
                onSelect={() => actions.traitButton(gangTraits.SKETCHY)}
              />
            </View>
            <View style={[styles.traitButton, landscapeStyles.traitButton]}>
              <TraitButton
                Trait={gangTraits.SLICK}
                isSelected={values.gangTrait == gangTraits.SLICK}
                onSelect={() => actions.traitButton(gangTraits.SLICK)}
              />
            </View>
            <View style={[styles.traitButton, landscapeStyles.traitButton]}>
              <TraitButton
                Trait={gangTraits.SMART}
                isSelected={values.gangTrait == gangTraits.SMART}
                onSelect={() => actions.traitButton(gangTraits.SMART)}
              />
            </View>
            <View style={[styles.traitButton, landscapeStyles.traitButton]}>
              <TraitButton
                Trait={gangTraits.STRONG}
                isSelected={values.gangTrait == gangTraits.STRONG}
                onSelect={() => actions.traitButton(gangTraits.STRONG)}
              />
            </View>
            <View style={[styles.traitButton, landscapeStyles.traitButton]}>
              <TraitButton
                Trait={gangTraits.TENACIOUS}
                isSelected={values.gangTrait == gangTraits.TENACIOUS}
                onSelect={() => actions.traitButton(gangTraits.TENACIOUS)}
              />
            </View>
            <View style={[styles.traitButton, landscapeStyles.traitButton]}>
              <TraitButton
                Trait={gangTraits.TOUGH}
                isSelected={values.gangTrait == gangTraits.TOUGH}
                onSelect={() => actions.traitButton(gangTraits.TOUGH)}
              />
            </View>
            <View style={[styles.traitButton, landscapeStyles.traitButton]}>
              <TraitButton
                Trait={gangTraits.UNSTABLE}
                isSelected={values.gangTrait == gangTraits.UNSTABLE}
                onSelect={() => actions.traitButton(gangTraits.UNSTABLE)}
              />
            </View>
            <View style={[styles.traitButton, landscapeStyles.traitButton]}>
              <TraitButton
                Trait={gangTraits.WELL_ROUNDED}
                isSelected={values.gangTrait == gangTraits.WELL_ROUNDED}
                onSelect={() => actions.traitButton(gangTraits.WELL_ROUNDED)}
              />
            </View>
            <View style={[styles.traitButton, landscapeStyles.traitButton]}>
              <TraitButton
                Trait={gangTraits.WILY}
                isSelected={values.gangTrait == gangTraits.WILY}
                onSelect={() => actions.traitButton(gangTraits.WILY)}
              />
            </View>
          </View>
        </View>
        <View style={[styles.navContainer, landscapeStyles.navContainer]}>
          <OpacityButton
            style={styles.navButton}
            Graphic={BackGraphic}
            sound={sounds.BACK_CANCEL}
            onPress={() => actions.backButton()}
            width="35%"
          />
          {values.traitIsSelected && (
            <OpacityButton
              style={styles.navButton}
              Graphic={FinishGraphic}
              sound={sounds.FINISH}
              onPress={() => actions.finishButton()}
              width="35%"
            />
          )}
          {!values.traitIsSelected && (
            <FinishGraphic style={styles.buttonDisabled} width="35%" />
          )}
        </View>
      </View>
    </Screen>
  );
}

const landscapeStyles = StyleSheet.create({
  closeButton: {
    top: 15,
  },
  navContainer: {
    justifyContent: "center",
  },
  traitButton: {
    width: "10%",
  },
  traitGrid: {
    height: "35%",
  },
});

export default KFSetupStepThreeLandscapeLayout;
