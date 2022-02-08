import React from "react";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";

import { GenerateNameGraphic } from "../assets/buttons/actions";

function GenerateNameButton({ onPress }) {
  return (
    <TouchableWithoutFeedback style={styles.container} onPress={onPress}>
      <GenerateNameGraphic />
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
});

export default GenerateNameButton;
