/*
KFSetupStepOneScreen - View for the first setup screen.
*/

// External libraries
import React, { useState } from "react";
import { Keyboard, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-root-toast";

// Assets
import { ExitGraphic, NextGraphic } from "../../assets/buttons/navigation";
import { GenerateNameGraphic } from "../../assets/buttons/actions";

// Components
import Button from "../../components/Button";
import OpacityButton from "../../components/OpacityButton";
import Screen from "../../components/Screen";
import Text from "../../components/Text";
import TextInput from "../../components/TextInput";

// Resources
import routes from "../../navigation/routes";
import sounds from "../../assets/sounds/sounds";
import strings from "../../config/strings";
import styles from "./KFSetupStepOneStyles";
import useNameGenerator from "../../hooks/useNameGenerator";

const background = require("../../assets/backgrounds/kf_background_xxxhdpi.png");

function KFSetupStepOneScreen({ navigation }) {
  const [name, setName] = useState("");
  const [nameIsEntered, setNameIsEntered] = useState(false);
  const { getRandomName } = useNameGenerator();

  const containsInvalidChars = (str) => {
    const invalidChars = /[`@#$%^&*()_+=\[\]{};':"\\|,.<>\/~]/;
    return invalidChars.test(str);
  };

  const setGangName = (value) => {
    if (value.length >= 2) {
      setNameIsEntered(true);
    } else {
      setNameIsEntered(false);
    }
    setName(value);
  };

  const storeGangName = async (value) => {
    const name = value.trim();

    try {
      await AsyncStorage.setItem("@gangName", name);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Screen style={styles.screenContainer} background={background}>
      <View style={styles.topContainer} />
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{strings.setup_step_one_title}</Text>
        <Text style={styles.text}>{strings.setup_step_one_text}</Text>
        <TextInput
          style={styles.textInput}
          placeholder={strings.setup_step_one_placeholder}
          maxLength={25}
          value={name}
          onChangeText={(value) => setGangName(value)}
        />
        <View style={styles.nameButton}>
          <Button
            testID="st1_btn_generateName"
            Graphic={GenerateNameGraphic}
            sound={sounds.GENERATE_NAME}
            style={styles.button}
            onPress={() => setGangName(getRandomName())}
          />
        </View>
        <View style={styles.navContainer}>
          <OpacityButton
            testID="st1_btn_exit"
            Graphic={ExitGraphic}
            sound={sounds.BACK_CANCEL}
            onPress={() => navigation.goBack()}
            width="45%"
          />
          {nameIsEntered && (
            <OpacityButton
              testID="st1_btn_next"
              Graphic={NextGraphic}
              sound={sounds.NEXT_CONFIRM}
              onPress={() => {
                if (containsInvalidChars(name)) {
                  Toast.show(
                    'Gang name should only contain letters, numbers, and "?" "!" or "-".',
                    {
                      duration: Toast.durations.LONG,
                      position: Toast.positions.TOP,
                    }
                  );
                } else {
                  Keyboard.dismiss();
                  storeGangName(name);
                  navigation.navigate(routes.SETUP_STEP_TWO);
                }
              }}
              width="45%"
            />
          )}
          {!nameIsEntered && (
            <NextGraphic style={styles.buttonDisabled} width="45%" />
          )}
        </View>
      </View>
      <View style={styles.bottomContainer} />
    </Screen>
  );
}

export default KFSetupStepOneScreen;
