/*
KFSettingsScreen - View for the settings screen.
*/

// External libraries
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import Toast from "react-native-simple-toast";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
import sounds from "../../assets/sounds/sounds";
import strings from "../../config/strings";
import styles from "./KFSettingsStyles";
import Button from "../../components/Button";

const background = require("../../assets/backgrounds/kf_background_xxxhdpi.png");

function KFSettingsScreen({ navigation }) {
  const [baseHp, setBaseHp] = useState("25");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showPopup, setShowPopup] = useState(true);

  const restoreDefaults = () => {
    setBaseHp("25");
    setSoundEnabled(true);
    setShowPopup(true);
  };

  const storeSettings = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@settings", jsonValue);
      console.log(jsonValue);
      Toast.show("Settings successfully saved!");
    } catch (e) {
      console.log(e);
    }
  };

  const getSettings = async () => {
    try {
      const settingsValue = await AsyncStorage.getItem("@settings");
      if (settingsValue !== null) {
        const settings = JSON.parse(settingsValue);
        setBaseHp(settings.baseHp);
        setSoundEnabled(settings.soundEnabled);
        setShowPopup(settings.showPopup);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getSettings();
  }, []);

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
            value={baseHp}
            width={"30%"}
            onChangeText={(value) => setBaseHp(value)}
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
              isEnabled={soundEnabled}
              onSelect={() => setSoundEnabled(!soundEnabled)}
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
              onSelect={() => {
                setShowPopup(!showPopup);
                // console.log(showPopup);
              }}
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
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={styles.saveButton}>
            <OpacityButton
              Graphic={SaveGraphic}
              sound={sounds.PLUS}
              onPress={() =>
                storeSettings({
                  baseHp: baseHp,
                  soundEnabled: soundEnabled,
                  showPopup: showPopup,
                })
              }
            />
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer} />
    </Screen>
  );
}

export default KFSettingsScreen;
