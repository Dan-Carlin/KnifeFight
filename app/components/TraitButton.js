import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { AutoSizeText, ResizeTextMode } from "react-native-auto-size-text";

import colors from "../config/colors";
import Text from "../components/Text";

function TraitButton({ checked, onChange, trait, Graphic }) {
  function onCheckmarkPress() {
    onChange(!checked);
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.checkboxBase} onPress={onCheckmarkPress}>
        <Graphic style={styles.traitGraphic} />
        <AutoSizeText
          style={styles.traitName}
          fontSize={12}
          numberOfLines={1}
          mode={ResizeTextMode.max_lines}
        >
          {trait}
        </AutoSizeText>
        {checked && <View style={styles.traitSelect} />}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "black",
    height: "100%",
    width: "100%",
  },
  checkboxBase: {
    alignItems: "center",
    borderColor: colors.dark,
    borderWidth: 1,
    height: "100%",
    justifyContent: "flex-end",
    width: "100%",
  },
  traitGraphic: {
    height: "82%",
    width: "82%",
  },
  traitName: {
    color: colors.light,
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
  },
  traitSelect: {
    backgroundColor: "#fff8",
    borderColor: colors.white,
    borderWidth: 6,
    height: "100%",
    width: "100%",
  },
});

export default TraitButton;
