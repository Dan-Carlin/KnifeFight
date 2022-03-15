import { Platform } from "react-native";

import colors from "./colors";

export default {
  colors,
  screenContainer: {
    flex: 1,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
