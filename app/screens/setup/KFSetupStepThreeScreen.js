import React from "react";
import { View, StyleSheet } from "react-native";

import { BackGraphic, FinishGraphic } from "../../assets/buttons/navigation";
import CloseButton from "../../components/CloseButton";
import NavButton from "../../components/NavButton";
import routes from "../../navigation/routes";
import Screen from "../../components/Screen";
import Text from "../../components/Text";
import TraitButton from "../../components/TraitButton";
import * as TraitSvgs from "../../assets/traits";

const background = require("../../assets/backgrounds/kf_background_xxxhdpi.png");

function KFSetupStepThreeScreen({ navigation }) {
  return (
    <Screen style={styles.screenContainer} background={background}>
      <View style={styles.topContainer}>
        <View style={styles.closeButton}>
          <CloseButton onPress={() => navigation.popToTop()} />
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>Finally...</Text>
        <Text style={styles.text}>
          Let's select the character trait card you drew.
        </Text>
        <View style={styles.traitGrid}>
          <View style={styles.traitRow}>
            <View style={styles.traitButton}>
              <TraitButton
                trait="Adventurous"
                Graphic={TraitSvgs.Adventurous}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton trait="Aggressive" Graphic={TraitSvgs.Aggressive} />
            </View>
            <View style={styles.traitButton}>
              <TraitButton trait="Brash" Graphic={TraitSvgs.Brash} />
            </View>
            <View style={styles.traitButton}>
              <TraitButton trait="Burly" Graphic={TraitSvgs.Burly} />
            </View>
          </View>
          <View style={styles.traitRow}>
            <View style={styles.traitButton}>
              <TraitButton trait="Cocky" Graphic={TraitSvgs.Cocky} />
            </View>
            <View style={styles.traitButton}>
              <TraitButton trait="Eager" Graphic={TraitSvgs.Eager} />
            </View>
            <View style={styles.traitButton}>
              <TraitButton trait="Fierce" Graphic={TraitSvgs.Fierce} />
            </View>
            <View style={styles.traitButton}>
              <TraitButton trait="Heavy" Graphic={TraitSvgs.Heavy} />
            </View>
          </View>
          <View style={styles.traitRow}>
            <View style={styles.traitButton}>
              <TraitButton trait="Low-Key" Graphic={TraitSvgs.LowKey} />
            </View>
            <View style={styles.traitButton}>
              <TraitButton trait="Lucky" Graphic={TraitSvgs.Lucky} />
            </View>
            <View style={styles.traitButton}>
              <TraitButton trait="Practical" Graphic={TraitSvgs.Practical} />
            </View>
            <View style={styles.traitButton}>
              <TraitButton trait="Quick" Graphic={TraitSvgs.Quick} />
            </View>
          </View>
          <View style={styles.traitRow}>
            <View style={styles.traitButton}>
              <TraitButton trait="Savage" Graphic={TraitSvgs.Savage} />
            </View>
            <View style={styles.traitButton}>
              <TraitButton trait="Sketchy" Graphic={TraitSvgs.Sketchy} />
            </View>
            <View style={styles.traitButton}>
              <TraitButton trait="Slick" Graphic={TraitSvgs.Slick} />
            </View>
            <View style={styles.traitButton}>
              <TraitButton trait="Smart" Graphic={TraitSvgs.Smart} />
            </View>
          </View>
          <View style={styles.traitRow}>
            <View style={styles.traitButton}>
              <TraitButton trait="Strong" Graphic={TraitSvgs.Strong} />
            </View>
            <View style={styles.traitButton}>
              <TraitButton trait="Tenacious" Graphic={TraitSvgs.Tenacious} />
            </View>
            <View style={styles.traitButton}>
              <TraitButton trait="Tough" Graphic={TraitSvgs.Tough} />
            </View>
            <View style={styles.traitButton}>
              <TraitButton trait="Unstable" Graphic={TraitSvgs.Unstable} />
            </View>
          </View>
          <View style={styles.traitRow}>
            <View style={styles.traitButton}>
              <TraitButton
                trait="Well-Rounded"
                Graphic={TraitSvgs.WellRounded}
              />
            </View>
            <View style={styles.traitButton}>
              <TraitButton trait="Wily" Graphic={TraitSvgs.Wily} />
            </View>
          </View>
        </View>
        <View style={styles.navContainer}>
          <NavButton
            style={styles.navButton}
            Graphic={BackGraphic}
            onPress={() => navigation.goBack()}
          />
          <NavButton
            style={styles.navButton}
            Graphic={FinishGraphic}
            onPress={() => navigation.navigate(routes.GAME_NAVIGATOR)}
          />
        </View>
      </View>
      <View style={styles.bottomContainer} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    alignItems: "center",
    flex: 0.75,
    justifyContent: "center",
    paddingHorizontal: 25,
  },
  bottomContainer: {
    alignItems: "center",
    flex: 0.13,
  },
  closeButton: {
    height: 50,
    marginStart: 35,
    marginTop: 20,
    width: 50,
  },
  navButton: {
    height: "100%",
    width: "100%",
  },
  navContainer: {
    flexDirection: "row",
    height: 90,
  },
  screenContainer: {
    flex: 1,
  },
  text: {
    textAlign: "center",
  },
  title: {
    fontFamily: "default",
    fontSize: 50,
    textAlign: "center",
  },
  topContainer: {
    flex: 0.12,
  },
  traitButton: {
    alignItems: "center",
    backgroundColor: "green",
    justifyContent: "center",
    margin: 4,
    width: "22%",
  },
  traitGrid: {
    alignItems: "center",
    height: "70%",
    marginVertical: 6,
    width: "75%",
  },
  traitRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default KFSetupStepThreeScreen;
