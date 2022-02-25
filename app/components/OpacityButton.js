import React from "react";
import { TouchableOpacity } from "react-native";

import Player from "../utils/Player";

function OpacityButton({ Graphic, onPress, width = "100%", testID, sound }) {
  return (
    <TouchableOpacity
      testID={testID}
      style={{ height: "100%", width: width }}
      onPress={() => {
        Player.playSound(sound);
        onPress();
      }}
    >
      <Graphic />
    </TouchableOpacity>
  );
}

export default OpacityButton;
