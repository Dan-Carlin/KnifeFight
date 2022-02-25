import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";

import OpacityButton from "./OpacityButton";

import { CloseGraphic } from "../assets/buttons/navigation";
import {
  D4Graphic,
  D6Graphic,
  D8Graphic,
  D10Graphic,
  D20Graphic,
} from "../assets/buttons/actions";

function DiceRollerMenu({ onClose }) {
  const translation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(translation, {
      toValue: 50,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <View style={styles.closeButton}>
          <OpacityButton Graphic={CloseGraphic} onPress={onClose} />
        </View>
        <Animated.View style={styles.diceButton}>
          <OpacityButton
            Graphic={D4Graphic}
            onPress={() => console.log("D4 button pressed.")}
          />
        </Animated.View>
        <Animated.View style={styles.diceButton}>
          <OpacityButton
            Graphic={D6Graphic}
            onPress={() => console.log("D6 button pressed.")}
          />
        </Animated.View>
        <Animated.View style={styles.diceButton}>
          <OpacityButton
            Graphic={D8Graphic}
            onPress={() => console.log("D8 button pressed.")}
          />
        </Animated.View>
        <Animated.View style={styles.diceButton}>
          <OpacityButton
            Graphic={D10Graphic}
            onPress={() => console.log("D10 button pressed.")}
          />
        </Animated.View>
        <Animated.View style={styles.attackButton}>
          <OpacityButton
            Graphic={D20Graphic}
            onPress={() => console.log("D20 button pressed.")}
          />
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  attackButton: {
    height: 100,
    // position: "absolute",
    width: 100,
  },
  closeButton: {
    height: 80,
    padding: 16,
    width: 80,
  },
  container: {
    height: "100%",
    justifyContent: "flex-end",
    paddingHorizontal: "4.5%",
    paddingVertical: "2.2%",
    width: "100%",
  },
  diceButton: {
    height: 80,
    // position: "absolute",
    width: 80,
  },
  menuContainer: {
    alignItems: "center",
    flexDirection: "row",
    // justifyContent: "space-between",
  },
});

export default DiceRollerMenu;
