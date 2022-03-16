import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

import defaultStyles from "../config/styles";

function AppTextInput({ width = "100%", ...props }) {
  return (
    <View style={[styles.container, { width: width }]}>
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.text}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    backgroundColor: defaultStyles.colors.dark,
    borderColor: defaultStyles.colors.light,
    borderRadius: 30,
    borderWidth: 2,
    padding: 10,
  },
});

export default AppTextInput;
