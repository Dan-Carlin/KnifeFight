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
import ExitModal from "../modals/ExitModal";
import InstructionsModal from "../modals/InstructionsModal";
import Modal from "../../components/Modal";
import NameDisplay from "../../components/NameDisplay";
import OpacityButton from "../../components/OpacityButton";
import Screen from "../../components/Screen";
import SoundButton from "../../components/SoundButton";
import Text from "../../components/Text";

// Resources
import gangColors from "../../data/gangColors";
import gangTraits from "../../data/gangTraits";
import routes from "../../navigation/routes";
import strings from "../../config/strings";
import styles from "./KFToolsStyles";
import useCounter from "../../hooks/useCounter";

const background = require("../../assets/backgrounds/kf_background_land_xxxhdpi.png");
const initialHp = 25;

function KFToolsScreen({ navigation }) {
  const [gangName, setGangName] = useState("???");
  const [gangColor, setGangColor] = useState(gangColors.NONE);
  const [gangTrait, setGangTrait] = useState(gangTraits.NONE);

  const [exitModalVisible, setExitModalVisible] = useState(false);
  const [howToModalVisible, setHowToModalVisible] = useState(true);

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

  const { count, increaseCount, decreaseCount } = useCounter(
    initialHp + gangTrait.hp
  );

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

      <View style={styles.leftContainer}>
        <View style={styles.topButtons}>
          <SoundButton style={styles.soundButton} />
        </View>
        <View style={styles.diceRollButton}>
          <OpacityButton
            Graphic={DiceRollerGraphic}
            onPress={() => console.log("Dice roller button pressed.")}
          />
        </View>
      </View>
      <View style={styles.centerContainer}>
        <View style={styles.nameContainer}>
          <View style={styles.styleEditContainer}>
            <View style={styles.styleButtons}>
              <Button
                Graphic={ArrowLeftGraphic}
                onPress={() => console.log("Previous style pressed.")}
              />
            </View>
            <View style={styles.fontPickerContainer}>
              <Text style={styles.styleLabel}>{strings.tools_font_label}</Text>
              <Text style={styles.currentFont}>Default</Text>
            </View>
            <View style={styles.styleButtons}>
              <Button
                Graphic={ArrowRightGraphic}
                onPress={() => console.log("Next style pressed.")}
              />
            </View>
          </View>
          <View style={styles.nameDisplayContainer}>
            <NameDisplay
              gangName={gangName}
              Trait={gangTrait}
              font="default"
              Color={gangColor}
            />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.hpButtons}>
            <Button Graphic={MinusGraphic} onPress={decreaseCount} />
          </View>
          <CounterContainer
            width={240}
            Trait={gangTrait}
            hpValue={count}
            Color={gangColor}
          />
          <View style={styles.hpButtons}>
            <Button Graphic={PlusGraphic} onPress={increaseCount} />
          </View>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.topButtons}>
          <OpacityButton Graphic={HomeGraphic} onPress={() => onBackPress()} />
        </View>
        <View style={styles.bannerButton}>
          <OpacityButton
            Graphic={BannerGraphic}
            onPress={() =>
              navigation.navigate(routes.BANNER, {
                hp: count,
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
