/* 
InstructionsModalStyles - Stylesheet for InstructionsModal.js
*/

import { StyleSheet } from "react-native";

import colors from "../../../config/colors";

export default StyleSheet.create({
  bodyContainer: {
    padding: 10,
  },
  bottomContainer: {
    alignItems: "center",
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  confirmButton: {
    bottom: 10,
    position: "absolute",
    right: 10,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  centerContainer: {
    flex: 0.8,
  },
  container: {
    backgroundColor: colors.dark,
    borderColor: colors.black,
    borderRadius: 20,
    overflow: "hidden",
  },
  leftContainer: {
    flex: 0.1,
  },
  pageLabel: {
    justifyContent: "center",
  },
  pageLabelText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  rightContainer: {
    flex: 0.1,
  },
  title: {
    fontFamily: "default",
    fontSize: 32,
    textAlign: "center",
  },
  titleContainer: {
    alignItems: "center",
    backgroundColor: "#0005",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    borderBottomColor: colors.black,
    borderEndColor: colors.black,
    borderStartColor: colors.light,
    borderTopColor: colors.light,
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 4,
    paddingHorizontal: 14,
  },
});
