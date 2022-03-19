/*
KFHowToModalOneLayout - View for first screen of instructions modal.
*/

// External libraries
import React from "react";
import { View } from "react-native";

// Assets
import { DiagramAGraphic } from "../../../assets/diagrams";

// Components
import Text from "../../../components/Text";

// Resources
import strings from "../../../config/strings";
import styles from "./KFHowToModalStyles";

function KFHowToModalOneScreen(props) {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.instructionsContainer}>
        <View style={styles.numberContainer}>
          <Text>{strings.modal_number_one_label}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>{strings.modal_instructions_one_text}</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <DiagramAGraphic />
      </View>
    </View>
  );
}

export default KFHowToModalOneScreen;
