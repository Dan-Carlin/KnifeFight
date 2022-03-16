import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { AutoSizeText, ResizeTextMode } from "react-native-auto-size-text";
import { LinearGradient } from "expo-linear-gradient";

import { CheckGraphic } from "../assets/buttons/actions";
import colors from "../config/colors";
import sounds from "../assets/sounds/sounds";
import { traits } from "../assets/traits/TraitArray";
import useAudioController from "../hooks/useAudioController";

function TraitButton({ Trait, isSelected, onSelect, ...props }) {
  const { playSound } = useAudioController();

  function onCheckmarkPress() {
    playSound(sounds.TRAIT_DICE);
    onSelect();
  }

  const TraitGraphic = traits[Trait.svgId];

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        {...props}
        style={styles.checkboxBase}
        onPress={onCheckmarkPress}
      >
        <TraitGraphic style={styles.traitGraphic} />
        <LinearGradient
          style={styles.gradient}
          colors={["#0000", colors.black]}
          start={{ x: 0, y: 0.6 }}
          end={{ x: 0, y: 0.8 }}
        />
        <AutoSizeText
          style={styles.traitName}
          fontSize={12}
          numberOfLines={1}
          mode={ResizeTextMode.max_lines}
        >
          {Trait.name}
        </AutoSizeText>
        {isSelected && (
          <View style={styles.traitSelect}>
            <CheckGraphic />
          </View>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.black,
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  checkboxBase: {
    alignItems: "center",
    borderColor: colors.dark,
    height: "100%",
    justifyContent: "flex-end",
    width: "100%",
  },
  gradient: {
    height: "100%",
    opacity: 0.4,
    position: "absolute",
    width: "100%",
  },
  traitGraphic: {
    bottom: 2,
    height: "82%",
    position: "absolute",
    width: "82%",
  },
  traitName: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
  },
  traitSelect: {
    backgroundColor: "#fff4",
    borderColor: colors.white,
    borderWidth: 3,
    height: "100%",
    padding: 8,
    position: "absolute",
    width: "100%",
  },
});

export default TraitButton;
