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
  style,
  Color = gangColors.NONE,
  descriptionVisible = false,
}) {
  return (
    <View style={styles.container}>
      {style.shadowVisible && (
        <AutoSizeText
          style={{
            alignSelf: "center",
            color: colors.black,
            fontFamily: style.font,
            includeFontPadding: false,
            opacity: 0.5,
            position: "absolute",
            textAlign: "center",
            textShadowOffset: {
              width: style.borderSize * 2.5,
              height: style.borderSize * 2.5,
            },
            textShadowRadius: 14,
            textShadowColor: colors.black,
            width: "90%",
          }}
          fontSize={200}
          numberOfLines={1}
          mode={ResizeTextMode.max_lines}
        >
          {gangName}
        </AutoSizeText>
      )}
      {style.bevelVisible && (
        <AutoSizeText
          style={{
            alignSelf: "center",
            color: Color.normal,
            fontFamily: style.font,
            includeFontPadding: false,
            position: "absolute",
            textAlign: "center",
            textShadowOffset: {
              width: style.borderSize * -1,
              height: style.borderSize,
            },
            textShadowRadius: 1,
            textShadowColor: Color.medium,
            width: "90%",
          }}
          fontSize={200}
          numberOfLines={1}
          mode={ResizeTextMode.max_lines}
        >
          {gangName}
        </AutoSizeText>
      )}
      {style.bevelVisible && (
        <AutoSizeText
          style={{
            alignSelf: "center",
            color: Color.normal,
            fontFamily: style.font,
            includeFontPadding: false,
            position: "absolute",
            textAlign: "center",
            textShadowOffset: {
              width: style.borderSize,
              height: style.borderSize * -1,
            },
            textShadowRadius: 1,
            textShadowColor: Color.medium,
            width: "90%",
          }}
          fontSize={200}
          numberOfLines={1}
          mode={ResizeTextMode.max_lines}
        >
          {gangName}
        </AutoSizeText>
      )}
      {style.bevelVisible && (
        <AutoSizeText
          style={{
            alignSelf: "center",
            color: Color.normal,
            fontFamily: style.font,
            includeFontPadding: false,
            position: "absolute",
            textAlign: "center",
            textShadowOffset: {
              width: style.borderSize * -1,
              height: style.borderSize * -1,
            },
            textShadowRadius: 1,
            textShadowColor: Color.light,
            width: "90%",
          }}
          fontSize={200}
          numberOfLines={1}
          mode={ResizeTextMode.max_lines}
        >
          {gangName}
        </AutoSizeText>
      )}
      {style.bevelVisible && (
        <AutoSizeText
          style={{
            alignSelf: "center",
            color: Color.normal,
            fontFamily: style.font,
            includeFontPadding: false,
            position: "absolute",
            textAlign: "center",
            textShadowOffset: {
              width: style.borderSize,
              height: style.borderSize,
            },
            textShadowRadius: 1,
            textShadowColor: Color.dark,
            width: "90%",
          }}
          fontSize={200}
          numberOfLines={1}
          mode={ResizeTextMode.max_lines}
        >
          {gangName}
        </AutoSizeText>
      )}
      <AutoSizeText
        style={{
          alignSelf: "center",
          color: Color.normal,
          fontFamily: style.font,
          includeFontPadding: false,
          position: "absolute",
          textAlign: "center",
          width: "90%",
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
    paddingBottom: 4,
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
