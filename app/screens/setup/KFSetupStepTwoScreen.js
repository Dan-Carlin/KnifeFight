/*
KFSetupStepTwoScreen - View for the second setup screen.
*/

// External libraries
import React, { useState } from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Assets
import {
  BackGraphic,
  CloseGraphic,
  NextGraphic,
} from "../../assets/buttons/navigation";

// Components
import ColorButton from "../../components/ColorButton";
import OpacityButton from "../../components/OpacityButton";
import Screen from "../../components/Screen";
import Text from "../../components/Text";

// Resources
import gangColors from "../../data/gangColors";
import routes from "../../navigation/routes";
import sounds from "../../assets/sounds/sounds";
import strings from "../../config/strings";
import styles from "./KFSetupStepTwoStyles";

const background = require("../../assets/backgrounds/kf_background_xxxhdpi.png");

function KFSetupStepTwoScreen({ navigation }) {
  const [color, setColor] = useState(gangColors.NONE);
  const [colorIsSelected, setColorIsSelected] = useState(false);

  const setGangColor = (value) => {
    if (value != gangColors.NONE) {
      setColorIsSelected(true);
    } else {
      setColorIsSelected(false);
    }
    setColor(value);
  };

  const storeGangColor = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@gangColor", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Screen style={styles.screenContainer} background={background}>
      <View style={styles.topContainer}>
        <View style={styles.closeButton}>
          <OpacityButton
            Graphic={CloseGraphic}
            sound={sounds.BACK_CANCEL}
            onPress={() => navigation.popToTop()}
          />
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{strings.setup_step_two_title}</Text>
        <Text style={styles.text}>{strings.setup_step_two_text}</Text>
        <View style={styles.colorGrid}>
          <View style={styles.colorRow}>
            <View style={styles.colorButton}>
              <ColorButton
                testID="st2_btn_purple"
                Color={gangColors.PURPLE}
                isSelected={color == gangColors.PURPLE}
                onSelect={() => setGangColor(gangColors.PURPLE)}
              />
            </View>
            <View style={styles.colorButton}>
              <ColorButton
                testID="st2_btn_yellow"
                Color={gangColors.YELLOW}
                isSelected={color == gangColors.YELLOW}
                onSelect={() => setGangColor(gangColors.YELLOW)}
              />
            </View>
            <View style={styles.colorButton}>
              <ColorButton
                testID="st2_btn_green"
                Color={gangColors.GREEN}
                isSelected={color == gangColors.GREEN}
                onSelect={() => setGangColor(gangColors.GREEN)}
              />
            </View>
            <View style={styles.colorButton}>
              <ColorButton
                testID="st2_btn_red"
                Color={gangColors.RED}
                isSelected={color == gangColors.RED}
                onSelect={() => setGangColor(gangColors.RED)}
              />
            </View>
            <View style={styles.colorButton}>
              <ColorButton
                testID="st2_btn_orange"
                Color={gangColors.ORANGE}
                isSelected={color == gangColors.ORANGE}
                onSelect={() => setGangColor(gangColors.ORANGE)}
              />
            </View>
            <View style={styles.colorButton}>
              <ColorButton
                testID="st2_btn_blue"
                Color={gangColors.BLUE}
                isSelected={color == gangColors.BLUE}
                onSelect={() => setGangColor(gangColors.BLUE)}
              />
            </View>
          </View>
          <View style={styles.colorRow}>
            <View style={styles.colorButton}>
              <ColorButton
                testID="st2_btn_black"
                Color={gangColors.BLACK}
                isSelected={color == gangColors.BLACK}
                onSelect={() => setGangColor(gangColors.BLACK)}
              />
            </View>
            <View style={styles.colorButton}>
              <ColorButton
                testID="st2_btn_white"
                Color={gangColors.WHITE}
                isSelected={color == gangColors.WHITE}
                onSelect={() => setGangColor(gangColors.WHITE)}
              />
            </View>
            <View style={styles.colorButton}>
              <ColorButton
                testID="st2_btn_pink"
                Color={gangColors.PINK}
                isSelected={color == gangColors.PINK}
                onSelect={() => setGangColor(gangColors.PINK)}
              />
            </View>
            <View style={styles.colorButton}>
              <ColorButton
                testID="st2_btn_brown"
                Color={gangColors.BROWN}
                isSelected={color == gangColors.BROWN}
                onSelect={() => setGangColor(gangColors.BROWN)}
              />
            </View>
            <View style={styles.colorButton}>
              <ColorButton
                testID="st2_btn_cyan"
                Color={gangColors.CYAN}
                isSelected={color == gangColors.CYAN}
                onSelect={() => setGangColor(gangColors.CYAN)}
              />
            </View>
            <View style={styles.colorButton}>
              <ColorButton
                testID="st2_btn_gold"
                Color={gangColors.GOLD}
                isSelected={color == gangColors.GOLD}
                onSelect={() => setGangColor(gangColors.GOLD)}
              />
            </View>
          </View>
        </View>
        <View style={styles.navContainer}>
          <OpacityButton
            testID="st2_btn_back"
            style={styles.navButton}
            Graphic={BackGraphic}
            sound={sounds.BACK_CANCEL}
            onPress={() => navigation.goBack()}
            width="45%"
          />
          {colorIsSelected && (
            <OpacityButton
              testID="st2_btn_next"
              style={styles.navButton}
              Graphic={NextGraphic}
              sound={sounds.NEXT_CONFIRM}
              onPress={() => {
                storeGangColor(color);
                navigation.navigate(routes.SETUP_STEP_THREE);
              }}
              width="45%"
            />
          )}
          {!colorIsSelected && (
            <NextGraphic style={styles.buttonDisabled} width="45%" />
          )}
        </View>
      </View>
      <View style={styles.bottomContainer} />
    </Screen>
  );
}

export default KFSetupStepTwoScreen;
