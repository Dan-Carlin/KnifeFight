/*
KFBannerScreen - View for the banner screen.
*/

// External libraries
import React, { useEffect } from "react";
import { View, BackHandler } from "react-native";

// Assets
import { ToolsGraphic } from "../../assets/buttons/actions";

// Components
import HealthBar from "../../components/HealthBar";
import NameDisplay from "../../components/NameDisplay";
import OpacityButton from "../../components/OpacityButton";
import TraitScreen from "../../components/TraitScreen";

// Resources
import routes from "../../navigation/routes";
import sounds from "../../assets/sounds/sounds";
import styles from "./layouts/KFBannerStyles";
import useAudioController from "../../hooks/useAudioController";
import useCounter from "../../hooks/useCounter";

const background = require("../../assets/backgrounds/kf_background_land_xxxhdpi.png");

function KFBannerScreen({ route, navigation }) {
  const { playSound } = useAudioController();

  const { currentHp, initialHp, style, name, Color, Trait } = route.params;
  const { count, increaseCount, decreaseCount } = useCounter(currentHp);

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

  return (
    <TraitScreen
      Trait={Trait}
      Color={Color}
      style={styles.screenContainer}
      background={background}
    >
      <View style={styles.buttonContainer}>
        <View style={styles.toolsButton}>
          <OpacityButton
            Graphic={ToolsGraphic}
            sound={sounds.START_TURN}
            onPress={() => {
              navigation.navigate({
                name: routes.TOOLS,
                params: { currentHp: count },
                merge: true,
              });
            }}
          />
        </View>
      </View>
      <View style={styles.nameContainer}>
        <NameDisplay
          gangName={name}
          Trait={Trait}
          style={style}
          Color={Color}
          descriptionVisible
        />
      </View>
      <View style={styles.healthContainer}>
        <HealthBar
          currentHp={count}
          decreaseHp={() => decreaseCount()}
          increaseHp={() => increaseCount()}
          initialHp={initialHp}
          gangColor={Color}
        />
      </View>
    </TraitScreen>
  );
}

export default KFBannerScreen;
