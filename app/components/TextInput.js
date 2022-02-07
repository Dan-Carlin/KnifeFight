import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

import defaultStyles from "../config/styles";

function AppTextInput({ width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: defaultStyles.colors.dark,
    borderColor: defaultStyles.colors.light,
    borderRadius: 30,
    borderWidth: 2,
    marginVertical: 10,
    padding: 15,
  },
});

export default AppTextInput;
