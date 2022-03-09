import React from "react";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";

import useAudioController from "../hooks/useAudioController";

function Button({ Graphic, onPress, sound, ...props }) {
  const { playSound } = useAudioController();

  return (
    <TouchableWithoutFeedback
      {...props}
      style={styles.buttonContainer}
      onPress={() => {
        playSound(sound);
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
