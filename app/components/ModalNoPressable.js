import React from "react";
import { View, StyleSheet, Modal } from "react-native";

function ModalNoPressable({
  component,
  isVisible,
  setIsVisible,
  testID,
  ...props
}) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      supportedOrientations={["portrait", "landscape"]}
      onRequestClose={setIsVisible}
      {...props}
    >
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

export default ModalNoPressable;
