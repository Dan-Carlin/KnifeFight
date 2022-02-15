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
  currentFont: {
    fontSize: 18,
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: "center",
  },
  diceRollButton: {
    height: "50%",
    padding: 30,
    width: "100%",
  },
  fontPickerContainer: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    width: "30%",
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
    height: "100%",
    padding: 14,
    width: "20%",
  },
  styleEditContainer: {
    alignItems: "center",
    flex: 0.35,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  styleLabel: {
    color: colors.medium,
    fontSize: 20,
    fontWeight: "bold",
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
