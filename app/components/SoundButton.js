import React from "react";
import { StyleSheet, Pressable } from "react-native";

import Player from "../utils/Player";
import sounds from "../assets/sounds/sounds";
import {
  SoundBaseGraphic,
  SoundOffGraphic,
  SoundOnGraphic,
} from "../assets/buttons/actions";

function SoundButton({ style, isEnabled, onSelect }) {
  function onSpeakerPress() {
    Player.playSound(sounds.SOUND);
    Player.setMutedState(isEnabled);
    isEnabled = !isEnabled;
    onSelect();
  }

  return (
    <Pressable style={[styles.container, style]} onPress={onSpeakerPress}>
      <SoundBaseGraphic style={styles.soundBase} />
      {isEnabled && <SoundOnGraphic style={styles.soundOn} />}
      {!isEnabled && <SoundOffGraphic style={styles.soundOff} />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: "100%",
    justifyContent: "flex-start",
    width: "100%",
  },
  soundBase: {
    height: "100%",
    width: "35%",
  },
  soundOff: {
    height: "100%",
    marginStart: 4,
    width: "20%",
  },
  soundOn: {
    height: "100%",
    width: "35%",
  },
});

export default SoundButton;
