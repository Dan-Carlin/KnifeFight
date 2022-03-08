/* 
KFHomeStyles - Stylesheet for KFHomeScreen.js
*/

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  bottomContainer: {
    alignItems: "center",
    flex: 0.22,
  },
  bottomContents: {
    height: "100%",
    width: "55%",
  },
  button: {
    height: "85%",
    paddingBottom: 14,
    paddingHorizontal: 40,
    width: "100%",
  },
  buttonContainer: {
    alignItems: "center",
    flex: 0.18,
    justifyContent: "center",
  },
  companyLogos: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
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
  fgLogo: {
    height: "100%",
    opacity: 0.5,
    width: "30%",
  },
  gradient: {
    position: "absolute",
  },
  logo: {
    height: "48.2%",
    marginTop: 10,
    width: "85%",
  },
  logoContainer: {
    alignItems: "center",
    flex: 0.6,
    justifyContent: "space-between",
  },
  screenContainer: {
    flex: 1,
  },
  settingsButton: {
    alignSelf: "flex-end",
    height: 65,
    marginBottom: 10,
    marginEnd: 20,
    width: 65,
  },
  sgLogo: {
    flex: 1,
    height: "100%",
    marginEnd: 30,
    opacity: 0.5,
    resizeMode: "contain",
  },
});
