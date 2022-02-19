/* 
KFSetupStepThreeStyles - Stylesheet for KFSetupStepThreeScreen.js
*/

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  bodyContainer: {
    alignItems: "center",
    flex: 0.75,
    justifyContent: "center",
    paddingHorizontal: 25,
  },
  bottomContainer: {
    alignItems: "center",
    flex: 0.13,
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
  title: {
    fontFamily: "default",
    fontSize: 50,
    textAlign: "center",
  },
  topContainer: {
    flex: 0.12,
  },
  traitButton: {
    alignItems: "center",
    backgroundColor: "green",
    justifyContent: "center",
    margin: 4,
    width: "22%",
  },
  traitGrid: {
    alignItems: "center",
    height: "70%",
    marginVertical: 6,
    width: "75%",
  },
  traitRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
