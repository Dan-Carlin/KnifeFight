import React from "react";
import { View, StyleSheet, Pressable } from "react-native";

import { CloseGraphic } from "../assets/buttons/navigation";

import OpacityButton from "./OpacityButton";
import Text from "../components/Text";

import colors from "../config/colors";
import strings from "../config/strings";

function RollResults({ results, onClose }) {
  const getText = () => {
    if (results.value == 8 || results.value == 11 || results.value == 18) {
      return strings.roll_results_text_b;
    } else {
      return strings.roll_results_text_a;
    }
  };

  const getNumberColor = () => {
    if (results.value == 1 && results.name == "D20") {
      return colors.gang_light_red;
    } else if (results.value == 20) {
      return colors.gang_light_green;
    } else {
      return colors.white;
    }
  };

  return (
    <Pressable style={styles.container} onPress={onClose}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{strings.roll_results_title}</Text>
        <View style={styles.closeButton}>
          <OpacityButton Graphic={CloseGraphic} onPress={onClose} />
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.bodyText}>{getText()}</Text>
        <Text style={[styles.number, { color: getNumberColor() }]}>
          {results.value}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 0.7,
    padding: 5,
  },
  bodyText: {
    color: colors.light,
    textAlign: "center",
  },
  closeButton: {
    height: "100%",
    paddingEnd: 4,
    width: "20%",
  },
  container: {
    backgroundColor: colors.dark,
    borderColor: colors.black,
    borderRadius: 20,
    borderWidth: 2,
    height: 140,
    overflow: "hidden",
    width: 160,
  },
  number: {
    bottom: 5,
    fontSize: 60,
    fontWeight: "bold",
    includeFontPadding: false,
    textAlign: "center",
  },
  title: {
    fontFamily: "default",
    fontSize: 36,
    paddingStart: 4,
    width: "80%",
  },
  titleContainer: {
    alignItems: "center",
    backgroundColor: "#0005",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    borderBottomColor: colors.black,
    borderEndColor: colors.black,
    borderStartColor: colors.light,
    borderTopColor: colors.light,
    borderWidth: 2,
    flex: 0.3,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 4,
  },
});

export default RollResults;
