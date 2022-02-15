import React from "react";
import { View, StyleSheet } from "react-native";
import { AutoSizeText, ResizeTextMode } from "react-native-auto-size-text";

import Text from "../components/Text";

import colors from "../config/colors";
import strings from "../config/strings";

function NameDisplay({
  gangName,
  gangTrait,
  font,
  color,
  descriptionVisible = false,
}) {
  return (
    <View style={styles.container}>
      <AutoSizeText
        style={{
          color: color,
          fontFamily: font,
          textAlign: "center",
          width: "94%",
        }}
        fontSize={200}
        numberOfLines={1}
        mode={ResizeTextMode.max_lines}
      >
        {gangName}
      </AutoSizeText>
      {descriptionVisible && (
        <Text style={styles.traitTextContainer}>
          <Text style={styles.text}>{strings.name_display_text_a}</Text>
          <Text style={styles.traitName}>{gangTrait}</Text>
          <Text style={styles.text}>{strings.name_display_text_b}</Text>
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },
  text: {
    color: colors.light,
    fontWeight: "bold",
    textAlign: "center",
  },
  traitName: {
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: "center",
  },
  traitTextContainer: {
    textAlign: "center",
  },
});

export default NameDisplay;
