/* 
KFSetupStepTwoStyles - Stylesheet for KFSetupStepTwoScreen.js
*/

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  bodyContainer: {
    alignItems: "center",
    flex: 0.5,
    justifyContent: "center",
    paddingHorizontal: 25,
  },
  bottomContainer: {
    alignItems: "center",
    flex: 0.25,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  closeButton: {
    height: 50,
    marginStart: 35,
    marginTop: 20,
    width: 50,
  },
  colorButton: {
    alignItems: "center",
    flex: 0.15,
    justifyContent: "center",
  },
  colorGrid: {
    height: "55%",
    marginVertical: 6,
    width: "95%",
  },
  colorRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 4,
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
  text: {
    textAlign: "center",
  },
  topContainer: {
    flex: 0.25,
  },
  screenContainer: {
    flex: 1,
  },
  title: {
    fontFamily: "default",
    fontSize: 50,
    textAlign: "center",
  },
});
