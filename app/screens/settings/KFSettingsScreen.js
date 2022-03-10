/*
KFSettingsScreen - View for the settings screen.
*/

// External libraries
import React from "react";
import { Keyboard, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-root-toast";
import { useSelector, useDispatch } from "react-redux";

// Assets
import { ExitGraphic } from "../../assets/buttons/navigation";
import {
  SaveGraphic,
  RestoreDefaultsGraphic,
} from "../../assets/buttons/actions";
import SettingsTitle from "../../assets/kf_settings_title.svg";

// Components
import Checkbox from "../../components/Checkbox";
import OpacityButton from "../../components/OpacityButton";
import Screen from "../../components/Screen";
import SoundButton from "../../components/SoundButton";
import Text from "../../components/Text";
import TextInput from "../../components/TextInput";

// Resources
import { setBaseHp, setEnableAudio, setShowPopup } from "../../redux/actions";
import sounds from "../../assets/sounds/sounds";
import strings from "../../config/strings";
import styles from "./KFSettingsStyles";
import Button from "../../components/Button";
import useAudioController from "../../hooks/useAudioController";

const background = require("../../assets/backgrounds/kf_background_xxxhdpi.png");

function KFSettingsScreen({ navigation }) {
  const { enableSounds } = useAudioController();
  const { baseHp, enableAudio, showPopup } = useSelector(
    (state) => state.settingsReducer
  );
  const dispatch = useDispatch();

  const restoreDefaults = () => {
    dispatch(setBaseHp("25"));
    dispatch(setEnableAudio(true));
    enableSounds(true);
    dispatch(setShowPopup(true));
    Toast.show("Default settings restored!", {
      duration: Toast.durations.SHORT,
    });
  };

  const storeSettings = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@settings", jsonValue);
      Toast.show("Settings successfully saved!", {
        duration: Toast.durations.SHORT,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Screen style={styles.screenContainer} background={background}>
      <View style={styles.topContainer} />
      <View style={styles.bodyContainer}>
        <View style={styles.settingsTitle}>
          <SettingsTitle />
        </View>
        <View style={styles.settingsHolder}>
          <View>
            <Text style={styles.settingsLabel}>
              {strings.settings_basehp_label}
            </Text>
          </View>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            maxLength={2}
            value={baseHp}
            width={"30%"}
            onChangeText={(value) => dispatch(setBaseHp(value))}
          />
        </View>
        <View style={styles.settingsHolder}>
          <View>
            <Text style={styles.settingsLabel}>
              {strings.settings_soundfx_label}
            </Text>
          </View>
          <View>
            <SoundButton
              style={styles.soundButton}
              enabled={enableAudio}
              onPress={() => dispatch(setEnableAudio(!enableAudio))}
            />
          </View>
        </View>
        <View style={styles.settingsHolder}>
          <View>
            <Text style={[styles.settingsLabel, { fontSize: 18 }]}>
              {strings.settings_ins_popup_label}
            </Text>
          </View>
          <View style={styles.checkbox}>
            <Checkbox
              onSelect={() => dispatch(setShowPopup(!showPopup))}
              checked={showPopup}
            />
          </View>
        </View>
        <View style={styles.restoreDefaults}>
          <Button
            Graphic={RestoreDefaultsGraphic}
            sound={sounds.NEXT_CONFIRM}
            onPress={() => restoreDefaults()}
          />
        </View>
        <View style={styles.navContainer}>
          <View style={styles.navButton}>
            <OpacityButton
              Graphic={ExitGraphic}
              sound={sounds.BACK_CANCEL}
              onPress={() => {
                Keyboard.dismiss();
                navigation.goBack();
              }}
            />
          </View>
          <View style={styles.saveButton}>
            <OpacityButton
              Graphic={SaveGraphic}
              sound={sounds.PLUS}
              onPress={() => {
                Keyboard.dismiss();
                storeSettings({
                  baseHp: baseHp,
                  enableAudio: enableAudio,
                  showPopup: showPopup,
                });
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer} />
    </Screen>
  );
}

export default KFSettingsScreen;
