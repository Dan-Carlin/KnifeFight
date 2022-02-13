import React from "react";
import { View, StyleSheet } from "react-native";

import {
  ArrowLeftGraphic,
  ArrowRightGraphic,
} from "../../assets/buttons/actions";
import { DiagramBGraphic } from "../../assets/diagrams";
import OpacityButton from "../../components/OpacityButton";
import Text from "../../components/Text";

function KFHowToModalOneScreen({ navigation, onPreviousPress, onNextPress }) {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.bodyContainer}>
        <View style={styles.instructionsContainer}>
          <View style={styles.numberContainer}>
            <Text>2.</Text>
          </View>
          <View style={styles.textContainer}>
            <Text>
              <Text style={{ fontWeight: "bold" }}>During your turn:</Text>{" "}
              <Text>
                Use the tools screen to keep track of your remaining HP, handle
                dice rolls, and customize how your name will display to your
                rivals. Once finished, tap the
              </Text>{" "}
              <Text
                style={{
                  color: "#f26e85",
                  fontWeight: "bold",
                  fontStyle: "italic",
                }}
              >
                End Turn
              </Text>{" "}
              <Text>button.</Text>
            </Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <DiagramBGraphic />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <OpacityButton Graphic={ArrowLeftGraphic} onPress={onPreviousPress} />
        </View>
        <View style={{ width: "50%" }}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 24 }}
          >
            2/3
          </Text>
        </View>
        <View style={styles.button}>
          <OpacityButton Graphic={ArrowRightGraphic} onPress={onNextPress} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 0.85,
  },
  button: {
    height: "80%",
    width: "25%",
  },
  buttonsContainer: {
    alignItems: "center",
    flex: 0.15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageContainer: {
    height: "54%",
    justifyContent: "flex-start",
    padding: 10,
  },
  instructionsContainer: {
    flexDirection: "row",
  },
  numberContainer: {
    marginEnd: 6,
  },
  screenContainer: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    flexWrap: "wrap",
  },
});

export default KFHowToModalOneScreen;
