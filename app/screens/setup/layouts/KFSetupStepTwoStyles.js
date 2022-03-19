/* 
KFSetupStepTwoStyles - Stylesheet for KFSetupStepTwoScreen.js
*/

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  bodyContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 25,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  closeButton: {
    height: 50,
    right: 10,
    position: "absolute",
    width: 50,
  },
  colorButton: {
    alignItems: "center",
    flex: 0.15,
    justifyContent: "center",
  },
  colorGrid: {
    height: "30%",
    marginVertical: 6,
  },
  navButton: {
    height: "100%",
    width: "100%",
  },
  navContainer: {
    flexDirection: "row",
    height: 80,
    width: "90%",
  },
  text: {
    textAlign: "center",
  },
  title: {
    fontFamily: "default",
    fontSize: 50,
    textAlign: "center",
  },
});
