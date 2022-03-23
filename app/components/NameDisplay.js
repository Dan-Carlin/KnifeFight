import React, { useEffect, useState } from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";

import Text from "./Text";

import colors from "../config/colors";
import gangColors from "../data/gangColors";
import gangTraits from "../data/gangTraits";
import strings from "../config/strings";
import traitColors from "../data/traitColors";

const traitColorArray = [
  traitColors.NONE,
  traitColors.BLUE,
  traitColors.PURPLE,
  traitColors.YELLOW,
  traitColors.GREEN,
  traitColors.RED,
];

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
  ...props
}) {
  const window = useWindowDimensions();

  const isPortrait = window.width < window.height;

  const traitColorIndex = Trait ? Trait.colorId : 0;

  const [fontIsAdjusted, setFontIsAdjusted] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setFontIsAdjusted(true);
    }, 50);

    return () => {
      clearTimeout(timer);
    };
  }, [window]);

  return (
    <View style={styles.container} {...props}>
      <View style={styles.nameLine}>
        {style.shadowVisible && (
          <Text
            style={[
              styles.gangNameShadow,
              {
                fontFamily: style.font,
                textShadowOffset: {
                  width: style.borderSize * 2.5,
                  height: style.borderSize * 2.5,
                },
              },
            ]}
            numberOfLines={1}
            adjustsFontSizeToFit={fontIsAdjusted}
          >
            {isPortrait ? gangName[0] : `${gangName[0]} ${gangName[1]}`}
          </Text>
        )}
        {style.bevelVisible && (
          <Text
            style={[
              styles.gangNameBevel,
              {
                color: traitColorArray[traitColorIndex].medium,
                fontFamily: style.font,
                textShadowOffset: {
                  width: style.borderSize * -1,
                  height: style.borderSize,
                },
                textShadowColor: traitColorArray[traitColorIndex].medium,
              },
            ]}
            numberOfLines={1}
            adjustsFontSizeToFit={fontIsAdjusted}
          >
            {isPortrait ? gangName[0] : `${gangName[0]} ${gangName[1]}`}
          </Text>
        )}
        {style.bevelVisible && (
          <Text
            style={[
              styles.gangNameBevel,
              {
                color: traitColorArray[traitColorIndex].medium,
                fontFamily: style.font,
                textShadowOffset: {
                  width: style.borderSize,
                  height: style.borderSize * -1,
                },
                textShadowColor: traitColorArray[traitColorIndex].medium,
              },
            ]}
            numberOfLines={1}
            adjustsFontSizeToFit={fontIsAdjusted}
          >
            {isPortrait ? gangName[0] : `${gangName[0]} ${gangName[1]}`}
          </Text>
        )}
        {style.bevelVisible && (
          <Text
            style={[
              styles.gangNameBevel,
              {
                color: traitColorArray[traitColorIndex].light,
                fontFamily: style.font,
                textShadowOffset: {
                  width: style.borderSize * -1,
                  height: style.borderSize * -1,
                },
                textShadowColor: traitColorArray[traitColorIndex].light,
              },
            ]}
            numberOfLines={1}
            adjustsFontSizeToFit={fontIsAdjusted}
          >
            {isPortrait ? gangName[0] : `${gangName[0]} ${gangName[1]}`}
          </Text>
        )}
        {style.bevelVisible && (
          <Text
            style={[
              styles.gangNameBevel,
              {
                color: traitColorArray[traitColorIndex].dark,
                fontFamily: style.font,
                textShadowOffset: {
                  width: style.borderSize,
                  height: style.borderSize,
                },
                textShadowColor: traitColorArray[traitColorIndex].dark,
              },
            ]}
            numberOfLines={1}
            adjustsFontSizeToFit={fontIsAdjusted}
          >
            {isPortrait ? gangName[0] : `${gangName[0]} ${gangName[1]}`}
          </Text>
        )}
        <Text
          style={[
            styles.gangName,
            {
              color: Color.normal,
              fontFamily: style.font,
            },
          ]}
          numberOfLines={1}
          adjustsFontSizeToFit={fontIsAdjusted}
        >
          {isPortrait ? gangName[0] : `${gangName[0]} ${gangName[1]}`}
        </Text>
      </View>
      {isPortrait && (
        <View style={styles.nameLine}>
          {style.shadowVisible && (
            <Text
              style={[
                styles.gangNameShadow,
                {
                  fontFamily: style.font,
                  textShadowOffset: {
                    width: style.borderSize * 2.5,
                    height: style.borderSize * 2.5,
                  },
                },
              ]}
              numberOfLines={1}
              adjustsFontSizeToFit={fontIsAdjusted}
            >
              {gangName[1]}
            </Text>
          )}
          {style.bevelVisible && (
            <Text
              style={[
                styles.gangNameBevel,
                {
                  color: traitColorArray[traitColorIndex].medium,
                  fontFamily: style.font,
                  textShadowOffset: {
                    width: style.borderSize * -1,
                    height: style.borderSize,
                  },
                  textShadowColor: traitColorArray[traitColorIndex].medium,
                },
              ]}
              numberOfLines={1}
              adjustsFontSizeToFit={fontIsAdjusted}
            >
              {gangName[1]}
            </Text>
          )}
          {style.bevelVisible && (
            <Text
              style={[
                styles.gangNameBevel,
                {
                  color: traitColorArray[traitColorIndex].medium,
                  fontFamily: style.font,
                  textShadowOffset: {
                    width: style.borderSize,
                    height: style.borderSize * -1,
                  },
                  textShadowColor: traitColorArray[traitColorIndex].medium,
                },
              ]}
              numberOfLines={1}
              adjustsFontSizeToFit={fontIsAdjusted}
            >
              {gangName[1]}
            </Text>
          )}
          {style.bevelVisible && (
            <Text
              style={[
                styles.gangNameBevel,
                {
                  color: traitColorArray[traitColorIndex].light,
                  fontFamily: style.font,
                  textShadowOffset: {
                    width: style.borderSize * -1,
                    height: style.borderSize * -1,
                  },
                  textShadowColor: traitColorArray[traitColorIndex].light,
                },
              ]}
              numberOfLines={1}
              adjustsFontSizeToFit={fontIsAdjusted}
            >
              {gangName[1]}
            </Text>
          )}
          {style.bevelVisible && (
            <Text
              style={[
                styles.gangNameBevel,
                {
                  color: traitColorArray[traitColorIndex].dark,
                  fontFamily: style.font,
                  textShadowOffset: {
                    width: style.borderSize,
                    height: style.borderSize,
                  },
                  textShadowColor: traitColorArray[traitColorIndex].dark,
                },
              ]}
              numberOfLines={1}
              adjustsFontSizeToFit={fontIsAdjusted}
            >
              {gangName[1]}
            </Text>
          )}
          <Text
            style={[
              styles.gangName,
              {
                color: Color.normal,
                fontFamily: style.font,
              },
            ]}
            numberOfLines={1}
            adjustsFontSizeToFit={fontIsAdjusted}
          >
            {gangName[1]}
          </Text>
        </View>
      )}
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
    height: "100%",
    justifyContent: "center",
    overflow: "visible",
    width: "100%",
  },
  gangName: {
    alignSelf: "center",
    fontSize: 200,
    includeFontPadding: false,
    position: "absolute",
    textAlign: "center",
    width: "100%",
    padding: 30,
  },
  gangNameBevel: {
    alignSelf: "center",
    fontSize: 200,
    includeFontPadding: false,
    position: "absolute",
    textAlign: "center",
    textShadowRadius: 1,
    width: "100%",
    padding: 30,
  },
  gangNameShadow: {
    alignSelf: "center",
    fontSize: 200,
    color: colors.black,
    includeFontPadding: false,
    opacity: 0.5,
    position: "absolute",
    textAlign: "center",
    textShadowRadius: 14,
    textShadowColor: colors.black,
    width: "100%",
    padding: 30,
  },
  nameLine: {
    alignItems: "center",
    height: "50%",
    justifyContent: "center",
    overflow: "visible",
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
    alignSelf: "center",
    bottom: 0,
    textAlign: "center",
    position: "absolute",
  },
});

export default NameDisplay;
