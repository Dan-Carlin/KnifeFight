import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../../config/colors";
import HealthBar from "../../components/HealthBar";
import NameDisplay from "../../components/NameDisplay";
import OpacityButton from "../../components/OpacityButton";
import { ToolsGraphic } from "../../assets/buttons/actions";
import TraitScreen from "../../components/TraitScreen";
import * as TraitSvgs from "../../assets/traits";

const background = require("../../assets/backgrounds/kf_background_land_xxxhdpi.png");

function KFBannerScreen(props) {
  return (
    <TraitScreen
      TraitGraphic={TraitSvgs.Unstable}
      gangColor={colors.gang_red}
      style={styles.screenContainer}
      background={background}
    >
      <View style={styles.buttonContainer}>
        <View style={styles.toolsButton}>
          <OpacityButton
            Graphic={ToolsGraphic}
            onPress={() => console.log("Tools button pressed.")}
          />
        </View>
      </View>
      <View style={styles.nameContainer}>
        <NameDisplay
          gangName={"Gang Name"}
          gangTrait={"Unstable"}
          font="default"
          color={colors.gang_red}
        />
      </View>
      <View style={styles.healthContainer}>
        <HealthBar
          hpValue={"25"}
          gangColor={colors.gang_red}
          gangColorDark={colors.gang_medium_red}
        />
      </View>
    </TraitScreen>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 0.25,
  },
  healthContainer: {
    alignItems: "center",
    flex: 0.35,
  },
  nameContainer: {
    alignItems: "center",
    flex: 0.4,
  },
  screenContainer: {
    flex: 1,
  },
  toolsButton: {
    height: "100%",
    width: "20%",
    transform: [{ rotate: "180deg" }],
  },
});

export default KFBannerScreen;
