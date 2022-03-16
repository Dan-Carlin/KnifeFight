import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { StartGameGraphic } from "../assets/buttons/navigation";

import * as StartGame from "../assets/buttons/startgame";

import getRandomNumber from "../utils/getRandomNumber";
import traitColors from "../data/traitColors";
import useAudioController from "../hooks/useAudioController";

const colorsArray = [
  traitColors.BLUE,
  traitColors.GREEN,
  traitColors.PURPLE,
  traitColors.RED,
  traitColors.YELLOW,
];

function StartGameButton({ onPress, sound }) {
  const { playSound } = useAudioController();
  const onButtonPressed = () => {
    playSound(sound);
    setTimeout(() => {
      onPress();
    }, 100);
  };

  const getRandomColor = colorsArray[getRandomNumber(colorsArray.length)];

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onButtonPressed()}
    >
      <StartGame.SideDark style={styles.layers} />
      <StartGame.SideMedium style={styles.layers} />
      <StartGame.SideLight style={styles.layers} />
      <StartGame.Outline
        style={[styles.layers, { color: getRandomColor.dark }]}
      />
      <StartGame.Fill
        style={[styles.layers, { color: getRandomColor.light }]}
      />
      <StartGame.Paint
        style={[styles.layers, { color: getRandomColor.medium }]}
      />
      <StartGame.Highlight style={styles.layers} />
      <StartGameGraphic style={styles.buttonText} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    height: "50%",
    position: "absolute",
    width: "75%",
  },
  container: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },
  layers: {
    height: "100%",
    position: "absolute",
    width: "100%",
  },
});

export default StartGameButton;
