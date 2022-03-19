/*
KFBannerLandscapeLayout - Landscape layout for the banner screen.
*/

// External libraries
import React from "react";
import { View, StyleSheet } from "react-native";

// Assets
import { ToolsGraphic } from "../../../assets/buttons/actions";

// Components
import DefeatedOverlay from "../../../components/DefeatedOverlay";
import HealthBar from "../../../components/HealthBar";
import NameDisplay from "../../../components/NameDisplay";
import OpacityButton from "../../../components/OpacityButton";
import TraitScreen from "../../../components/TraitScreen";

// Resources
import sounds from "../../../assets/sounds/sounds";
import styles from "./KFBannerStyles";

function KFBannerLandscapeLayout({ actions, values }) {
  return (
    <TraitScreen
      Trait={values.gangTrait}
      Color={values.gangColor}
      style={styles.screenContainer}
      isPortrait={false}
    >
      <View style={[styles.nameContainer, landscapeStyles.nameContainer]}>
        <NameDisplay
          gangName={values.gangName}
          Trait={values.gangTrait}
          style={values.nameStyle}
          Color={values.gangColor}
          isPortrait={false}
          descriptionVisible
        />
      </View>
      {values.count == 0 && <DefeatedOverlay />}
      <View style={styles.bodyContainer}>
        <View style={[styles.buttonContainer, landscapeStyles.buttonContainer]}>
          <View style={[styles.toolsButton, landscapeStyles.toolsButton]}>
            <OpacityButton
              Graphic={ToolsGraphic}
              sound={sounds.START_TURN}
              onPress={() => actions.startTurnButton()}
            />
          </View>
        </View>
        <View style={[styles.healthContainer, landscapeStyles.healthContainer]}>
          <HealthBar
            currentHp={values.count}
            decreaseHp={() => actions.minusButton()}
            increaseHp={() => actions.plusButton()}
            initialHp={values.initialHp}
            gangColor={values.gangColor}
            flexWidth={0.88}
          />
        </View>
      </View>
    </TraitScreen>
  );
}

const landscapeStyles = StyleSheet.create({
  buttonContainer: {
    flex: 0.25,
  },
  healthContainer: {
    flex: 0.25,
  },
  nameContainer: {
    flex: 0.5,
    height: "50%",
  },
  toolsButton: {
    width: "20%",
  },
});

export default KFBannerLandscapeLayout;
