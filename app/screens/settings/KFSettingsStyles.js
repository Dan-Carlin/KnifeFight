/* 
KFSetupStepOneStyles - Stylesheet for KFSetupStepOneScreen.js
*/

import { StyleSheet } from "react-native";

import colors from "../../config/colors";

export default StyleSheet.create({
  bodyContainer: {
    alignItems: "center",
    flex: 0.6,
    justifyContent: "center",
    paddingHorizontal: 35,
  },
  bottomContainer: {
    alignItems: "center",
    flex: 0.2,
  },
  checkbox: {
    height: 30,
    marginEnd: 25,
    width: 30,
  },
  navButton: {
    height: "100%",
    width: "50%",
  },
  navContainer: {
    flexDirection: "row",
    height: 90,
    justifyContent: "space-between",
    padding: 5,
    width: "100%",
  },
  restoreDefaults: {
    height: 40,
    width: "80%",
  },
  saveButton: {
    height: "100%",
    width: "25%",
  },
  screenContainer: {
    flex: 1,
  },
  settingsHolder: {
    alignItems: "center",
    flexDirection: "row",
    height: 70,
    justifyContent: "space-between",
    width: "100%",
  },
  settingsLabel: {
    color: colors.light,
    fontSize: 20,
    fontWeight: "bold",
    marginEnd: 20,
  },
  settingsTitle: {
    height: 50,
    marginBottom: 10,
    width: "100%",
  },
  soundButton: {
    height: "50%",
    width: 60,
  },
  textInput: {
    color: colors.white,
    fontSize: 20,
    marginHorizontal: 20,
    textAlign: "center",
  },
  topContainer: {
    alignItems: "center",
    flex: 0.2,
  },
});
