import React from "react";
import { View, StyleSheet } from "react-native";

import {
  ArrowLeftGraphic,
  ArrowRightGraphic,
} from "../../assets/buttons/actions";
import { DiagramCGraphic } from "../../assets/diagrams";
import OpacityButton from "../../components/OpacityButton";
import Text from "../../components/Text";

function KFHowToModalOneScreen({ navigation, onPreviousPress }) {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.bodyContainer}>
        <View style={styles.instructionsContainer}>
          <View style={styles.numberContainer}>
            <Text>3.</Text>
          </View>
          <View style={styles.textContainer}>
            <Text>
              <Text style={{ fontWeight: "bold" }}>
                During your rival's turn:
              </Text>{" "}
              <Text>
                The screen will automatically rotate to display the information
                needed by your rivals during their turns, once it's your turn
                again, tap the
              </Text>{" "}
              <Text
                style={{
                  color: "#61bb46",
                  fontWeight: "bold",
                  fontStyle: "italic",
                }}
              >
                Begin Turn
              </Text>{" "}
              <Text>button to return to the tools screen.</Text>
            </Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <DiagramCGraphic />
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
            3/3
          </Text>
        </View>
        <View style={styles.button}>
          <ArrowRightGraphic style={{ opacity: 0.5 }} />
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
  },
  imageContainer: {
    flex: 1,
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
