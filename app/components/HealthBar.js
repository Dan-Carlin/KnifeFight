import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { MinusBGraphic, PlusBGraphic } from "../assets/buttons/actions";

import Button from "./Button";
import Text from "../components/Text";

import colors from "../config/colors";
import gangColors from "../data/gangColors";
import getRandomNumber from "../utils/getRandomNumber";
import sounds from "../assets/sounds/sounds";
import strings from "../config/strings";

const healthColors = [
  [colors.gang_medium_cyan, colors.gang_normal_cyan],
  [colors.gang_medium_yellow, colors.gang_normal_yellow],
  [colors.gang_medium_red, colors.gang_normal_red],
];

const MAX_PERCENT = 100;

function HealthBar({
  currentHp,
  decreaseHp,
  increaseHp,
  initialHp,
  flexWidth,
  gangColor = gangColors.NONE,
  ...props
}) {
  const minusHpSounds = [sounds.MINUS_A, sounds.MINUS_B, sounds.MINUS_C];

  const getHealthBarColors = () => {
    if (currentHp <= initialHp / 6) {
      return healthColors[2];
    } else if (currentHp > initialHp / 6 && currentHp <= initialHp / 3) {
      return healthColors[1];
    } else {
      return healthColors[0];
    }
  };

  const getHealthBarLength = () => {
    if (currentHp <= initialHp) {
      return (currentHp * MAX_PERCENT) / initialHp + "%";
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.hpButtons, { flex: (1 - flexWidth) / 2 }]}>
        <Button
          Graphic={MinusBGraphic}
          onPress={decreaseHp}
          sound={minusHpSounds[getRandomNumber(3)]}
        />
      </View>
      <View style={[styles.barContainer, { flex: flexWidth }]}>
        <View style={styles.barBorder}>
          <LinearGradient
            style={{
              height: "100%",
              width: getHealthBarLength(),
            }}
            colors={getHealthBarColors()}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            testID="comp_healthBar_bar"
          />
          <Text style={styles.hpText}>
            <Text style={styles.numberText} {...props}>
              {currentHp <= initialHp ? currentHp : initialHp}
            </Text>
            <Text
              style={{
                color: gangColor.light,
                fontFamily: "default",
                fontSize: 40,
                lineHeight: 80,
              }}
              testID="comp_healthBar_hpLabel"
            >
              {strings.app_hp_label}
            </Text>
          </Text>
        </View>
        {currentHp > initialHp && (
          <View
            style={styles.extraHpContainer}
            testID="comp_healthBar_extraHpContainer"
          >
            <Text style={styles.extraHpText} testID="comp_healthBar_extraHp">
              +{currentHp - initialHp}
            </Text>
          </View>
        )}
      </View>
      <View style={[styles.hpButtons, { flex: (1 - flexWidth) / 2 }]}>
        <Button
          Graphic={PlusBGraphic}
          onPress={increaseHp}
          sound={sounds.PLUS}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  barBorder: {
    borderColor: colors.light,
    borderWidth: 6,
    height: "65%",
    justifyContent: "center",
    overflow: "hidden",
    padding: 4,
    width: "95%",
  },
  barContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    height: "100%",
    width: "100%",
  },
  extraHpContainer: {
    alignItems: "center",
    alignSelf: "flex-end",
    backgroundColor: colors.gang_normal_green,
    borderColor: colors.gang_light_green,
    borderRadius: 50,
    borderWidth: 6,
    bottom: 30,
    justifyContent: "center",
    padding: 10,
    position: "absolute",
  },
  extraHpText: {
    color: colors.white,
    fontFamily: "default",
    fontSize: 60,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  hpButtons: {
    opacity: 0.8,
  },
  hpText: {
    alignSelf: "center",
    position: "absolute",
    textAlign: "center",
  },
  numberText: {
    fontSize: 40,
    fontWeight: "bold",
  },
});

export default HealthBar;
