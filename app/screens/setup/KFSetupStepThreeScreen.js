/*
KFSetupStepThreeScreen - View for the third setup screen.
*/

// External libraries
import React, { useState, useEffect } from "react";
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
  const [settings, setSettings] = useState({
    baseHp: "0",
    soundEnabled: true,
    showPopup: true,
  });

  const [trait, setTrait] = useState(gangTraits.NONE);
  const [traitIsSelected, setTraitIsSelected] = useState(false);

  const getSettings = async () => {
    try {
      const settingsValue = await AsyncStorage.getItem("@settings");
      if (settingsValue !== null) {
        const settings = JSON.parse(settingsValue);
        console.log(settings);
        setSettings(settings);
      }
    } catch (e) {
      console.log(e);
    }
  };

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

  useEffect(() => {
    getSettings();
  }, []);

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
                testID="st3_btn_adventurous"
                Trait={gangTraits.ADVENTUROUS}
                isSelected={trait == gangTraits.ADVENTUROUS}
                onSelect={() => setGangTrait(gangTraits.ADVENTUROUS)}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                testID="st3_btn_aggressive"
                Trait={gangTraits.AGGRESSIVE}
                isSelected={trait == gangTraits.AGGRESSIVE}
                onSelect={() => setGangTrait(gangTraits.AGGRESSIVE)}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                testID="st3_btn_brash"
                Trait={gangTraits.BRASH}
                isSelected={trait == gangTraits.BRASH}
                onSelect={() => setGangTrait(gangTraits.BRASH)}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                testID="st3_btn_burly"
                Trait={gangTraits.BURLY}
                isSelected={trait == gangTraits.BURLY}
                onSelect={() => setGangTrait(gangTraits.BURLY)}
              />
            </View>
          </View>
          <View style={styles.traitRow}>
            <View style={styles.traitButton}>
              <TraitButton
                testID="st3_btn_cocky"
                Trait={gangTraits.COCKY}
                isSelected={trait == gangTraits.COCKY}
                onSelect={() => setGangTrait(gangTraits.COCKY)}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                testID="st3_btn_eager"
                Trait={gangTraits.EAGER}
                isSelected={trait == gangTraits.EAGER}
                onSelect={() => setGangTrait(gangTraits.EAGER)}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                testID="st3_btn_fierce"
                Trait={gangTraits.FIERCE}
                isSelected={trait == gangTraits.FIERCE}
                onSelect={() => setGangTrait(gangTraits.FIERCE)}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                testID="st3_btn_heavy"
                Trait={gangTraits.HEAVY}
                isSelected={trait == gangTraits.HEAVY}
                onSelect={() => setGangTrait(gangTraits.HEAVY)}
              />
            </View>
          </View>
          <View style={styles.traitRow}>
            <View style={styles.traitButton}>
              <TraitButton
                testID="st3_btn_lowKey"
                Trait={gangTraits.LOW_KEY}
                isSelected={trait == gangTraits.LOW_KEY}
                onSelect={() => setGangTrait(gangTraits.LOW_KEY)}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                testID="st3_btn_lucky"
                Trait={gangTraits.LUCKY}
                isSelected={trait == gangTraits.LUCKY}
                onSelect={() => setGangTrait(gangTraits.LUCKY)}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                testID="st3_btn_practical"
                Trait={gangTraits.PRACTICAL}
                isSelected={trait == gangTraits.PRACTICAL}
                onSelect={() => setGangTrait(gangTraits.PRACTICAL)}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                testID="st3_btn_quick"
                Trait={gangTraits.QUICK}
                isSelected={trait == gangTraits.QUICK}
                onSelect={() => setGangTrait(gangTraits.QUICK)}
              />
            </View>
          </View>
          <View style={styles.traitRow}>
            <View style={styles.traitButton}>
              <TraitButton
                testID="st3_btn_savage"
                Trait={gangTraits.SAVAGE}
                isSelected={trait == gangTraits.SAVAGE}
                onSelect={() => setGangTrait(gangTraits.SAVAGE)}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                testID="st3_btn_sketchy"
                Trait={gangTraits.SKETCHY}
                isSelected={trait == gangTraits.SKETCHY}
                onSelect={() => setGangTrait(gangTraits.SKETCHY)}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                testID="st3_btn_slick"
                Trait={gangTraits.SLICK}
                isSelected={trait == gangTraits.SLICK}
                onSelect={() => setGangTrait(gangTraits.SLICK)}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                testID="st3_btn_smart"
                Trait={gangTraits.SMART}
                isSelected={trait == gangTraits.SMART}
                onSelect={() => setGangTrait(gangTraits.SMART)}
              />
            </View>
          </View>
          <View style={styles.traitRow}>
            <View style={styles.traitButton}>
              <TraitButton
                testID="st3_btn_strong"
                Trait={gangTraits.STRONG}
                isSelected={trait == gangTraits.STRONG}
                onSelect={() => setGangTrait(gangTraits.STRONG)}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                testID="st3_btn_tenacious"
                Trait={gangTraits.TENACIOUS}
                isSelected={trait == gangTraits.TENACIOUS}
                onSelect={() => setGangTrait(gangTraits.TENACIOUS)}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                testID="st3_btn_tough"
                Trait={gangTraits.TOUGH}
                isSelected={trait == gangTraits.TOUGH}
                onSelect={() => setGangTrait(gangTraits.TOUGH)}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                testID="st3_btn_unstable"
                Trait={gangTraits.UNSTABLE}
                isSelected={trait == gangTraits.UNSTABLE}
                onSelect={() => setGangTrait(gangTraits.UNSTABLE)}
              />
            </View>
          </View>
          <View style={styles.traitRow}>
            <View style={styles.traitButton}>
              <TraitButton
                testID="st3_btn_wellRounded"
                Trait={gangTraits.WELL_ROUNDED}
                isSelected={trait == gangTraits.WELL_ROUNDED}
                onSelect={() => setGangTrait(gangTraits.WELL_ROUNDED)}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton
                testID="st3_btn_wily"
                Trait={gangTraits.WILY}
                isSelected={trait == gangTraits.WILY}
                onSelect={() => setGangTrait(gangTraits.WILY)}
              />
            </View>
          </View>
        </View>
        <View style={styles.navContainer}>
          <OpacityButton
            testID="st3_btn_back"
            style={styles.navButton}
            Graphic={BackGraphic}
            sound={sounds.BACK_CANCEL}
            onPress={() => navigation.goBack()}
            width="45%"
          />
          {traitIsSelected && (
            <OpacityButton
              testID="st3_btn_finish"
              style={styles.navButton}
              Graphic={FinishGraphic}
              sound={sounds.FINISH}
              onPress={() => {
                storeGangTrait(trait);
                navigation.navigate(routes.GAME_NAVIGATOR, {
                  screen: routes.TOOLS,
                  params: { hpModifier: trait.hp, settings: settings },
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
