/*
KFToolsViewModel - ViewModel for the tools screen.
*/

// External libraries
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector, useDispatch } from "react-redux";

// Resources
import { setEnableAudio } from "../../redux/actions";
import capitalize from "../../utils/capitalize";
import { fonts } from "../../assets/fonts/FontsArray";
import gangColors from "../../data/gangColors";
import gangTraits from "../../data/gangTraits";
import sounds from "../../assets/sounds/sounds";
import useCounter from "../../hooks/useCounter";
import useAudioController from "../../hooks/useAudioController";

function KFToolsViewModel(props) {
  const { baseHp, enableAudio, showPopup } = useSelector(
    (state) => state.settingsReducer
  );

  const [exitModalVisible, setExitModalVisible] = useState(false);
  const [instructionsModalVisible, setInstructionsModalVisible] =
    useState(showPopup);
  const [rollResultsVisible, setRollResultsVisible] = useState(false);
  const [diceMode, setDiceMode] = useState(false);
  const [rollResult, setRollResult] = useState({ name: "", value: 0 });

  const { playSound } = useAudioController();

  const dispatch = useDispatch();

  const [gangName, setGangName] = useState("???");
  const [gangColor, setGangColor] = useState(gangColors.NONE);
  const [gangTrait, setGangTrait] = useState(gangTraits.NONE);

  const [fontIndex, setFontIndex] = useState(0);
  const font = fonts[fontIndex];
  const fontName = capitalize(font.name);
  const [bevelVisible, setBevelVisible] = useState(true);
  const [shadowVisible, setShadowVisible] = useState(true);

  const { count, setCount, increaseCount, decreaseCount } = useCounter(
    parseInt(baseHp)
  );

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

  const handleSystemBackPress = () => {
    playSound(sounds.CLOSE_EXIT);
    setExitModalVisible(true);
    return true;
  };

  const setRollResultAndDisplay = (result) => {
    console.log(result);
    setRollResult(result);
    setRollResultsVisible(true);
  };

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

  const setInitialHpValue = (value) => {
    setCount(parseInt(baseHp) + value);
  };

  const toggleInstructionsModalVisible = () =>
    setInstructionsModalVisible(!instructionsModalVisible);

  const hideInstructionsModal = () => setInstructionsModalVisible(false);

  const toggleExitModalVisible = () => setExitModalVisible(!exitModalVisible);

  const hideExitModal = () => setExitModalVisible(false);

  const toggleRollResultsVisible = () =>
    setRollResultsVisible(!rollResultsVisible);

  const hideRollResultsModal = () => setRollResultsVisible(false);

  const toggleAudioState = () => dispatch(setEnableAudio(!enableAudio));

  const enableDiceMode = () => setDiceMode(true);

  const enableHpCounterMode = () => setDiceMode(false);

  const toggleBevelState = () => setBevelVisible(!bevelVisible);

  const toggleShadowState = () => setShadowVisible(!shadowVisible);

  return {
    exitModalVisible,
    instructionsModalVisible,
    rollResultsVisible,
    rollResult,
    diceMode,
    baseHp,
    enableAudio,
    gangName,
    gangColor,
    gangTrait,
    count,
    bevelVisible,
    shadowVisible,
    fontName,
    font,
    getData,
    handleSystemBackPress,
    setRollResultAndDisplay,
    setInitialHpValue,
    previousFont,
    nextFont,
    increaseCount,
    decreaseCount,
    toggleInstructionsModalVisible,
    hideInstructionsModal,
    toggleExitModalVisible,
    hideExitModal,
    toggleRollResultsVisible,
    hideRollResultsModal,
    toggleAudioState,
    enableDiceMode,
    enableHpCounterMode,
    toggleBevelState,
    toggleShadowState,
    setCount,
  };
}

export default KFToolsViewModel;
