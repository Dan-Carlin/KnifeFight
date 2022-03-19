/* 
KFBannerStyles - Stylesheet for KFBannerScreen.js
*/

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  bodyContainer: {
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
  },
  buttonContainer: {
    width: "100%",
  },
  healthContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  nameContainer: {
    alignItems: "center",
    position: "absolute",
    width: "100%",
  },
  screenContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  toolsButton: {
    height: "100%",
    transform: [{ rotate: "180deg" }],
  },
});
