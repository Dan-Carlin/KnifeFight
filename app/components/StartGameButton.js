import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { StartGameGraphic } from "../assets/buttons/navigation";

function StartGameButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <StartGameGraphic style={styles.buttonGraphic} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: "85%",
    width: "75%",
  },
  buttonGraphic: {
    bottom: 8,
  },
});

export default StartGameButton;
