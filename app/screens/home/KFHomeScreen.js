/*
KFHomeScreen - View for the home screen of the app.
*/

// External libraries
import { useEffect } from "react";

// Layouts
import KFHomeLandscapeLayout from "./layouts/KFHomeLandscapeLayout";
import KFHomePortraitLayout from "./layouts/KFHomePortraitLayout";

// Resources
import routes from "../../navigation/routes";
import useOrientation from "../../hooks/useOrientation";

// ViewModel
import HomeViewModel from "./KFHomeViewModel";

function KFHomeScreen({ navigation }) {
  const homeViewModel = HomeViewModel();

  const orientation = useOrientation();

  const onStartButtonPressed = () => navigation.navigate(routes.SETUP_STEP_ONE);
  const onSettingsButtonPressed = () => navigation.navigate(routes.SETTINGS);

  const actions = {
    startButton: onStartButtonPressed,
    settingsButton: onSettingsButtonPressed,
  };

  useEffect(() => {
    homeViewModel.LoadSettings();
  }, []);

  return (
    <>
      {orientation.isPortrait && <KFHomePortraitLayout actions={actions} />}
      {orientation.isLandscape && <KFHomeLandscapeLayout actions={actions} />}
    </>
  );
}

export default KFHomeScreen;
