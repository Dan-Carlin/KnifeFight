import React from "react";
import { StyleSheet, View, Platform } from "react-native";

import DefeatedOverlayGraphic from "../assets/kf_defeated_overlay.svg";

function DefeatedOverlay({ ...props }) {
  return (
    <View
      style={[
        Platform.OS === "ios" ? styles.iOSBackdrop : styles.androidBackdrop,
        styles.backdrop,
      ]}
      {...props}
    >
      <DefeatedOverlayGraphic />
    </View>
  );
}

const styles = StyleSheet.create({
  androidBackdrop: {
    backgroundColor: "#000000",
    opacity: 0.32,
  },
  iOSBackdrop: {
    backgroundColor: "#000000",
    opacity: 0.3,
  },
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 20,
  },
});

export default DefeatedOverlay;
