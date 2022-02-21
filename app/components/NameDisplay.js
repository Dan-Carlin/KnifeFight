import React from "react";
import { View, StyleSheet } from "react-native";
import { AutoSizeText, ResizeTextMode } from "react-native-auto-size-text";

import Text from "../components/Text";

import colors from "../config/colors";
import gangColors from "../data/gangColors";
import gangTraits from "../data/gangTraits";
import strings from "../config/strings";

function NameDisplay({
  gangName,
  Trait = gangTraits.NONE,
  font,
  Color = gangColors.NONE,
  descriptionVisible = false,
}) {
  return (
    <View style={styles.container}>
      <AutoSizeText
        style={{
          alignSelf: "flex-start",
          color: Color.normal,
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
          <Text style={styles.traitName}>{Trait.name}</Text>
          <Text style={styles.text}>{strings.name_display_text_b}</Text>
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },
  text: {
    color: colors.light,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  traitName: {
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: "center",
  },
  traitTextContainer: {
    alignSelf: "flex-end",
    textAlign: "center",
    position: "absolute",
  },
});

export default NameDisplay;
