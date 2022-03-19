/*
KFBannerPortraitLayout - Portrait layout for the banner screen.
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

function KFBannerPortraitLayout({ actions, values }) {
  return (
    <TraitScreen
      Trait={values.gangTrait}
      Color={values.gangColor}
      style={styles.screenContainer}
      isPortrait={true}
    >
      <View style={[styles.nameContainer, portraitStyles.nameContainer]}>
        <NameDisplay
          gangName={values.gangName}
          Trait={values.gangTrait}
          style={values.nameStyle}
          Color={values.gangColor}
          isPortrait={true}
          descriptionVisible
        />
      </View>
      {values.count == 0 && <DefeatedOverlay />}
      <View style={styles.bodyContainer}>
        <View style={[styles.buttonContainer, portraitStyles.buttonContainer]}>
          <View style={[styles.toolsButton, portraitStyles.toolsButton]}>
            <OpacityButton
              Graphic={ToolsGraphic}
              sound={sounds.START_TURN}
              onPress={() => actions.startTurnButton()}
            />
          </View>
        </View>
        <View style={[styles.healthContainer, portraitStyles.healthContainer]}>
          <HealthBar
            currentHp={values.count}
            decreaseHp={() => actions.minusButton()}
            increaseHp={() => actions.plusButton()}
            initialHp={values.initialHp}
            gangColor={values.gangColor}
            flexWidth={0.75}
          />
        </View>
      </View>
    </TraitScreen>
  );
}

const portraitStyles = StyleSheet.create({
  buttonContainer: {
    flex: 0.15,
  },
  healthContainer: {
    flex: 0.15,
  },
  nameContainer: {
    flex: 0.7,
    height: "70%",
  },
  toolsButton: {
    width: "25%",
  },
});

export default KFBannerPortraitLayout;
