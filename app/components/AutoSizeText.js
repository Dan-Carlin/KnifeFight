import React from "react";
import { AutoSizeText, ResizeTextMode } from "react-native-auto-size-text";

import defaultStyles from "../config/styles";

function AppAutoSizeText({
  children,
  maxLines = 1,
  fontSize = 12,
  style,
  ...props
}) {
  return (
    <AutoSizeText
      style={[defaultStyles.text, style]}
      fontSize={fontSize}
      numberOfLines={maxLines}
      mode={ResizeTextMode.max_lines}
      {...props}
    >
      {children}
    </AutoSizeText>
  );
}

export default AppAutoSizeText;
