import React from "react";
import { View, StyleSheet, Modal } from "react-native";

import PressableOverlay from "./PressableOverlay";

function AppModal({ component, isVisible, setIsVisible }) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={setIsVisible}
    >
      <PressableOverlay onPress={setIsVisible} />
      <View style={styles.modalContainer}>{component}</View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default AppModal;
