import React from "react";
import { TouchableOpacity } from "react-native";

function OpacityButton({ Graphic, onPress, width = "100%", testID }) {
  return (
    <TouchableOpacity
      testID={testID}
      style={{ height: "100%", width: width }}
      onPress={onPress}
    >
      <Graphic />
    </TouchableOpacity>
  );
}

export default OpacityButton;
