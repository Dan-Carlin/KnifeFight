/*
InstructionsModal - Modal that activates when a game is started.
*/

// External libraries
import React, { useState } from "react";
import { View } from "react-native";

// Assets
import { GotItGraphic } from "../../assets/buttons/actions";

// Components
import Button from "../../components/Button";
import KFHowToModalOneScreen from "../instructions/KFHowToModalOneScreen";
import KFHowToModalTwoScreen from "../instructions/KFHowToModalTwoScreen";
import KFHowToModalThreeScreen from "../instructions/KFHowToModalThreeScreen";
import Text from "../../components/Text";

// Resources
import sounds from "../../assets/sounds/sounds";
import strings from "../../config/strings";
import styles from "./InstructionsModalStyles";

function InstructionsModal({ onConfirm }) {
  const howToScreens = [
    <KFHowToModalOneScreen
      onNextPress={() => setCurrentScreen(howToScreens[1])}
    />,
    <KFHowToModalTwoScreen
      onPreviousPress={() => setCurrentScreen(howToScreens[0])}
      onNextPress={() => setCurrentScreen(howToScreens[2])}
    />,
    <KFHowToModalThreeScreen
      onPreviousPress={() => setCurrentScreen(howToScreens[1])}
    />,
  ];

  const [currentScreen, setCurrentScreen] = useState(howToScreens[0]);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{strings.modal_instructions_title}</Text>
      </View>
      <View style={styles.bodyContainer}>{currentScreen}</View>
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <Button
            testID={"ins_btn_gotit"}
            Graphic={GotItGraphic}
            sound={sounds.NEXT_CONFIRM}
            onPress={onConfirm}
          />
        </View>
      </View>
    </View>
  );
}

export default InstructionsModal;
