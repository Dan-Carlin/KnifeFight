/*
KFToolsScreen - View for the tools screen.
*/

// External libraries
import React, { useState, useEffect } from "react";
import { View, BackHandler } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector, useDispatch } from "react-redux";

// Assets
import {
  ArrowLeftGraphic,
  ArrowRightGraphic,
  BannerGraphic,
  DiceRollerGraphic,
  HpCounterGraphic,
} from "../../assets/buttons/actions";
import { HomeGraphic } from "../../assets/buttons/navigation";

// Components
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import DiceSelector from "../../components/DiceSelector";
import ExitModal from "../modals/ExitModal";
import HPCounter from "../../components/HPCounter";
import InstructionsModal from "../modals/InstructionsModal";
import LastRollBox from "../../components/LastRollBox";
import ModalWithPressable from "../../components/ModalWithPressable";
import ModalNoPressable from "../../components/ModalNoPressable";
import NameDisplay from "../../components/NameDisplay";
import OpacityButton from "../../components/OpacityButton";
import RollResults from "../../components/RollResults";
import Screen from "../../components/Screen";
import SoundButton from "../../components/SoundButton";
import Text from "../../components/Text";
import TraitContainer from "../../components/TraitContainer";

// Resources
import capitalize from "../../utils/capitalize";
import { fonts } from "../../assets/fonts/FontsArray";
import gangColors from "../../data/gangColors";
import gangTraits from "../../data/gangTraits";
import routes from "../../navigation/routes";
import { setEnableAudio } from "../../redux/actions";
import sounds from "../../assets/sounds/sounds";
import strings from "../../config/strings";
import styles from "./KFToolsStyles";
import useCounter from "../../hooks/useCounter";
import useAudioController from "../../hooks/useAudioController";

const background = require("../../assets/backgrounds/kf_background_land_xxxhdpi.png");

function KFToolsScreen({ route, navigation }) {
  const { baseHp, enableAudio, showPopup } = useSelector(
    (state) => state.settingsReducer
  );
  const dispatch = useDispatch();
  const { playSound } = useAudioController();

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
  const { count, setCount, increaseCount, decreaseCount } = useCounter(
    parseInt(baseHp) + hpModifier
  );

  useEffect(() => {
    if (route.params?.currentHp) {
      setCount(route.params?.currentHp);
    }
  }, [route.params?.currentHp]);

  const [diceMode, setDiceMode] = useState(false);

  const [exitModalVisible, setExitModalVisible] = useState(false);
  const [howToModalVisible, setHowToModalVisible] = useState(showPopup);
  const [rollResultsVisible, setRollResultsVisible] = useState(false);
  const [rollResult, setRollResult] = useState({ name: "", value: 0 });

  const resultsCallback = (result) => {
    setRollResult(result);
    setRollResultsVisible(true);
  };

  const setToolsMode = diceMode ? (
    <DiceSelector
      Color={gangColor}
      canRoll={!rollResultsVisible}
      results={rollResult}
      resultsCallback={(result) => resultsCallback(result)}
    />
  ) : (
    <HPCounter
      hpValue={count}
      decreaseHp={() => decreaseCount()}
      increaseHp={() => increaseCount()}
      Color={gangColor}
    />
  );

  const onBackPress = () => {
    playSound(sounds.CLOSE_EXIT);
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
      setTimeout(() => {
        setGangName(nameValue != null ? nameValue : null);
        setGangColor(color);
        setGangTrait(trait);
      }, 500);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();

    BackHandler.addEventListener("hardwareBackPress", onBackPress);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    };
  }, []);

  return (
    <Screen style={styles.screenContainer} background={background}>
      <ModalWithPressable
        testID={"tls_modal_instructions"}
        component={
          <InstructionsModal onConfirm={() => setHowToModalVisible(false)} />
        }
        isVisible={howToModalVisible}
        setIsVisible={() => setHowToModalVisible(!howToModalVisible)}
      />

      <ModalWithPressable
        testID={"tls_modal_exit"}
        component={
          <ExitModal
            onCancel={() => setExitModalVisible(false)}
            onConfirm={() => navigation.popToTop()}
          />
        }
        isVisible={exitModalVisible}
        setIsVisible={() => setExitModalVisible(!exitModalVisible)}
      />

      <ModalNoPressable
        testID={"tls_modal_rollResults"}
        component={
          <RollResults
            results={rollResult}
            onClose={() => setRollResultsVisible(false)}
          />
        }
        isVisible={rollResultsVisible}
        setIsVisible={() => setRollResultsVisible(!rollResultsVisible)}
      />

      <View style={styles.leftContainer}>
        <View style={styles.topButtons}>
          <SoundButton
            testID="tls_btn_sound"
            style={styles.soundButton}
            enabled={enableAudio}
            onPress={() => dispatch(setEnableAudio(!enableAudio))}
          />
        </View>
        <View style={styles.lastRollBox}>
          {rollResult.value != 0 && <LastRollBox results={rollResult} />}
        </View>
        <View style={styles.diceRollButton}>
          {!diceMode && (
            <OpacityButton
              testID="tls_btn_diceRoller"
              Graphic={DiceRollerGraphic}
              sound={sounds.DICE_ROLLER}
              onPress={() => setDiceMode(true)}
            />
          )}
          {diceMode && (
            <OpacityButton
              testID="tls_btn_hpCounter"
              Graphic={HpCounterGraphic}
              sound={sounds.DICE_ROLLER}
              onPress={() => setDiceMode(false)}
            />
          )}
        </View>
      </View>
      <View style={styles.centerContainer}>
        <View style={styles.nameContainer}>
          <View style={styles.styleEditContainer}>
            <View style={styles.styleButtons}>
              <Button
                testID="tls_btn_arrowLeft"
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
                testID="tls_btn_arrowRight"
                Graphic={ArrowRightGraphic}
                sound={sounds.ARROW_RIGHT}
                onPress={() => nextFont()}
              />
            </View>
            <View style={styles.checkbox}>
              <Text style={styles.styleLabel}>Bevel:</Text>
              <View style={{ flex: 1 }}>
                <Checkbox
                  testID="tls_cb_bevel"
                  checked={bevelVisible}
                  onSelect={() => setBevelVisible(!bevelVisible)}
                />
              </View>
            </View>
            <View style={styles.checkbox}>
              <Text style={styles.styleLabel}>Shadow:</Text>
              <View style={{ flex: 1 }}>
                <Checkbox
                  testID="tls_cb_shadow"
                  checked={shadowVisible}
                  onSelect={() => setShadowVisible(!shadowVisible)}
                />
              </View>
            </View>
          </View>
          <View style={styles.nameDisplayContainer}>
            <NameDisplay
              testID="tls_ndc"
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
          <TraitContainer
            child={setToolsMode}
            testID="tls_txt_hpValue"
            style={styles.traitContainer}
            width={240}
            Trait={gangTrait}
            Color={gangColor}
          />
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.topButtons}>
          <OpacityButton
            testID="tls_btn_home"
            Graphic={HomeGraphic}
            sound={sounds.CLOSE_EXIT}
            onPress={() => onBackPress()}
          />
        </View>
        <View style={styles.bannerButton}>
          <OpacityButton
            testID="tls_btn_banner"
            Graphic={BannerGraphic}
            sound={sounds.START_END_TURN}
            onPress={() =>
              navigation.navigate(routes.BANNER, {
                currentHp: count,
                initialHp: baseHp,
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
