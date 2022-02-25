import React from "react";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";

import Player from "../utils/Player";

function Button({ Graphic, onPress, testID, sound }) {
  return (
    <TouchableWithoutFeedback
      testID={testID}
      style={styles.buttonContainer}
      onPress={() => {
        Player.playSound(sound);
        onPress();
      }}
    >
      <Graphic />
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: "100%",
    width: "100%",
  },
});

export default Button;
