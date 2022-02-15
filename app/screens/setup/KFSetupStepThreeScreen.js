/*
KFSetupStepThreeScreen - View for the third setup screen.
*/

// External libraries
import React from "react";
import { View } from "react-native";

// Assets
import {
  BackGraphic,
  CloseGraphic,
  FinishGraphic,
} from "../../assets/buttons/navigation";
import * as TraitSvgs from "../../assets/traits";

// Components
import OpacityButton from "../../components/OpacityButton";
import Screen from "../../components/Screen";
import Text from "../../components/Text";
import TraitButton from "../../components/TraitButton";

// Resources
import routes from "../../navigation/routes";
import strings from "../../config/strings";
import styles from "./KFSetupStepThreeStyles";

const background = require("../../assets/backgrounds/kf_background_xxxhdpi.png");

function KFSetupStepThreeScreen({ navigation }) {
  return (
    <Screen style={styles.screenContainer} background={background}>
      <View style={styles.topContainer}>
        <View style={styles.closeButton}>
          <OpacityButton
            Graphic={CloseGraphic}
            onPress={() => navigation.popToTop()}
          />
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{strings.setup_step_three_title}</Text>
        <Text style={styles.text}>{strings.setup_step_three_text}</Text>
        <View style={styles.traitGrid}>
          <View style={styles.traitRow}>
            <View style={styles.traitButton}>
              <TraitButton
                trait={strings.traits_adventurous}
                Graphic={TraitSvgs.Adventurous}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                trait={strings.traits_aggressive}
                Graphic={TraitSvgs.Aggressive}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                trait={strings.traits_brash}
                Graphic={TraitSvgs.Brash}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                trait={strings.traits_burly}
                Graphic={TraitSvgs.Burly}
              />
            </View>
          </View>
          <View style={styles.traitRow}>
            <View style={styles.traitButton}>
              <TraitButton
                trait={strings.traits_cocky}
                Graphic={TraitSvgs.Cocky}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                trait={strings.traits_eager}
                Graphic={TraitSvgs.Eager}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                trait={strings.traits_fierce}
                Graphic={TraitSvgs.Fierce}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                trait={strings.traits_heavy}
                Graphic={TraitSvgs.Heavy}
              />
            </View>
          </View>
          <View style={styles.traitRow}>
            <View style={styles.traitButton}>
              <TraitButton
                trait={strings.traits_low_key}
                Graphic={TraitSvgs.LowKey}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                trait={strings.traits_lucky}
                Graphic={TraitSvgs.Lucky}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                trait={strings.traits_practical}
                Graphic={TraitSvgs.Practical}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                trait={strings.traits_quick}
                Graphic={TraitSvgs.Quick}
              />
            </View>
          </View>
          <View style={styles.traitRow}>
            <View style={styles.traitButton}>
              <TraitButton
                trait={strings.traits_savage}
                Graphic={TraitSvgs.Savage}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                trait={strings.traits_sketchy}
                Graphic={TraitSvgs.Sketchy}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                trait={strings.traits_slick}
                Graphic={TraitSvgs.Slick}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                trait={strings.traits_smart}
                Graphic={TraitSvgs.Smart}
              />
            </View>
          </View>
          <View style={styles.traitRow}>
            <View style={styles.traitButton}>
              <TraitButton
                trait={strings.traits_strong}
                Graphic={TraitSvgs.Strong}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                trait={strings.traits_tenacious}
                Graphic={TraitSvgs.Tenacious}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                trait={strings.traits_tough}
                Graphic={TraitSvgs.Tough}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                trait={strings.traits_unstable}
                Graphic={TraitSvgs.Unstable}
              />
            </View>
          </View>
          <View style={styles.traitRow}>
            <View style={styles.traitButton}>
              <TraitButton
                trait={strings.traits_well_rounded}
                Graphic={TraitSvgs.WellRounded}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                trait={strings.traits_wily}
                Graphic={TraitSvgs.Wily}
              />
            </View>
          </View>
        </View>
        <View style={styles.navContainer}>
          <OpacityButton
            style={styles.navButton}
            Graphic={BackGraphic}
            onPress={() => navigation.goBack()}
            width="45%"
          />
          <OpacityButton
            style={styles.navButton}
            Graphic={FinishGraphic}
            onPress={() => navigation.navigate(routes.GAME_NAVIGATOR)}
            width="45%"
          />
        </View>
      </View>
      <View style={styles.bottomContainer} />
    </Screen>
  );
}

export default KFSetupStepThreeScreen;
