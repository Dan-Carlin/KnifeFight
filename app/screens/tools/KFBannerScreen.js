/*
KFBannerScreen - View for the banner screen.
*/

// External libraries
import React from "react";
import { View } from "react-native";

// Assets
import { ToolsGraphic } from "../../assets/buttons/actions";
import * as TraitSvgs from "../../assets/traits";

// Components
import HealthBar from "../../components/HealthBar";
import NameDisplay from "../../components/NameDisplay";
import OpacityButton from "../../components/OpacityButton";
import TraitScreen from "../../components/TraitScreen";

// Resources
import colors from "../../config/colors";
import strings from "../../config/strings";
import styles from "./KFBannerStyles";

const background = require("../../assets/backgrounds/kf_background_land_xxxhdpi.png");

function KFBannerScreen({ navigation }) {
  return (
    <TraitScreen
      TraitGraphic={TraitSvgs.Unstable}
      gangColor={colors.gang_normal_red}
      style={styles.screenContainer}
      background={background}
    >
      <View style={styles.buttonContainer}>
        <View style={styles.toolsButton}>
          <OpacityButton
            Graphic={ToolsGraphic}
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
      <View style={styles.nameContainer}>
        <NameDisplay
          gangName={"Gang Name"}
          gangTrait={strings.traits_unstable}
          font="default"
          color={colors.gang_normal_red}
          descriptionVisible
        />
      </View>
      <View style={styles.healthContainer}>
        <HealthBar
          hpValue={"25"}
          gangColor={colors.gang_normal_red}
          gangColorMedium={colors.gang_medium_red}
        />
      </View>
    </TraitScreen>
  );
}

export default KFBannerScreen;
