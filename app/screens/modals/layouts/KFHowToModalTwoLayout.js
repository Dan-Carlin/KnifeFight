/*
KFHowToModalTwoLayout - View for second screen of instructions modal.
*/

// External libraries
import React from "react";
import { View, StyleSheet } from "react-native";

// Assets
import { DiagramBGraphic } from "../../../assets/diagrams";

// Components
import Text from "../../../components/Text";

// Resources
import colors from "../../../config/colors";
import strings from "../../../config/strings";
import styles from "./KFHowToModalStyles";

function KFHowToModalTwoScreen(props) {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.instructionsContainer}>
        <View style={styles.numberContainer}>
          <Text>{strings.modal_number_two_label}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>
            <Text style={styles.subtitle}>
              {strings.modal_instructions_two_subtitle}
            </Text>
            <Text>{strings.modal_instructions_two_text_a}</Text>
            <Text style={layoutStyles.highlightText}>
              {strings.modal_instructions_two_highlight}
            </Text>
            <Text>{strings.modal_instructions_two_text_b}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <DiagramBGraphic />
      </View>
    </View>
  );
}

const layoutStyles = StyleSheet.create({
  highlightText: {
    color: colors.gang_light_red,
    fontWeight: "bold",
    fontStyle: "italic",
  },
});

export default KFHowToModalTwoScreen;
