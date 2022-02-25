/*
KFHowToModalThreeScreen - View for third screen of instructions modal.
*/

// External libraries
import React from "react";
import { View } from "react-native";

// Assets
import {
  ArrowLeftGraphic,
  ArrowRightGraphic,
} from "../../assets/buttons/actions";
import { DiagramCGraphic } from "../../assets/diagrams";

// Components
import OpacityButton from "../../components/OpacityButton";
import Text from "../../components/Text";

// Resources
import sounds from "../../assets/sounds/sounds";
import strings from "../../config/strings";
import styles from "./KFHowToModalThreeStyles";

function KFHowToModalThreeScreen({ onPreviousPress }) {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.bodyContainer}>
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
              <Text style={styles.highlightText}>
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
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <OpacityButton
            Graphic={ArrowLeftGraphic}
            onPress={onPreviousPress}
            sound={sounds.ARROW_LEFT}
          />
        </View>
        <View style={styles.pageLabelContainer}>
          <Text style={styles.pageLabel}>{strings.modal_page_three_label}</Text>
        </View>
        <View style={styles.button}>
          <ArrowRightGraphic style={styles.buttonDisabled} />
        </View>
      </View>
    </View>
  );
}

export default KFHowToModalThreeScreen;
