import React from "react";
import { View, StyleSheet } from "react-native";
import { AutoSizeText, ResizeTextMode } from "react-native-auto-size-text";

import colors from "../config/colors";
import Text from "../components/Text";
import { LinearGradient } from "expo-linear-gradient";

import gangColors from "../data/gangColors";

const healthColors = [
  [colors.gang_medium_cyan, colors.gang_normal_cyan],
  [colors.gang_medium_yellow, colors.gang_normal_yellow],
  [colors.gang_medium_red, colors.gang_normal_red],
];

function HealthBar({ hpValue, gangColor = gangColors.NONE }) {
  const getHealthBarColors = () => {
    if (hpValue <= 3) {
      return healthColors[2];
    } else if (hpValue > 3 && hpValue <= 8) {
      return healthColors[1];
    } else {
      return healthColors[0];
    }
  };

  const getHealthBarLength = () => {
    if (hpValue <= 25) {
      return hpValue * 4 + "%";
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.numberContainer}>
        <Text style={styles.hpText}>
          <AutoSizeText
            style={styles.numberText}
            fontSizePresets={[64, 42, 24]}
            numberOfLines={1}
            mode={ResizeTextMode.preset_font_sizes}
          >
            {hpValue <= 25 ? hpValue : 25}
          </AutoSizeText>
          <Text
            style={{
              color: gangColor.normal,
              fontFamily: "default",
              fontSize: 70,
              lineHeight: 80,
            }}
          >
            HP
          </Text>
        </Text>
      </View>
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
        </View>
        {hpValue > 25 && (
          <View style={styles.extraHpContainer}>
            <Text style={styles.extraHpText}>+{hpValue - 25}</Text>
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
    height: "60%",
    overflow: "hidden",
    padding: 8,
    width: "90%",
  },
  barContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0.5,
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
    textAlign: "center",
  },
  numberContainer: {
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 0.5,
  },
  numberText: {
    fontSize: 70,
    fontWeight: "bold",
  },
});

export default HealthBar;
