/*
KFSettingsLandscapeLayout - Landscape layout for the settings screen.
*/

// External libraries
import React from "react";
import { View, StyleSheet } from "react-native";

// Assets
import { ExitGraphic } from "../../../assets/buttons/navigation";
import {
  SaveGraphic,
  RestoreDefaultsGraphic,
} from "../../../assets/buttons/actions";
import SettingsTitle from "../../../assets/kf_settings_title.svg";

// Components
import Checkbox from "../../../components/Checkbox";
import OpacityButton from "../../../components/OpacityButton";
import Screen from "../../../components/Screen";
import SoundButton from "../../../components/SoundButton";
import Text from "../../../components/Text";
import TextInput from "../../../components/TextInput";

// Resources
import sounds from "../../../assets/sounds/sounds";
import strings from "../../../config/strings";
import Button from "../../../components/Button";
import styles from "./KFSettingsStyles";

function KFSettingsLandscapeLayout({ actions, values }) {
  return (
    <Screen
      style={[styles.screenContainer, landscapeStyles.screenContainer]}
      isPortrait={false}
    >
      <View style={styles.bodyContainer}>
        <View style={styles.settingsTitle}>
          <SettingsTitle />
        </View>
        <View style={[styles.settingsHolder, landscapeStyles.settingsHolder]}>
          <View>
            <Text style={styles.settingsLabel}>
              {strings.settings_basehp_label}
            </Text>
          </View>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            maxLength={2}
            value={values.baseHp}
            width={"25%"}
            onChangeText={(value) => actions.baseHpInput(value)}
          />
        </View>
        <View style={[styles.settingsHolder, landscapeStyles.settingsHolder]}>
          <View>
            <Text style={styles.settingsLabel}>
              {strings.settings_soundfx_label}
            </Text>
          </View>
          <View>
            <SoundButton
              style={[styles.soundButton, landscapeStyles.soundButton]}
              enabled={values.enableAudio}
              onPress={() => actions.soundButton()}
            />
          </View>
        </View>
        <View style={[styles.settingsHolder, landscapeStyles.settingsHolder]}>
          <View>
            <Text style={[styles.settingsLabel, styles.settingsLabelSmall]}>
              {strings.settings_ins_popup_label}
            </Text>
          </View>
          <View style={styles.checkbox}>
            <Checkbox
              onSelect={() => actions.showPopupBox()}
              checked={values.showPopup}
            />
          </View>
        </View>
        <View style={styles.restoreDefaults}>
          <Button
            Graphic={RestoreDefaultsGraphic}
            sound={sounds.NEXT_CONFIRM}
            onPress={() => actions.restoreDefaultsButton()}
          />
        </View>
        <View style={[styles.navContainer, landscapeStyles.navContainer]}>
          <View style={[styles.navButton, landscapeStyles.navButton]}>
            <OpacityButton
              Graphic={ExitGraphic}
              sound={sounds.BACK_CANCEL}
              onPress={() => actions.exitButton()}
            />
          </View>
          <View style={[styles.saveButton, landscapeStyles.navButton]}>
            <OpacityButton
              Graphic={SaveGraphic}
              sound={sounds.PLUS}
              onPress={() => actions.saveButton()}
            />
          </View>
        </View>
      </View>
    </Screen>
  );
}

const landscapeStyles = StyleSheet.create({
  navButton: {
    width: "40%",
  },
  navContainer: {
    justifyContent: "center",
  },
  saveButton: {
    width: "25%",
  },
  screenContainer: {
    justifyContent: "center",
  },
  settingsHolder: {
    height: 50,
    width: "50%",
  },
  soundButton: {
    height: "65%",
  },
});

export default KFSettingsLandscapeLayout;
