/* 
KFSetupStepOneStyles - Stylesheet for KFSetupStepOneScreen.js
*/

import { StyleSheet } from "react-native";

import colors from "../../config/colors";

export default StyleSheet.create({
  bodyContainer: {
    alignItems: "center",
    flex: 0.4,
    justifyContent: "center",
    paddingHorizontal: 25,
  },
  bottomContainer: {
    alignItems: "center",
    flex: 0.3,
  },
  nameButton: {
    height: 40,
    marginBottom: 15,
    width: "85%",
  },
  navButton: {
    height: "100%",
    width: "100%",
  },
  navContainer: {
    flexDirection: "row",
    height: 90,
    justifyContent: "space-between",
    width: "90%",
  },
  screenContainer: {
    flex: 1,
  },
  text: {
    textAlign: "center",
  },
  textInput: {
    color: colors.white,
    fontSize: 20,
    marginHorizontal: 20,
    textAlign: "center",
  },
  title: {
    fontFamily: "default",
    fontSize: 50,
    textAlign: "center",
  },
  topContainer: {
    alignItems: "center",
    flex: 0.3,
  },
});
