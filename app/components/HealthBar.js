import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";
import strings from "../config/strings";
import Text from "../components/Text";
import { LinearGradient } from "expo-linear-gradient";

import gangColors from "../data/gangColors";

const healthColors = [
  [colors.gang_medium_cyan, colors.gang_normal_cyan],
  [colors.gang_medium_yellow, colors.gang_normal_yellow],
  [colors.gang_medium_red, colors.gang_normal_red],
];

function HealthBar({ currentHp, initialHp, gangColor = gangColors.NONE }) {
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
      return (currentHp * 100) / initialHp + "%";
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.barContainer}>
        <View style={styles.barBorder}>
          <LinearGradient
            style={{
              height: "100%",
              width: getHealthBarLength(),
            }}
            colors={getHealthBarColors()}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          />
          <Text style={styles.hpText}>
            <Text style={styles.numberText}>
              {currentHp <= initialHp ? currentHp : initialHp}
            </Text>
            <Text
              style={{
                color: gangColor.light,
                fontFamily: "default",
                fontSize: 40,
                lineHeight: 80,
              }}
            >
              {strings.app_hp_label}
            </Text>
          </Text>
        </View>
        {currentHp > initialHp && (
          <View style={styles.extraHpContainer}>
            <Text style={styles.extraHpText}>+{currentHp - initialHp}</Text>
          </View>
        )}
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
    width: "90%",
  },
  barContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  container: {
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
