/*
KFSettingsPortraitLayout - Portrait layout for the settings screen.
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
import defaultStyles from "../../../config/styles";
import sounds from "../../../assets/sounds/sounds";
import strings from "../../../config/strings";
import Button from "../../../components/Button";
import styles from "./KFSettingsStyles";

function KFSettingsPortraitLayout({ actions, values }) {
  return (
    <Screen
      style={[defaultStyles.screenContainer, portraitStyles.screenContainer]}
      isPortrait={true}
    >
      <View style={styles.bodyContainer}>
        <View style={styles.settingsTitle}>
          <SettingsTitle />
        </View>
        <View style={[styles.settingsHolder, portraitStyles.settingsHolder]}>
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
            width={"30%"}
            onChangeText={(value) => actions.baseHpInput(value)}
          />
        </View>
        <View style={[styles.settingsHolder, portraitStyles.settingsHolder]}>
          <View>
            <Text style={styles.settingsLabel}>
              {strings.settings_soundfx_label}
            </Text>
          </View>
          <View>
            <SoundButton
              style={[styles.soundButton, portraitStyles.soundButton]}
              enabled={values.enableAudio}
              onPress={() => actions.soundButton()}
            />
          </View>
        </View>
        <View style={[styles.settingsHolder, portraitStyles.settingsHolder]}>
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
        <View style={[styles.restoreDefaults, portraitStyles.restoreDefaults]}>
          <Button
            Graphic={RestoreDefaultsGraphic}
            sound={sounds.NEXT_CONFIRM}
            onPress={() => actions.restoreDefaultsButton()}
          />
        </View>
        <View style={[styles.navContainer, portraitStyles.navContainer]}>
          <View style={[styles.navButton, portraitStyles.navButton]}>
            <OpacityButton
              Graphic={ExitGraphic}
              sound={sounds.BACK_CANCEL}
              onPress={() => actions.exitButton()}
            />
          </View>
          <View style={[styles.saveButton, portraitStyles.saveButton]}>
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

const portraitStyles = StyleSheet.create({
  navButton: {
    width: "50%",
  },
  navContainer: {
    justifyContent: "space-between",
  },
  restoreDefaults: {
    height: 40,
  },
  saveButton: {
    width: "25%",
  },
  screenContainer: {
    justifyContent: "center",
  },
  settingsHolder: {
    height: 70,
    width: "100%",
  },
  soundButton: {
    height: "50%",
  },
});

export default KFSettingsPortraitLayout;
