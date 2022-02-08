import React from "react";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";

function Button({ Graphic, onPress }) {
  return (
    <TouchableWithoutFeedback style={styles.buttonContainer} onPress={onPress}>
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
