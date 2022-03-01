import React from "react";
import { StyleSheet, Pressable, Platform } from "react-native";

function PressableOverlay({ onPress, ...props }) {
  return (
    <Pressable
      style={[
        Platform.OS === "ios" ? styles.iOSBackdrop : styles.androidBackdrop,
        styles.backdrop,
      ]}
      onPress={onPress}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  iOSBackdrop: {
    backgroundColor: "#000000",
    opacity: 0.5,
  },
  androidBackdrop: {
    backgroundColor: "#000000",
    opacity: 0.52,
  },
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default PressableOverlay;
