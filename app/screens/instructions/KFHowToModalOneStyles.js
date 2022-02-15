/* 
KFHowToModalOneStyles - Stylesheet for KFHowToModalOneScreen.js
*/

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  bodyContainer: {
    flex: 0.85,
  },
  button: {
    height: "80%",
    width: "25%",
  },
  buttonDisabled: {
    opacity: 0.4,
  },
  buttonsContainer: {
    alignItems: "center",
    flex: 0.15,
    flexDirection: "row",
  },
  imageContainer: {
    height: "60%",
    justifyContent: "flex-start",
    padding: 10,
  },
  instructionsContainer: {
    flexDirection: "row",
  },
  numberContainer: {
    marginEnd: 6,
  },
  pageLabel: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
  },
  pageLabelContainer: {
    width: "50%",
  },
  screenContainer: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    flexWrap: "wrap",
  },
});
