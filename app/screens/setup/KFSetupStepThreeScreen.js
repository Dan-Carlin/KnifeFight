/*
KFSetupStepThreeScreen - View for the third setup screen.
*/

// External libraries
import React from "react";

// Layouts
import KFSetupStepThreeLandscapeLayout from "./layouts/KFSetupStepThreeLandscapeLayout";
import KFSetupStepThreePortraitLayout from "./layouts/KFSetupStepThreePortraitLayout";

// Resources
import routes from "../../navigation/routes";
import useOrientation from "../../hooks/useOrientation";

// ViewModel
import KFSetupStepThreeViewModel from "./KFSetupStepThreeViewModel";

function KFSetupStepThreeScreen({ navigation }) {
  const stepThreeViewModel = KFSetupStepThreeViewModel();

  const orientation = useOrientation();

  const onCloseButtonPressed = () => navigation.popToTop();

  const onTraitButtonPressed = (value) =>
    stepThreeViewModel.setGangTraitValue(value);

  const onBackButtonPressed = () => navigation.goBack();

  const onFinishButtonPressed = () => {
    stepThreeViewModel.storeGangTraitValue();
    navigation.navigate(routes.GAME_NAVIGATOR, {
      screen: routes.TOOLS,
      params: { hpModifier: stepThreeViewModel.gangTrait.hp },
    });
  };

  const actions = {
    closeButton: onCloseButtonPressed,
    traitButton: onTraitButtonPressed,
    backButton: onBackButtonPressed,
    finishButton: onFinishButtonPressed,
  };

  const values = {
    gangTrait: stepThreeViewModel.gangTrait,
    traitIsSelected: stepThreeViewModel.traitIsSelected,
  };

  return (
    <>
      {orientation.isPortrait && (
        <KFSetupStepThreePortraitLayout actions={actions} values={values} />
      )}
      {orientation.isLandscape && (
        <KFSetupStepThreeLandscapeLayout actions={actions} values={values} />
      )}
    </>
  );
}

export default KFSetupStepThreeScreen;
