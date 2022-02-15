/* 
KFHowToModalThreeStyles - Stylesheet for KFHowToModalThreeScreen.js
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
    opacity: 0.5,
  },
  buttonsContainer: {
    alignItems: "center",
    flex: 0.15,
    flexDirection: "row",
  },
  highlightText: {
    color: "#61bb46",
    fontWeight: "bold",
    fontStyle: "italic",
  },
  imageContainer: {
    flex: 1,
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
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  pageLabelContainer: {
    width: "50%",
  },
  screenContainer: {
    flex: 1,
  },
  subtitle: {
    fontWeight: "bold",
  },
  textContainer: {
    flex: 1,
    flexWrap: "wrap",
  },
});
