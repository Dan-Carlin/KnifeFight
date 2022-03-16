/*
KFSetupStepTwoScreen - View for the second setup screen.
*/

// External libraries
import React from "react";

// Layouts
import KFSetupStepTwoLandscapeLayout from "./layouts/KFSetupStepTwoLandscapeLayout";
import KFSetupStepTwoPortraitLayout from "./layouts/KFSetupStepTwoPortraitLayout";

// Resources
import routes from "../../navigation/routes";
import useOrientation from "../../hooks/useOrientation";

// ViewModel
import KFSetupStepTwoViewModel from "./KFSetupStepTwoViewModel";

function KFSetupStepTwoScreen({ navigation }) {
  const stepTwoViewModel = KFSetupStepTwoViewModel();

  const orientation = useOrientation();

  const onCloseButtonPressed = () => navigation.popToTop();

  const onColorButtonPressed = (value) =>
    stepTwoViewModel.setGangColorValue(value);

  const onBackButtonPressed = () => navigation.goBack();

  const onNextButtonPressed = () => {
    stepTwoViewModel.storeGangColorValue();
    navigation.navigate(routes.SETUP_STEP_THREE);
  };

  const actions = {
    closeButton: onCloseButtonPressed,
    colorButton: onColorButtonPressed,
    backButton: onBackButtonPressed,
    nextButton: onNextButtonPressed,
  };

  const values = {
    gangColor: stepTwoViewModel.gangColor,
    colorIsSelected: stepTwoViewModel.colorIsSelected,
  };

  return (
    <>
      {orientation.isPortrait && (
        <KFSetupStepTwoPortraitLayout actions={actions} values={values} />
      )}
      {orientation.isLandscape && (
        <KFSetupStepTwoLandscapeLayout actions={actions} values={values} />
      )}
    </>
  );
}

export default KFSetupStepTwoScreen;
