/*
KFToolsScreen - View for the tools screen.
*/

// External libraries
import React, { useState, useEffect } from "react";
import { View, BackHandler } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Assets
import {
  ArrowLeftGraphic,
  ArrowRightGraphic,
  BannerGraphic,
  DiceRollerGraphic,
  MinusGraphic,
  PlusGraphic,
} from "../../assets/buttons/actions";
import { HomeGraphic } from "../../assets/buttons/navigation";

// Components
import Button from "../../components/Button";
import CounterContainer from "../../components/CounterContainer";
import DiceRollerMenu from "../../components/DiceRollerMenu";
import ExitModal from "../modals/ExitModal";
import InstructionsModal from "../modals/InstructionsModal";
import Modal from "../../components/Modal";
import NameDisplay from "../../components/NameDisplay";
import OpacityButton from "../../components/OpacityButton";
import Screen from "../../components/Screen";
import SoundButton from "../../components/SoundButton";
import Text from "../../components/Text";

// Resources
import capitalize from "../../utils/capitalize";
import { fonts } from "../../assets/fonts/FontsArray";
import gangColors from "../../data/gangColors";
import gangTraits from "../../data/gangTraits";
import getRandomNumber from "../../utils/getRandomNumber";
import routes from "../../navigation/routes";
import sounds from "../../assets/sounds/sounds";
import strings from "../../config/strings";
import styles from "./KFToolsStyles";
import useCounter from "../../hooks/useCounter";
import Checkbox from "../../components/Checkbox";

const background = require("../../assets/backgrounds/kf_background_land_xxxhdpi.png");
const initialHp = 20;
const minusHpSounds = [sounds.MINUS_A, sounds.MINUS_B, sounds.MINUS_C];

function KFToolsScreen({ route, navigation }) {
  const [gangName, setGangName] = useState("???");
  const [gangColor, setGangColor] = useState(gangColors.NONE);
  const [gangTrait, setGangTrait] = useState(gangTraits.NONE);

  const [fontIndex, setFontIndex] = useState(0);
  const [bevelVisible, setBevelVisible] = useState(true);
  const [shadowVisible, setShadowVisible] = useState(true);
  const previousFont = () => {
    if (fontIndex == 0) {
      setFontIndex(fonts.length - 1);
    } else {
      setFontIndex(fontIndex - 1);
    }
  };
  const nextFont = () => {
    if (fontIndex == fonts.length - 1) {
      setFontIndex(0);
    } else {
      setFontIndex(fontIndex + 1);
    }
  };

  const { hpModifier } = route.params;
  const { count, increaseCount, decreaseCount } = useCounter(
    initialHp + hpModifier
  );

  const [exitModalVisible, setExitModalVisible] = useState(false);
  const [howToModalVisible, setHowToModalVisible] = useState(true);
  const [diceRollerVisible, setDiceRollerVisible] = useState(false);

  const onBackPress = () => {
    setExitModalVisible(true);
    return true;
  };

  const getData = async () => {
    try {
      const nameValue = await AsyncStorage.getItem("@gangName");
      const colorValue = await AsyncStorage.getItem("@gangColor");
      const color = JSON.parse(colorValue);
      const traitValue = await AsyncStorage.getItem("@gangTrait");
      const trait = JSON.parse(traitValue);
      setGangName(nameValue != null ? nameValue : null);
      setGangColor(color);
      setGangTrait(trait);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();

    BackHandler.addEventListener("hardwareBackPress", onBackPress);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", onBackPress);
  }, []);

  return (
    <Screen style={styles.screenContainer} background={background}>
      <Modal
        component={
          <InstructionsModal onConfirm={() => setHowToModalVisible(false)} />
        }
        isVisible={howToModalVisible}
        setIsVisible={() => setHowToModalVisible(!howToModalVisible)}
      />

      <Modal
        component={
          <ExitModal
            onCancel={() => setExitModalVisible(false)}
            onConfirm={() => navigation.popToTop()}
          />
        }
        isVisible={exitModalVisible}
        setIsVisible={() => setExitModalVisible(!exitModalVisible)}
      />

      <Modal
        component={
          <DiceRollerMenu onClose={() => setDiceRollerVisible(false)} />
        }
        isVisible={diceRollerVisible}
        setIsVisible={() => setDiceRollerVisible(!diceRollerVisible)}
      />

      <View style={styles.leftContainer}>
        <View style={styles.topButtons}>
          <SoundButton style={styles.soundButton} />
        </View>
        <View style={styles.diceRollButton}>
          {!diceRollerVisible && (
            <OpacityButton
              Graphic={DiceRollerGraphic}
              sound={sounds.DICE_ROLLER}
              onPress={() => setDiceRollerVisible(true)}
            />
          )}
        </View>
      </View>
      <View style={styles.centerContainer}>
        <View style={styles.nameContainer}>
          <View style={styles.styleEditContainer}>
            <View style={styles.styleButtons}>
              <Button
                Graphic={ArrowLeftGraphic}
                sound={sounds.ARROW_LEFT}
                onPress={() => previousFont()}
              />
            </View>
            <View style={styles.fontPickerContainer}>
              <Text style={styles.styleLabel}>{strings.tools_font_label}</Text>
              <Text style={styles.currentFont}>
                {capitalize(fonts[fontIndex])}
              </Text>
            </View>
            <View style={styles.styleButtons}>
              <Button
                Graphic={ArrowRightGraphic}
                sound={sounds.ARROW_RIGHT}
                onPress={() => nextFont()}
              />
            </View>
            <View style={styles.checkbox}>
              <Text style={styles.styleLabel}>Bevel:</Text>
              <Checkbox onSelect={() => setBevelVisible(!bevelVisible)} />
            </View>
            <View style={styles.checkbox}>
              <Text style={styles.styleLabel}>Shadow:</Text>
              <Checkbox onSelect={() => setShadowVisible(!shadowVisible)} />
            </View>
          </View>
          <View style={styles.nameDisplayContainer}>
            <NameDisplay
              gangName={gangName}
              Trait={gangTrait}
              style={{
                font: fonts[fontIndex],
                borderSize: 2,
                shadowVisible: shadowVisible,
                bevelVisible: bevelVisible,
              }}
              Color={gangColor}
            />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.hpButtons}>
            <Button
              Graphic={MinusGraphic}
              sound={minusHpSounds[getRandomNumber(3)]}
              onPress={decreaseCount}
            />
          </View>
          <CounterContainer
            width={240}
            Trait={gangTrait}
            hpValue={count}
            Color={gangColor}
          />
          <View style={styles.hpButtons}>
            <Button
              Graphic={PlusGraphic}
              sound={sounds.PLUS}
              onPress={increaseCount}
            />
          </View>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.topButtons}>
          <OpacityButton
            Graphic={HomeGraphic}
            sound={sounds.CLOSE_EXIT}
            onPress={() => onBackPress()}
          />
        </View>
        <View style={styles.bannerButton}>
          <OpacityButton
            Graphic={BannerGraphic}
            sound={sounds.START_END_TURN}
            onPress={() =>
              navigation.navigate(routes.BANNER, {
                currentHp: count,
                initialHp: initialHp,
                style: {
                  font: fonts[fontIndex],
                  borderSize: 4,
                  shadowVisible: shadowVisible,
                  bevelVisible: bevelVisible,
                },
                name: gangName,
                Color: gangColor,
                Trait: gangTrait,
              })
            }
          />
        </View>
      </View>
    </Screen>
  );
}

export default KFToolsScreen;
