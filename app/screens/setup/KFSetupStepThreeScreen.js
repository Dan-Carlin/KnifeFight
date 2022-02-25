/*
KFSetupStepThreeScreen - View for the third setup screen.
*/

// External libraries
import React, { useState } from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Assets
import {
  BackGraphic,
  CloseGraphic,
  FinishGraphic,
} from "../../assets/buttons/navigation";

// Components
import OpacityButton from "../../components/OpacityButton";
import Screen from "../../components/Screen";
import Text from "../../components/Text";
import TraitButton from "../../components/TraitButton";

// Resources
import gangTraits from "../../data/gangTraits";
import routes from "../../navigation/routes";
import sounds from "../../assets/sounds/sounds";
import strings from "../../config/strings";
import styles from "./KFSetupStepThreeStyles";

const background = require("../../assets/backgrounds/kf_background_xxxhdpi.png");

function KFSetupStepThreeScreen({ navigation }) {
  const [trait, setTrait] = useState(gangTraits.NONE);
  const [traitIsSelected, setTraitIsSelected] = useState(false);

  const setGangTrait = (value) => {
    if (value != gangTraits.NONE) {
      setTraitIsSelected(true);
    } else {
      setTraitIsSelected(false);
    }
    setTrait(value);
  };

  const storeGangTrait = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@gangTrait", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Screen style={styles.screenContainer} background={background}>
      <View style={styles.topContainer}>
        <View style={styles.closeButton}>
          <OpacityButton
            Graphic={CloseGraphic}
            sound={sounds.BACK_CANCEL}
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
                Trait={gangTraits.ADVENTUROUS}
                isSelected={trait == gangTraits.ADVENTUROUS}
                onSelect={() => setGangTrait(gangTraits.ADVENTUROUS)}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                Trait={gangTraits.AGGRESSIVE}
                isSelected={trait == gangTraits.AGGRESSIVE}
                onSelect={() => setGangTrait(gangTraits.AGGRESSIVE)}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                Trait={gangTraits.BRASH}
                isSelected={trait == gangTraits.BRASH}
                onSelect={() => setGangTrait(gangTraits.BRASH)}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                Trait={gangTraits.BURLY}
                isSelected={trait == gangTraits.BURLY}
                onSelect={() => setGangTrait(gangTraits.BURLY)}
              />
            </View>
          </View>
          <View style={styles.traitRow}>
            <View style={styles.traitButton}>
              <TraitButton
                Trait={gangTraits.COCKY}
                isSelected={trait == gangTraits.COCKY}
                onSelect={() => setGangTrait(gangTraits.COCKY)}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                Trait={gangTraits.EAGER}
                isSelected={trait == gangTraits.EAGER}
                onSelect={() => setGangTrait(gangTraits.EAGER)}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                Trait={gangTraits.FIERCE}
                isSelected={trait == gangTraits.FIERCE}
                onSelect={() => setGangTrait(gangTraits.FIERCE)}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                Trait={gangTraits.HEAVY}
                isSelected={trait == gangTraits.HEAVY}
                onSelect={() => setGangTrait(gangTraits.HEAVY)}
              />
            </View>
          </View>
          <View style={styles.traitRow}>
            <View style={styles.traitButton}>
              <TraitButton
                Trait={gangTraits.LOW_KEY}
                isSelected={trait == gangTraits.LOW_KEY}
                onSelect={() => setGangTrait(gangTraits.LOW_KEY)}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                Trait={gangTraits.LUCKY}
                isSelected={trait == gangTraits.LUCKY}
                onSelect={() => setGangTrait(gangTraits.LUCKY)}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                Trait={gangTraits.PRACTICAL}
                isSelected={trait == gangTraits.PRACTICAL}
                onSelect={() => setGangTrait(gangTraits.PRACTICAL)}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                Trait={gangTraits.QUICK}
                isSelected={trait == gangTraits.QUICK}
                onSelect={() => setGangTrait(gangTraits.QUICK)}
              />
            </View>
          </View>
          <View style={styles.traitRow}>
            <View style={styles.traitButton}>
              <TraitButton
                Trait={gangTraits.SAVAGE}
                isSelected={trait == gangTraits.SAVAGE}
                onSelect={() => setGangTrait(gangTraits.SAVAGE)}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                Trait={gangTraits.SKETCHY}
                isSelected={trait == gangTraits.SKETCHY}
                onSelect={() => setGangTrait(gangTraits.SKETCHY)}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                Trait={gangTraits.SLICK}
                isSelected={trait == gangTraits.SLICK}
                onSelect={() => setGangTrait(gangTraits.SLICK)}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                Trait={gangTraits.SMART}
                isSelected={trait == gangTraits.SMART}
                onSelect={() => setGangTrait(gangTraits.SMART)}
              />
            </View>
          </View>
          <View style={styles.traitRow}>
            <View style={styles.traitButton}>
              <TraitButton
                Trait={gangTraits.STRONG}
                isSelected={trait == gangTraits.STRONG}
                onSelect={() => setGangTrait(gangTraits.STRONG)}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                Trait={gangTraits.TENACIOUS}
                isSelected={trait == gangTraits.TENACIOUS}
                onSelect={() => setGangTrait(gangTraits.TENACIOUS)}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                Trait={gangTraits.TOUGH}
                isSelected={trait == gangTraits.TOUGH}
                onSelect={() => setGangTrait(gangTraits.TOUGH)}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                Trait={gangTraits.UNSTABLE}
                isSelected={trait == gangTraits.UNSTABLE}
                onSelect={() => setGangTrait(gangTraits.UNSTABLE)}
              />
            </View>
          </View>
          <View style={styles.traitRow}>
            <View style={styles.traitButton}>
              <TraitButton
                Trait={gangTraits.WELL_ROUNDED}
                isSelected={trait == gangTraits.WELL_ROUNDED}
                onSelect={() => setGangTrait(gangTraits.WELL_ROUNDED)}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                Trait={gangTraits.WILY}
                isSelected={trait == gangTraits.WILY}
                onSelect={() => setGangTrait(gangTraits.WILY)}
              />
            </View>
          </View>
        </View>
        <View style={styles.navContainer}>
          <OpacityButton
            style={styles.navButton}
            Graphic={BackGraphic}
            sound={sounds.BACK_CANCEL}
            onPress={() => navigation.goBack()}
            width="45%"
          />
          {traitIsSelected && (
            <OpacityButton
              style={styles.navButton}
              Graphic={FinishGraphic}
              sound={sounds.FINISH}
              onPress={() => {
                storeGangTrait(trait);
                navigation.navigate(routes.GAME_NAVIGATOR, {
                  screen: routes.TOOLS,
                  params: { hpModifier: trait.hp },
                });
              }}
              width="45%"
            />
          )}
          {!traitIsSelected && (
            <FinishGraphic style={styles.buttonDisabled} width="45%" />
          )}
        </View>
      </View>
      <View style={styles.bottomContainer} />
    </Screen>
  );
}

export default KFSetupStepThreeScreen;
