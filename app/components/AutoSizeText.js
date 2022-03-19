import React from "react";
import { AutoSizeText, ResizeTextMode } from "react-native-auto-size-text";

import defaultStyles from "../config/styles";

function AppAutoSizeText({ children, style, ...props }) {
  return (
    <AutoSizeText
      style={[defaultStyles.text, style]}
      fontSize={12}
      numberOfLines={1}
      mode={ResizeTextMode.max_lines}
      {...props}
    >
      {children}
    </AutoSizeText>
  );
}

export default AppAutoSizeText;
