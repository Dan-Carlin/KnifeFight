/*
KFSetupStepOneScreen - View for the first setup screen.
*/

// External libraries
import React from "react";
import { Keyboard } from "react-native";
import Toast from "react-native-root-toast";

// Layouts
import KFSetupStepOneLandscapeLayout from "./layouts/KFSetupStepOneLandscapeLayout";
import KFSetupStepOnePortraitLayout from "./layouts/KFSetupStepOnePortraitLayout";

// Resources
import routes from "../../navigation/routes";
import strings from "../../config/strings";
import useOrientation from "../../hooks/useOrientation";

// ViewModel
import KFSetupStepOneViewModel from "./KFSetupStepOneViewModel";

function KFSetupStepOneScreen({ navigation }) {
  const stepOneViewModel = KFSetupStepOneViewModel();

  const orientation = useOrientation();

  const showLongMessage = (message) => {
    Toast.show(message, {
      duration: Toast.durations.LONG,
      position: Toast.positions.TOP,
    });
  };

  const containsInvalidChars = (str) => {
    const invalidChars = /[`@#$%^&*()_+=\[\]{};:"\\|,.<>\/~]/;
    return invalidChars.test(str);
  };

  const onGangNameTextChanged = (value) =>
    stepOneViewModel.setGangNameValue(value);

  const onGenerateNameButtonPressed = () => {
    stepOneViewModel.setRandomNameValue();
  };

  const onExitButtonPressed = () => navigation.goBack();

  const onNextButtonPressed = () => {
    if (containsInvalidChars(stepOneViewModel.gangName)) {
      showLongMessage(strings.setup_step_one_toast);
    } else {
      Keyboard.dismiss();
      stepOneViewModel.storeGangNameValue(stepOneViewModel.gangName);
      navigation.navigate(routes.SETUP_STEP_TWO);
    }
  };

  const actions = {
    gangNameInput: onGangNameTextChanged,
    generateNameButton: onGenerateNameButtonPressed,
    exitButton: onExitButtonPressed,
    nextButton: onNextButtonPressed,
  };

  const values = {
    gangName: stepOneViewModel.gangName,
    nameIsEntered: stepOneViewModel.nameIsEntered,
  };

  return (
    <>
      {orientation.isPortrait && (
        <KFSetupStepOnePortraitLayout actions={actions} values={values} />
      )}
      {orientation.isLandscape && (
        <KFSetupStepOneLandscapeLayout actions={actions} values={values} />
      )}
    </>
  );
}

export default KFSetupStepOneScreen;
