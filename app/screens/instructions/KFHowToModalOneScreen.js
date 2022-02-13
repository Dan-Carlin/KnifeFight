import React from "react";
import { View, StyleSheet } from "react-native";

import {
  ArrowLeftGraphic,
  ArrowRightGraphic,
} from "../../assets/buttons/actions";
import { DiagramAGraphic } from "../../assets/diagrams";
import OpacityButton from "../../components/OpacityButton";
import Text from "../../components/Text";

function KFHowToModalOneScreen({ navigation, onNextPress }) {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.bodyContainer}>
        <View style={styles.instructionsContainer}>
          <View style={styles.numberContainer}>
            <Text>1.</Text>
          </View>
          <View style={styles.textContainer}>
            <Text>
              Set down your phone on the play area in front of you as shown.
            </Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <DiagramAGraphic />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <ArrowLeftGraphic style={{ opacity: 0.4 }} />
        </View>
        <View style={{ width: "50%" }}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 24 }}
          >
            1/3
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
  },
  imageContainer: {
    height: "60%",
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
