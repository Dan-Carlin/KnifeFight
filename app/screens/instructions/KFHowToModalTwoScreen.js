/*
KFHowToModalTwoScreen - View for second screen of instructions modal.
*/

// External libraries
import React from "react";
import { View } from "react-native";

// Assets
import {
  ArrowLeftGraphic,
  ArrowRightGraphic,
} from "../../assets/buttons/actions";
import { DiagramBGraphic } from "../../assets/diagrams";

// Components
import OpacityButton from "../../components/OpacityButton";
import Text from "../../components/Text";

// Resources
import strings from "../../config/strings";
import styles from "./KFHowToModalTwoStyles";

function KFHowToModalTwoScreen({ onPreviousPress, onNextPress }) {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.bodyContainer}>
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
              <Text style={styles.highlightText}>
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
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <OpacityButton Graphic={ArrowLeftGraphic} onPress={onPreviousPress} />
        </View>
        <View style={styles.pageLabelContainer}>
          <Text style={styles.pageLabel}>{strings.modal_page_two_label}</Text>
        </View>
        <View style={styles.button}>
          <OpacityButton Graphic={ArrowRightGraphic} onPress={onNextPress} />
        </View>
      </View>
    </View>
  );
}

export default KFHowToModalTwoScreen;
