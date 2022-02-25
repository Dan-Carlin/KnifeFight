import React from "react";
import { StyleSheet, Pressable } from "react-native";

import Player from "../utils/Player";
import sounds from "../assets/sounds/sounds";
import {
  SoundBaseGraphic,
  SoundOffGraphic,
  SoundOnGraphic,
} from "../assets/buttons/actions";

function SoundButton({ checked = true, style }) {
  function onSpeakerPress() {
    Player.playSound(sounds.SOUND);
    onChange(!checked);
  }

  return (
    <Pressable style={[styles.container, style]} onPress={onSpeakerPress}>
      <SoundBaseGraphic style={styles.soundBase} />
      {checked && <SoundOnGraphic style={styles.soundOn} />}
      {!checked && <SoundOffGraphic style={styles.soundOff} />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },
  soundBase: {
    height: "100%",
    width: "35%",
  },
  soundOff: {
    height: "100%",
    width: "35%",
  },
  soundOn: {
    height: "100%",
    width: "35%",
  },
});

export default SoundButton;
