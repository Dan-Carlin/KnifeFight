/*
KFHowToModalOneScreen - View for first screen of instructions modal.
*/

// External libraries
import React from "react";
import { View } from "react-native";

// Assets
import {
  ArrowLeftGraphic,
  ArrowRightGraphic,
} from "../../assets/buttons/actions";
import { DiagramAGraphic } from "../../assets/diagrams";

// Components
import OpacityButton from "../../components/OpacityButton";
import Text from "../../components/Text";

// Resources
import strings from "../../config/strings";
import styles from "./KFHowToModalOneStyles";

function KFHowToModalOneScreen({ onNextPress }) {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.bodyContainer}>
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
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <ArrowLeftGraphic style={styles.buttonDisabled} />
        </View>
        <View style={styles.pageLabelContainer}>
          <Text style={styles.pageLabel}>{strings.modal_page_one_label}</Text>
        </View>
        <View style={styles.button}>
          <OpacityButton Graphic={ArrowRightGraphic} onPress={onNextPress} />
        </View>
      </View>
    </View>
  );
}

export default KFHowToModalOneScreen;
