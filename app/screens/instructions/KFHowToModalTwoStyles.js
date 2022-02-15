/* 
KFHowToModalTwoStyles - Stylesheet for KFHowToModalTwoScreen.js
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
  buttonsContainer: {
    alignItems: "center",
    flex: 0.15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  highlightText: {
    color: "#f26e85",
    fontWeight: "bold",
    fontStyle: "italic",
  },
  imageContainer: {
    height: "54%",
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
