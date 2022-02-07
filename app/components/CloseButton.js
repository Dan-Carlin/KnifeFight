import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { CloseGraphic } from "../assets/buttons/navigation";

function CloseButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <CloseGraphic />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: "100%",
    width: "100%",
  },
});

export default CloseButton;
