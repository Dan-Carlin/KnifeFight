/* 
KFSetupStepThreeStyles - Stylesheet for KFSetupStepThreeScreen.js
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
  traitButton: {
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
  },
  traitGrid: {
    alignItems: "center",
    marginVertical: 6,
    width: "75%",
  },
  traitRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
