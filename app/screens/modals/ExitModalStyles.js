/* 
ExitModalStyles - Stylesheet for ExitModal.js
*/

import { StyleSheet } from "react-native";

import colors from "../../config/colors";

export default StyleSheet.create({
  alertContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  alertIcon: {
    height: "100%",
    marginEnd: 6,
    width: "10%",
  },
  bodyContainer: {
    flex: 0.4,
    padding: 10,
  },
  bodyText: {
    color: colors.light,
  },
  button: {
    height: "80%",
    width: "30%",
  },
  buttonsContainer: {
    flex: 0.35,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: colors.dark,
    borderColor: colors.black,
    borderRadius: 20,
    borderWidth: 2,
    height: "50%",
    overflow: "hidden",
    width: "60%",
  },
  title: {
    fontFamily: "default",
    fontSize: 50,
  },
  titleContainer: {
    backgroundColor: "#0005",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    borderBottomColor: colors.black,
    borderEndColor: colors.black,
    borderStartColor: colors.light,
    borderTopColor: colors.light,
    borderWidth: 2,
    flex: 0.25,
    flexDirection: "row",
    padding: 4,
  },
});
