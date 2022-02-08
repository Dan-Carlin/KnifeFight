import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";
import Text from "../components/Text";
import { LinearGradient } from "expo-linear-gradient";

function HealthBar({ hpValue, gangColor, gangColorMedium }) {
  return (
    <View style={styles.container}>
      <View style={styles.numberContainer}>
        <Text style={{ textAlign: "center" }}>
          <Text style={styles.numberText}>{hpValue}</Text>
          <Text
            style={{
              color: gangColor,
              fontFamily: "default",
              fontSize: 50,
            }}
          >
            HP
          </Text>
        </Text>
      </View>
      <View style={styles.barContainer}>
        <View style={styles.barBorder}>
          <LinearGradient
            style={{
              backgroundColor: gangColor,
              height: "100%",
              width: "100%",
            }}
            colors={[gangColor, gangColorMedium]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  barBorder: {
    borderColor: colors.light,
    borderWidth: 8,
    height: "60%",
    padding: 10,
    width: "90%",
  },
  barContainer: {
    alignItems: "center",
    flex: 0.6,
  },
  container: {
    height: "100%",
    width: "100%",
  },
  numberContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0.4,
  },
  numberText: {
    fontSize: 60,
    fontWeight: "bold",
    lineHeight: 63,
  },
});

export default HealthBar;
