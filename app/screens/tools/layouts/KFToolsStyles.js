import { StyleSheet } from "react-native";

import colors from "../../../config/colors";

export default StyleSheet.create({
  centerContainer: {
    alignItems: "center",
    flex: 0.6,
  },
  checkbox: {
    height: 30,
    width: 30,
  },
  checkboxAttribute: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    padding: 4,
    width: "25%",
  },
  currentFont: {
    fontSize: 18,
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: "center",
  },
  diceRollButton: {
    height: "38%",
    paddingHorizontal: 30,
    width: "100%",
  },
  fontPickerContainer: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    width: "25%",
  },
  lastRollBox: {
    height: "20%",
    width: "80%",
  },
  leftContainer: {
    alignItems: "center",
    flex: 0.2,
    justifyContent: "space-between",
  },
  nameContainer: {
    alignItems: "center",
    flex: 0.5,
    width: "100%",
  },
  nameDisplayContainer: {
    width: "100%",
  },
  rightContainer: {
    alignItems: "center",
    flex: 0.2,
    justifyContent: "space-between",
  },
  styleButtons: {
    height: "60%",
    width: "10%",
  },
  styleEditContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  styleLabel: {
    color: colors.medium,
    fontWeight: "bold",
    marginBottom: 2,
    textAlign: "center",
  },
  topButtons: {
    alignItems: "center",
    justifyContent: "center",
  },
  traitContainer: {
    position: "absolute",
    width: "100%",
  },
});
