/*
KFSettingsViewModel - ViewModel for the settings screen.
*/

// External libraries
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-root-toast";
import { useSelector, useDispatch } from "react-redux";

// Resources
import { setBaseHp, setEnableAudio, setShowPopup } from "../../redux/actions";
import useAudioController from "../../hooks/useAudioController";

function KFSettingsViewModel(props) {
  const { baseHp, enableAudio, showPopup } = useSelector(
    (state) => state.settingsReducer
  );
  const { enableSounds } = useAudioController();
  const dispatch = useDispatch();

  const showMessage = (message) => {
    Toast.show(message, {
      duration: Toast.durations.SHORT,
    });
  };

  const restoreDefaults = () => {
    dispatch(setBaseHp("25"));
    dispatch(setEnableAudio(true));
    enableSounds(true);
    dispatch(setShowPopup(true));

    showMessage("Default settings restored!");
  };

  const storeSettings = async () => {
    const newSettings = {
      baseHp: baseHp,
      enableAudio: enableAudio,
      showPopup: showPopup,
    };

    try {
      const jsonValue = JSON.stringify(newSettings);
      await AsyncStorage.setItem("@settings", jsonValue);

      showMessage("Settings successfully saved!");
    } catch (e) {
      console.log(e);
    }
  };

  const setBaseHpValue = (value) => dispatch(setBaseHp(value));

  const toggleEnableAudioValue = () => dispatch(setEnableAudio(!enableAudio));

  const toggleShowPopupValue = () => dispatch(setShowPopup(!showPopup));

  return {
    baseHp,
    enableAudio,
    showPopup,
    setBaseHpValue,
    toggleEnableAudioValue,
    toggleShowPopupValue,
    restoreDefaults,
    storeSettings,
  };
}

export default KFSettingsViewModel;
