import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";

import Text from "./Text";

function LastRollBox({ results }) {
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
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Last roll:</Text>
      </View>
      <View style={styles.valueContainer}>
        <Text style={styles.resultsText}>
          <Text style={styles.name}>{results.name}</Text>
          <Text style={styles.separator}>{"|"}</Text>
          <Text style={[styles.value, { color: getNumberColor() }]}>
            {results.value}
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: colors.white,
    borderWidth: 1,
    height: "100%",
    width: "100%",
  },
  resultsText: {
    textAlign: "center",
  },
  separator: {
    color: colors.medium,
    fontSize: 36,
  },
  title: {
    color: colors.light,
    fontWeight: "bold",
    textAlign: "center",
  },
  titleContainer: {
    borderColor: colors.light,
    borderWidth: 1,
    flex: 0.3,
    justifyContent: "center",
  },
  valueContainer: {
    borderColor: colors.light,
    borderWidth: 1,
    flex: 0.7,
    flexDirection: "row",
    justifyContent: "center",
  },
  name: {
    fontSize: 26,
    fontStyle: "italic",
  },
  value: {
    fontSize: 36,
    fontWeight: "bold",
  },
});

export default LastRollBox;
