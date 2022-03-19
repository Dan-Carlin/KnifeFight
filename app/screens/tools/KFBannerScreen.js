/*
KFBannerScreen - View for the banner screen.
*/

// External libraries
import React, { useEffect } from "react";
import { BackHandler } from "react-native";

// Layouts
import KFBannerLandscapeLayout from "./layouts/KFBannerLandscapeLayout";
import KFBannerPortraitLayout from "./layouts/KFBannerPortraitLayout";

// Resources
import routes from "../../navigation/routes";
import sounds from "../../assets/sounds/sounds";
import useAudioController from "../../hooks/useAudioController";
import useCounter from "../../hooks/useCounter";
import useOrientation from "../../hooks/useOrientation";

function KFBannerScreen({ route, navigation }) {
  const { currentHp, initialHp, nameStyle, gangName, gangColor, gangTrait } =
    route.params;

  const orientation = useOrientation();

  const { count, increaseCount, decreaseCount } = useCounter(currentHp);
  const { playSound } = useAudioController();

  const onBackPress = () => {
    playSound(sounds.START_TURN);
    navigation.goBack();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", onBackPress);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    };
  }, []);

  const onStartTurnButtonPressed = () =>
    navigation.navigate({
      name: routes.TOOLS,
      params: { currentHp: count },
      merge: true,
    });

  const onMinusButtonPressed = () => decreaseCount();

  const onPlusButtonPressed = () => increaseCount();

  const actions = {
    startTurnButton: onStartTurnButtonPressed,
    minusButton: onMinusButtonPressed,
    plusButton: onPlusButtonPressed,
  };

  const values = {
    count: count,
    initialHp: initialHp,
    nameStyle: nameStyle,
    gangName: gangName,
    gangColor: gangColor,
    gangTrait: gangTrait,
  };

  return (
    <>
      {orientation.isPortrait && (
        <KFBannerPortraitLayout actions={actions} values={values} />
      )}
      {orientation.isLandscape && (
        <KFBannerLandscapeLayout actions={actions} values={values} />
      )}
    </>
  );
}

export default KFBannerScreen;
