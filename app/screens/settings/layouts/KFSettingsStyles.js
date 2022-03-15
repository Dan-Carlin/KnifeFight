/* 
KFSettingsStyles - Stylesheet for KFSettingsScreen.js
*/

import { StyleSheet } from "react-native";

import colors from "../../../config/colors";

export default StyleSheet.create({
  bodyContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 35,
  },
  checkbox: {
    height: 30,
    marginEnd: 25,
    width: 30,
  },
  navButton: {
    height: "100%",
  },
  navContainer: {
    flexDirection: "row",
    height: 90,
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
  },
  settingsLabel: {
    color: colors.light,
    fontSize: 20,
    fontWeight: "bold",
    marginEnd: 20,
  },
  settingsLabelSmall: {
    fontSize: 18,
  },
  settingsTitle: {
    height: 50,
    marginBottom: 10,
    width: "100%",
  },
  soundButton: {
    width: 60,
  },
  textInput: {
    color: colors.white,
    fontSize: 20,
    marginHorizontal: 20,
    textAlign: "center",
  },
});
