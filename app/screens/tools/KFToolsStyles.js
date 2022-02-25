import { StyleSheet } from "react-native";

import colors from "../../config/colors";

export default StyleSheet.create({
  bannerButton: {
    height: "50%",
    padding: 10,
    width: "100%",
  },
  bottomContainer: {
    alignItems: "center",
    flex: 0.5,
    flexDirection: "row",
    paddingHorizontal: 10,
    width: "100%",
  },
  centerContainer: {
    alignItems: "center",
    flex: 0.6,
  },
  checkbox: {
    alignSelf: "center",
    height: "50%",
    justifyContent: "flex-end",
    width: "17%",
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
    height: "60%",
    justifyContent: "center",
    width: "25%",
  },
  hpButtons: {
    bottom: -25,
    flex: 1,
    margin: 10,
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
    flex: 0.65,
    height: "100%",
    width: "100%",
  },
  rightContainer: {
    alignItems: "center",
    flex: 0.2,
    justifyContent: "space-between",
  },
  screenContainer: {
    flex: 1,
    flexDirection: "row",
  },
  soundButton: {
    height: "60%",
    width: "60%",
  },
  styleButtons: {
    height: "60%",
    width: "15%",
  },
  styleEditContainer: {
    alignItems: "flex-start",
    flex: 0.35,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  styleLabel: {
    color: colors.medium,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 2,
    textAlign: "center",
  },
  topButtons: {
    alignItems: "center",
    flexDirection: "row",
    height: "25%",
    justifyContent: "center",
    padding: 15,
    width: "100%",
  },
});
