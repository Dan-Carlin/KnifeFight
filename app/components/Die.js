import React, { useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";

import {
  D4Graphic,
  D6Graphic,
  D8Graphic,
  D10Graphic,
  D20Graphic,
} from "../assets/buttons/actions";

import Button from "./Button";
import Text from "./Text";

import colors from "../config/colors";
import dieType from "../data/dieTypes";
import gangColors from "../data/gangColors";
import getRandomNumber from "../utils/getRandomNumber";
import sounds from "../assets/sounds/sounds";
import useAudioController from "../hooks/useAudioController";

function Die({
  DieType,
  Color = gangColors.NONE,
  canRoll,
  results,
  resultsCallback,
}) {
  const { playSound } = useAudioController();
  const rollValueHolder = useRef(new Animated.Value(0)).current;

  const rollInterpolation = rollValueHolder.interpolate({
    inputRange: [0, 360],
    outputRange: ["0deg", "360deg"],
  });

  const animatedStyle = {
    transform: [{ rotate: rollInterpolation }],
  };

  const rollDieAnimation = () => {
    rollValueHolder.setValue(0);
    Animated.spring(rollValueHolder, {
      toValue: 720,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const getDieButtonGraphic = () => {
    if (DieType == dieType.D4) return D4Graphic;
    if (DieType == dieType.D6) return D6Graphic;
    if (DieType == dieType.D8) return D8Graphic;
    if (DieType == dieType.D10) return D10Graphic;
    if (DieType == dieType.D20) return D20Graphic;

    return console.log("Invalid die type.");
  };

  const getDieSize = () => {
    if (DieType == dieType.D4) return "55%";
    if (DieType == dieType.D6) return "55%";
    if (DieType == dieType.D8) return "75%";
    if (DieType == dieType.D10) return "82%";
    if (DieType == dieType.D20) return "90%";

    return console.log("Invalid die type.");
  };

  const getHorizontalPosition = () => {
    if (DieType == dieType.D4) return 0;
    if (DieType == dieType.D6) return -8;
    if (DieType == dieType.D8) return 0;
    if (DieType == dieType.D10) return 0;
    if (DieType == dieType.D20) return 0;

    return console.log("Invalid die type.");
  };

  const getVerticalPosition = () => {
    if (DieType == dieType.D4) return 8;
    if (DieType == dieType.D6) return -6;
    if (DieType == dieType.D8) return 6;
    if (DieType == dieType.D10) return 8;
    if (DieType == dieType.D20) return -4;

    return console.log("Invalid die type.");
  };

  const rollDie = () => {
    playSound(sounds.DICE_HIT);
    rollDieAnimation();
    setTimeout(() => {
      resultsCallback({
        name: DieType.name,
        value: getRandomNumber(DieType.sides) + 1,
      });
    }, 500);
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.dieContainer, animatedStyle, { height: getDieSize() }]}
      >
        <DieType.fill style={[styles.fill, { color: Color.normal }]} />
        <DieType.medium style={[styles.fill, { color: Color.medium }]} />
        <DieType.dark style={[styles.fill, { color: Color.dark }]} />
        <DieType.light style={[styles.fill, { color: Color.light }]} />
        <DieType.outline style={styles.outline} />
        {!canRoll && (
          <Text
            style={[
              styles.number,
              {
                bottom: getVerticalPosition(),
                color: Color.text,
                left: getHorizontalPosition(),
                textShadowColor: Color.medium,
              },
            ]}
          >
            {results.value}
          </Text>
        )}
      </Animated.View>
      {canRoll && (
        <View style={styles.rollDieButton}>
          <Button
            Graphic={getDieButtonGraphic()}
            onPress={() => {
              rollDie();
            }}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },
  dieContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  fill: {
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  number: {
    fontFamily: "default",
    fontSize: 60,
    textAlign: "center",
    textShadowRadius: 1,
    textShadowOffset: {
      width: -2,
      height: -2,
    },
  },
  outline: {
    color: colors.black,
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  rollDieButton: {
    height: "40%",
    position: "absolute",
    width: "40%",
  },
});

export default Die;
