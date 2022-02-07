import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

function NavButton({ Graphic, onPress }) {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Graphic />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: "100%",
    width: "50%",
  },
});

export default NavButton;
