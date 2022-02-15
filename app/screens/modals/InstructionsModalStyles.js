/* 
InstructionsModalStyles - Stylesheet for InstructionsModal.js
*/

import { StyleSheet } from "react-native";

import colors from "../../config/colors";

export default StyleSheet.create({
  bodyContainer: {
    flex: 0.83,
    padding: 10,
  },
  button: {
    height: "60%",
    width: "50%",
  },
  buttonsContainer: {
    alignItems: "center",
    flex: 0.11,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: colors.dark,
    borderColor: colors.black,
    borderRadius: 20,
    height: "165%",
    overflow: "hidden",
    transform: [{ rotate: "-90deg" }],
    width: "45%",
  },
  title: {
    fontFamily: "default",
    fontSize: 40,
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
    flex: 0.06,
    flexDirection: "row",
    padding: 4,
  },
});
