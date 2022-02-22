/*
KFBannerScreen - View for the banner screen.
*/

// External libraries
import React from "react";
import { View } from "react-native";

// Assets
import { ToolsGraphic } from "../../assets/buttons/actions";

// Components
import HealthBar from "../../components/HealthBar";
import NameDisplay from "../../components/NameDisplay";
import OpacityButton from "../../components/OpacityButton";
import TraitScreen from "../../components/TraitScreen";

// Resources
import styles from "./KFBannerStyles";

const background = require("../../assets/backgrounds/kf_background_land_xxxhdpi.png");

function KFBannerScreen({ route, navigation }) {
  const { hp, style, name, Color, Trait } = route.params;

  return (
    <TraitScreen
      Trait={Trait}
      Color={Color}
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
          gangName={name}
          Trait={Trait}
          style={style}
          Color={Color}
          descriptionVisible
        />
      </View>
      <View style={styles.healthContainer}>
        <HealthBar hpValue={hp} gangColor={Color} />
      </View>
    </TraitScreen>
  );
}

export default KFBannerScreen;
