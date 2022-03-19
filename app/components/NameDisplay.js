import React from "react";
import { View, StyleSheet } from "react-native";
import { AutoSizeText, ResizeTextMode } from "react-native-auto-size-text";

import Text from "../components/Text";

import colors from "../config/colors";
import gangColors from "../data/gangColors";
import gangTraits from "../data/gangTraits";
import strings from "../config/strings";

const styleDefaults = {
  font: "default",
  borderSize: 2,
  shadowVisible: true,
  bevelVisible: true,
};

function NameDisplay({
  gangName,
  Trait = gangTraits.NONE,
  style = styleDefaults,
  Color = gangColors.NONE,
  descriptionVisible = false,
  isPortrait = false,
  ...props
}) {
  const getNumberOfLines = isPortrait ? 2 : 1;

  return (
    <View style={styles.container} {...props}>
      {style.shadowVisible && (
        <AutoSizeText
          style={[
            styles.gangNameShadow,
            {
              fontFamily: style.font.name,
              // lineHeight: style.font.lineHeight,
              textShadowOffset: {
                width: style.borderSize * 2.5,
                height: style.borderSize * 2.5,
              },
            },
          ]}
          fontSize={200}
          numberOfLines={getNumberOfLines}
          mode={ResizeTextMode.max_lines}
        >
          {gangName}
        </AutoSizeText>
      )}
      {style.bevelVisible && (
        <AutoSizeText
          style={[
            styles.gangNameBevel,
            {
              color: Color.medium,
              fontFamily: style.font.name,
              // lineHeight: style.font.lineHeight,
              textShadowOffset: {
                width: style.borderSize * -1,
                height: style.borderSize,
              },
              textShadowColor: Color.medium,
            },
          ]}
          fontSize={200}
          numberOfLines={getNumberOfLines}
          mode={ResizeTextMode.max_lines}
        >
          {gangName}
        </AutoSizeText>
      )}
      {style.bevelVisible && (
        <AutoSizeText
          style={[
            styles.gangNameBevel,
            {
              color: Color.medium,
              fontFamily: style.font.name,
              // lineHeight: style.font.lineHeight,
              textShadowOffset: {
                width: style.borderSize,
                height: style.borderSize * -1,
              },
              textShadowColor: Color.medium,
            },
          ]}
          fontSize={200}
          numberOfLines={getNumberOfLines}
          mode={ResizeTextMode.max_lines}
        >
          {gangName}
        </AutoSizeText>
      )}
      {style.bevelVisible && (
        <AutoSizeText
          style={[
            styles.gangNameBevel,
            {
              color: Color.light,
              fontFamily: style.font.name,
              // lineHeight: style.font.lineHeight,
              textShadowOffset: {
                width: style.borderSize * -1,
                height: style.borderSize * -1,
              },
              textShadowColor: Color.light,
            },
          ]}
          fontSize={200}
          numberOfLines={getNumberOfLines}
          mode={ResizeTextMode.max_lines}
        >
          {gangName}
        </AutoSizeText>
      )}
      {style.bevelVisible && (
        <AutoSizeText
          style={[
            styles.gangNameBevel,
            {
              color: Color.dark,
              fontFamily: style.font.name,
              // lineHeight: style.font.lineHeight,
              textShadowOffset: {
                width: style.borderSize,
                height: style.borderSize,
              },
              textShadowColor: Color.dark,
            },
          ]}
          fontSize={200}
          numberOfLines={getNumberOfLines}
          mode={ResizeTextMode.max_lines}
        >
          {gangName}
        </AutoSizeText>
      )}
      <AutoSizeText
        style={[
          styles.gangName,
          {
            color: Color.normal,
            fontFamily: style.font.name,
            // lineHeight: style.font.lineHeight,
          },
        ]}
        fontSize={200}
        numberOfLines={getNumberOfLines}
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
    overflow: "visible",
    paddingBottom: 4,
    width: "100%",
  },
  gangName: {
    alignSelf: "center",
    includeFontPadding: false,
    position: "absolute",
    textAlign: "center",
    width: "90%",
    padding: 30,
  },
  gangNameBevel: {
    alignSelf: "center",
    includeFontPadding: false,
    position: "absolute",
    textAlign: "center",
    textShadowRadius: 1,
    width: "90%",
    padding: 30,
  },
  gangNameShadow: {
    alignSelf: "center",
    color: colors.black,
    includeFontPadding: false,
    opacity: 0.5,
    position: "absolute",
    textAlign: "center",
    textShadowRadius: 14,
    textShadowColor: colors.black,
    width: "90%",
    padding: 30,
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
