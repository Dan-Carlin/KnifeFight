/*
KFHowToModalThreeLayout - View for third screen of instructions modal.
*/

// External libraries
import React from "react";
import { View, StyleSheet } from "react-native";

// Assets
import { DiagramCGraphic } from "../../../assets/diagrams";

// Components
import Text from "../../../components/Text";

// Resources
import colors from "../../../config/colors";
import strings from "../../../config/strings";
import styles from "./KFHowToModalStyles";

function KFHowToModalThreeScreen(props) {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.instructionsContainer}>
        <View style={styles.numberContainer}>
          <Text>{strings.modal_number_three_label}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>
            <Text style={styles.subtitle}>
              {strings.modal_instructions_three_subtitle}
            </Text>
            <Text>{strings.modal_instructions_three_text_a}</Text>
            <Text style={layoutStyles.highlightText}>
              {strings.modal_instructions_three_highlight}
            </Text>
            <Text>{strings.modal_instructions_three_text_b}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <DiagramCGraphic />
      </View>
    </View>
  );
}

const layoutStyles = StyleSheet.create({
  highlightText: {
    color: colors.gang_light_green,
    fontWeight: "bold",
    fontStyle: "italic",
  },
});

export default KFHowToModalThreeScreen;
