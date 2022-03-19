/*
KFToolsScreen - View for the tools screen.
*/

// External libraries
import React, { useEffect } from "react";
import { BackHandler } from "react-native";

// Layouts
import KFToolsLandscapeLayout from "./layouts/KFToolsLandscapeLayout";
import KFToolsPortraitLayout from "./layouts/KFToolsPortraitLayout";

// Resources
import routes from "../../navigation/routes";
import useOrientation from "../../hooks/useOrientation";

// ViewModel
import KFToolsViewModel from "./KFToolsViewModel";

function KFToolsScreen({ route, navigation }) {
  const toolsViewModel = KFToolsViewModel();

  const orientation = useOrientation();

  const { hpModifier } = route.params;

  const nameDisplayStyles = {
    font: toolsViewModel.font,
    borderSize: 2,
    shadowVisible: toolsViewModel.shadowVisible,
    bevelVisible: toolsViewModel.bevelVisible,
  };

  useEffect(() => {
    if (route.params?.currentHp != undefined) {
      toolsViewModel.setCount(route.params?.currentHp);
    }
  }, [route.params?.currentHp]);

  useEffect(() => {
    toolsViewModel.getData();

    toolsViewModel.setInitialHpValue(hpModifier);

    BackHandler.addEventListener(
      "hardwareBackPress",
      toolsViewModel.handleSystemBackPress
    );

    return () => {
      BackHandler.removeEventListener(
        "hardwareBackPress",
        toolsViewModel.handleSystemBackPress
      );
    };
  }, []);

  const onInstructionsConfirmButtonPressed = () =>
    toolsViewModel.hideInstructionsModal();

  const showInstructionsModal = () =>
    toolsViewModel.toggleInstructionsModalVisible();

  const onExitCancelButtonPressed = () => toolsViewModel.hideExitModal();

  const onExitConfirmButtonPressed = () => {
    toolsViewModel.resetDiceLocks();
    navigation.popToTop();
  };

  const showExitModal = () => toolsViewModel.toggleExitModalVisible();

  const onRollResultsCloseButtonPressed = () =>
    toolsViewModel.hideRollResultsModal();

  const showRollResults = () => toolsViewModel.toggleRollResultsVisible();

  const resultsCallback = (value) =>
    toolsViewModel.setRollResultAndDisplay(value);

  const onSoundButtonPressed = () => toolsViewModel.toggleAudioState();

  const onDiceRollerButtonPressed = () => toolsViewModel.enableDiceMode();

  const onHpCounterButtonPressed = () => toolsViewModel.enableHpCounterMode();

  const onMinusButtonPressed = () => toolsViewModel.decreaseCount();

  const onPlusButtonPressed = () => toolsViewModel.increaseCount();

  const onFontArrowLeftButtonPressed = () => toolsViewModel.previousFont();

  const onFontArrowRightButtonPressed = () => toolsViewModel.nextFont();

  const onBevelCheckboxPressed = () => toolsViewModel.toggleBevelState();

  const onShadowCheckboxPressed = () => toolsViewModel.toggleShadowState();

  const onHomeButtonPressed = () => toolsViewModel.handleSystemBackPress();

  const onBannerButtonPressed = () => {
    navigation.navigate(routes.BANNER, {
      currentHp: toolsViewModel.count,
      initialHp: toolsViewModel.baseHp,
      nameStyle: {
        font: toolsViewModel.font,
        borderSize: orientation.isLandscape ? 4 : 2,
        shadowVisible: toolsViewModel.shadowVisible,
        bevelVisible: toolsViewModel.bevelVisible,
      },
      gangName: toolsViewModel.gangName,
      gangColor: toolsViewModel.gangColor,
      gangTrait: toolsViewModel.gangTrait,
    });
  };

  const actions = {
    instructionsConfirmButton: onInstructionsConfirmButtonPressed,
    instructionsModalVisibility: showInstructionsModal,
    exitModalCancelButton: onExitCancelButtonPressed,
    exitModalConfirmButton: onExitConfirmButtonPressed,
    exitModalVisibility: showExitModal,
    rollResultsCloseButton: onRollResultsCloseButtonPressed,
    rollResultsVisibility: showRollResults,
    resultsCallback: resultsCallback,
    soundButton: onSoundButtonPressed,
    diceRollerButton: onDiceRollerButtonPressed,
    hpCounterButton: onHpCounterButtonPressed,
    decreaseCount: onMinusButtonPressed,
    increaseCount: onPlusButtonPressed,
    fontArrowLeftButton: onFontArrowLeftButtonPressed,
    fontArrowRightButton: onFontArrowRightButtonPressed,
    bevelCheckbox: onBevelCheckboxPressed,
    shadowCheckbox: onShadowCheckboxPressed,
    homeButton: onHomeButtonPressed,
    bannerButton: onBannerButtonPressed,
  };

  const values = {
    hpCount: toolsViewModel.count,
    instructionsModalVisible: toolsViewModel.instructionsModalVisible,
    exitModalVisible: toolsViewModel.exitModalVisible,
    rollResult: toolsViewModel.rollResult,
    rollResultsVisible: toolsViewModel.rollResultsVisible,
    enableAudio: toolsViewModel.enableAudio,
    diceMode: toolsViewModel.diceMode,
    fontName: toolsViewModel.fontName,
    bevelVisible: toolsViewModel.bevelVisible,
    shadowVisible: toolsViewModel.shadowVisible,
    gangName: toolsViewModel.gangName,
    gangColor: toolsViewModel.gangColor,
    gangTrait: toolsViewModel.gangTrait,
    nameDisplayStyles: nameDisplayStyles,
    screenHeight: orientation.height,
    screenWidth: orientation.width,
  };

  return (
    <>
      {orientation.isPortrait && (
        <KFToolsPortraitLayout actions={actions} values={values} />
      )}
      {orientation.isLandscape && (
        <KFToolsLandscapeLayout actions={actions} values={values} />
      )}
    </>
  );
}

export default KFToolsScreen;
