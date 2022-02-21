import React from "react";
import { StyleSheet, Pressable } from "react-native";

import { Select } from "../assets/buttons/colors/index";

function ColorButton({ Color, isSelected, onSelect, testID }) {
  function onCheckmarkPress() {
    onSelect();
  }

  return (
    <>
      <Color.svg style={styles.colorGraphic} />
      <Pressable
        testID={testID}
        style={styles.checkboxBase}
        onPress={onCheckmarkPress}
      >
        {isSelected && <Select style={styles.colorSelect} />}
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  checkboxBase: {
    height: "100%",
    width: "100%",
  },
  colorGraphic: {
    height: "90%",
    position: "absolute",
    width: "90%",
  },
  colorSelect: {
    height: "100%",
    width: "100%",
  },
});

export default ColorButton;
