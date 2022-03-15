/* 
KFHomeStyles - Stylesheet for KFHomeScreen.js
*/

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  bottomContainer: {
    alignItems: "center",
  },
  bottomContents: {
    height: "100%",
    width: "55%",
  },
  button: {
    height: "100%",
    width: "100%",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  disclaimer: {
    fontSize: 12,
    marginTop: 15,
    textAlign: "center",
  },
  disclaimerBold: {
    fontSize: 12,
    fontWeight: "bold",
  },
  disclaimerItalic: {
    fontSize: 12,
    fontStyle: "italic",
  },
  logoContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  settingsButton: {
    alignSelf: "flex-end",
    height: 65,
    marginBottom: 10,
    width: 65,
  },
  smallLogo: {
    opacity: 0.65,
  },
});
