import React from "react";
import { View, StyleSheet, Pressable } from "react-native";

import { CheckGraphic, CheckboxGraphic } from "../assets/buttons/actions";
import Player from "../utils/Player";
import sounds from "../assets/sounds/sounds";

function Checkbox({ onSelect, checked = true, ...props }) {
  function onCheckmarkPress() {
    Player.playSound(sounds.CHECKBOX);
    checked = !checked;
    onSelect();
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        {...props}
        style={styles.checkboxBase}
        onPress={onCheckmarkPress}
      >
        <CheckboxGraphic style={styles.checkboxBorder} />

        {checked && (
          <View style={styles.select}>
            <CheckGraphic />
          </View>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: "100%",
    width: "100%",
  },
  checkboxBase: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },
  checkboxBorder: {
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  select: {
    height: "60%",
    position: "absolute",
    width: "60%",
  },
});

export default Checkbox;
