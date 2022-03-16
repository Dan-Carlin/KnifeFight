/*
KFSettingsScreen - View for the settings screen.
*/

// External libraries
import React from "react";
import { Keyboard } from "react-native";

// Layouts
import KFSettingsLandscapeLayout from "./layouts/KFSettingsLandscapeLayout";
import KFSettingsPortraitLayout from "./layouts/KFSettingsPortraitLayout";

// Resources
import useOrientation from "../../hooks/useOrientation";

// ViewModel
import KFSettingsViewModel from "./KFSettingsViewModel";

function KFSettingsScreen({ navigation }) {
  const settingsViewModel = KFSettingsViewModel();

  const orientation = useOrientation();

  const onBaseHpTextChanged = (value) =>
    settingsViewModel.setBaseHpValue(value);

  const onSoundButtonPressed = () => settingsViewModel.toggleEnableAudioValue();

  const onShowPopupBoxPressed = () => settingsViewModel.toggleShowPopupValue();

  const onRestoreDefaultsButtonPressed = () =>
    settingsViewModel.restoreDefaults();

  const onExitButtonPressed = () => {
    Keyboard.dismiss();
    navigation.goBack();
  };

  const onSaveButtonPressed = () => {
    Keyboard.dismiss();
    settingsViewModel.storeSettings();
  };

  const actions = {
    baseHpInput: onBaseHpTextChanged,
    soundButton: onSoundButtonPressed,
    showPopupBox: onShowPopupBoxPressed,
    restoreDefaultsButton: onRestoreDefaultsButtonPressed,
    exitButton: onExitButtonPressed,
    saveButton: onSaveButtonPressed,
  };

  const values = {
    baseHp: settingsViewModel.baseHp,
    enableAudio: settingsViewModel.enableAudio,
    showPopup: settingsViewModel.showPopup,
  };

  return (
    <>
      {orientation.isPortrait && (
        <KFSettingsPortraitLayout actions={actions} values={values} />
      )}
      {orientation.isLandscape && (
        <KFSettingsLandscapeLayout actions={actions} values={values} />
      )}
    </>
  );
}

export default KFSettingsScreen;
