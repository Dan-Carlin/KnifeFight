/*
KFHomeViewModel - ViewModel for the home screen of the app.
*/

// External libraries
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";

// Resources
import { setBaseHp, setEnableAudio, setShowPopup } from "../../redux/actions";
import useAudioController from "../../hooks/useAudioController";

function KFHomeViewModel(props) {
  const dispatch = useDispatch();
  const { enableSounds } = useAudioController();

  const LoadSettings = async () => {
    try {
      const settingsValue = await AsyncStorage.getItem("@settings");
      const settings = JSON.parse(settingsValue);

      if (settingsValue !== null) {
        dispatch(setBaseHp(settings.baseHp));
        dispatch(setEnableAudio(settings.enableAudio));
        dispatch(setShowPopup(settings.showPopup));

        enableSounds(settings.enableAudio);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return {
    LoadSettings,
  };
}

export default KFHomeViewModel;
