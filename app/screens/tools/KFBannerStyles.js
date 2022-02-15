/* 
KFBannerStyles - Stylesheet for KFBannerScreen.js
*/

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  buttonContainer: {
    flex: 0.25,
  },
  healthContainer: {
    alignItems: "center",
    flex: 0.35,
  },
  nameContainer: {
    alignItems: "center",
    flex: 0.4,
  },
  screenContainer: {
    flex: 1,
  },
  toolsButton: {
    height: "100%",
    width: "20%",
    transform: [{ rotate: "180deg" }],
  },
});
