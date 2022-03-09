import React from "react";
import { StyleSheet, Pressable } from "react-native";

import sounds from "../assets/sounds/sounds";
import {
  SoundBaseGraphic,
  SoundOffGraphic,
  SoundOnGraphic,
} from "../assets/buttons/actions";
import useAudioController from "../hooks/useAudioController";

function SoundButton({ style, enabled, onPress }) {
  const { playSound, enableSounds } = useAudioController();

  function onSpeakerPress() {
    playSound(sounds.SOUND);
    enableSounds(!enabled);
    onPress();
  }

  return (
    <Pressable style={[styles.container, style]} onPress={onSpeakerPress}>
      <SoundBaseGraphic style={styles.soundBase} />
      {enabled && <SoundOnGraphic style={styles.soundOn} />}
      {!enabled && <SoundOffGraphic style={styles.soundOff} />}
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
