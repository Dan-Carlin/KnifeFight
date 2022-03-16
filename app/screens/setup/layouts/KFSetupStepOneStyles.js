/* 
KFSetupStepOneStyles - Stylesheet for KFSetupStepOneScreen.js
*/

import { StyleSheet } from "react-native";

import colors from "../../../config/colors";

export default StyleSheet.create({
  bodyContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 25,
  },
  nameButton: {
    height: 40,
    marginBottom: 15,
    marginTop: 6,
    width: "85%",
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  navContainer: {
    flexDirection: "row",
    height: 90,
    width: "90%",
  },
  text: {
    marginBottom: 6,
    textAlign: "center",
  },
  textInput: {
    color: colors.light,
    fontSize: 20,
    marginHorizontal: 20,
    textAlign: "center",
  },
  title: {
    fontFamily: "default",
    fontSize: 50,
    textAlign: "center",
  },
});
