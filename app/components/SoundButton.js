import React from "react";
import { Pressable } from "react-native";

import sounds from "../assets/sounds/sounds";
import { SoundOffGraphic, SoundOnGraphic } from "../assets/buttons/actions";
import useAudioController from "../hooks/useAudioController";

function SoundButton({ style, enabled, onPress }) {
  const { playSound, enableSounds } = useAudioController();

  function onSpeakerPress() {
    playSound(sounds.SOUND);
    enableSounds(!enabled);
    onPress();
  }

  return (
    <Pressable style={style} onPress={onSpeakerPress}>
      {enabled && <SoundOnGraphic />}
      {!enabled && <SoundOffGraphic />}
    </Pressable>
  );
}

export default SoundButton;
