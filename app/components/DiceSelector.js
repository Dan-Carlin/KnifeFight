import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import { ArrowLeftGraphic, ArrowRightGraphic } from "../assets/buttons/actions";

import Button from "./Button";
import Die from "./Die";

import dieType from "../data/dieTypes";
import sounds from "../assets/sounds/sounds";

function DiceSelector({ Color, canRoll, results, resultsCallback }) {
  const [dieIndex, setDieIndex] = useState(0);

  const handleCallback = (result) => {
    resultsCallback(result);
  };

  const diceArray = [
    <Die
      DieType={dieType.D4}
      Color={Color}
      canRoll={canRoll}
      results={results}
      resultsCallback={(result) => handleCallback(result)}
    />,
    <Die
      DieType={dieType.D6}
      Color={Color}
      canRoll={canRoll}
      results={results}
      resultsCallback={(result) => handleCallback(result)}
    />,
    <Die
      DieType={dieType.D8}
      Color={Color}
      canRoll={canRoll}
      results={results}
      resultsCallback={(result) => handleCallback(result)}
    />,
    <Die
      DieType={dieType.D10}
      Color={Color}
      canRoll={canRoll}
      results={results}
      resultsCallback={(result) => handleCallback(result)}
    />,
    <Die
      DieType={dieType.D20}
      Color={Color}
      canRoll={canRoll}
      results={results}
      resultsCallback={(result) => handleCallback(result)}
    />,
  ];

  const previousDie = () => {
    if (dieIndex == 0) {
      setDieIndex(diceArray.length - 1);
    } else {
      setDieIndex(dieIndex - 1);
    }
  };
  const nextDie = () => {
    if (dieIndex == diceArray.length - 1) {
      setDieIndex(0);
    } else {
      setDieIndex(dieIndex + 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.navButtons}>
        <Button
          testID="dsl_btn_previous"
          Graphic={ArrowLeftGraphic}
          sound={sounds.ARROW_LEFT}
          onPress={() => previousDie()}
        />
      </View>
      <View style={styles.diceContainer}>{diceArray[dieIndex]}</View>
      <View style={styles.navButtons}>
        <Button
          testID="dsl_btn_next"
          Graphic={ArrowRightGraphic}
          sound={sounds.ARROW_RIGHT}
          onPress={() => nextDie()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: "100%",
    width: "100%",
  },
  diceContainer: {
    flex: 0.7,
  },
  navButtons: {
    flex: 0.15,
    paddingTop: 45,
  },
});

export default DiceSelector;
