/*
ExitModal - Alert modal that activates when user exits the game.
*/

// External libraries
import React from "react";
import { View } from "react-native";

// Assets
import AlertIcon from "../../assets/kf_alert.svg";
import { CancelGraphic, YesGraphic } from "../../assets/buttons/actions";

// Components
import Button from "../../components/Button";
import Text from "../../components/Text";

// Resources
import strings from "../../config/strings";
import styles from "./ExitModalStyles";

function ExitModal({ onConfirm, onCancel }) {
  return (
    <View style={styles.alertContainer}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={styles.alertIcon}>
            <AlertIcon />
          </View>
          <Text style={styles.title}>{strings.modal_exit_title}</Text>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyText}>{strings.modal_exit_text}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button Graphic={CancelGraphic} onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button Graphic={YesGraphic} onPress={onConfirm} />
          </View>
        </View>
      </View>
    </View>
  );
}

export default ExitModal;
