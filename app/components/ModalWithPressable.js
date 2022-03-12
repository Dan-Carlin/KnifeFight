import React from "react";
import { View, StyleSheet, Modal } from "react-native";

import PressableOverlay from "./PressableOverlay";

function AppModal({ component, isVisible, setIsVisible, testID, ...props }) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      supportedOrientations={["portrait", "landscape"]}
      onRequestClose={setIsVisible}
      {...props}
    >
      <PressableOverlay onPress={setIsVisible} />
      <View style={styles.modalContainer} testID={testID}>
        {component}
      </View>
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
