import React from "react";
import { View, StyleSheet } from "react-native";

import AlertIcon from "../assets/kf_alert.svg";
import Button from "./Button";
import { CancelGraphic, YesGraphic } from "../assets/buttons/actions";
import colors from "../config/colors";
import Text from "./Text";

function CustomAlert({ onConfirm, onCancel, modalVisible }) {
  const message =
    "Are you sure you want to end the game? \n(All data will be lost.)";

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={styles.alertIcon}>
            <AlertIcon />
          </View>
          <Text style={styles.title}>Hold up!</Text>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyText}>{message}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button Graphic={CancelGraphic} onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button Graphic={YesGraphic} onPress={onConfirm} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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

export default CustomAlert;
