import React from "react";
import { View, StyleSheet } from "react-native";

import { MinusGraphic, PlusGraphic } from "../assets/buttons/actions";

import Button from "./Button";
import Text from "./Text";

import gangColors from "../data/gangColors";
import getRandomNumber from "../utils/getRandomNumber";
import sounds from "../assets/sounds/sounds";
import strings from "../config/strings";

function HPCounter({
  Color = gangColors.NONE,
  hpValue,
  decreaseHp,
  increaseHp,
  ...props
}) {
  const minusHpSounds = [sounds.MINUS_A, sounds.MINUS_B, sounds.MINUS_C];

  return (
    <View style={styles.container}>
      <View style={styles.hpButtons}>
        <Button
          testID="hpc_btn_minus"
          Graphic={MinusGraphic}
          sound={minusHpSounds[getRandomNumber(3)]}
          onPress={decreaseHp}
        />
      </View>
      <View style={styles.valueContainer}>
        <Text
          style={[
            styles.hpLabel,
            {
              color: Color.light,
            },
          ]}
        >
          {strings.app_hp_label}
        </Text>
        <Text {...props} style={styles.number}>
          {hpValue}
        </Text>
      </View>
      <View style={styles.hpButtons}>
        <Button
          testID="hpc_btn_plus"
          Graphic={PlusGraphic}
          sound={sounds.PLUS}
          onPress={increaseHp}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: "100%",
    width: "100%",
  },
  hpButtons: {
    flex: 0.18,
    paddingTop: 45,
  },
  hpLabel: {
    bottom: -10,
    fontFamily: "default",
    fontSize: 70,
    textAlign: "center",
  },
  number: {
    bottom: 15,
    fontSize: 90,
    fontWeight: "bold",
    textAlign: "center",
  },
  valueContainer: {
    flex: 0.64,
    justifyContent: "center",
  },
});

export default HPCounter;
