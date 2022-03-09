import React from "react";
import { TouchableOpacity } from "react-native";

import useAudioController from "../hooks/useAudioController";

function OpacityButton({ Graphic, onPress, width = "100%", sound, ...props }) {
  const { playSound } = useAudioController();
  return (
    <TouchableOpacity
      {...props}
      style={{ height: "100%", width: width }}
      onPress={() => {
        playSound(sound);
        onPress();
      }}
    >
      <Graphic />
    </TouchableOpacity>
  );
}

export default OpacityButton;
