import React from "react";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";

import ButtonText from "../assets/buttons/actions/kf_generate_name_btn.svg";

function GenerateNameButton({ onPress }) {
  return (
    <TouchableWithoutFeedback style={styles.container} onPress={onPress}>
      <ButtonText />
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
