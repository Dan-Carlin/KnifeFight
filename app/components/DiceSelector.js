import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import {
  ArrowLeftGraphic,
  ArrowRightGraphic,
  LockGraphic,
} from "../assets/buttons/actions";

import Button from "./Button";
import Die from "./Die";

import dieType from "../data/dieTypes";
import { setD6Lock, setD8Lock, setD10Lock } from "../redux/diceActions";
import sounds from "../assets/sounds/sounds";

function DiceSelector({ Color, canRoll, results, resultsCallback }) {
  const [dieIndex, setDieIndex] = useState(0);

  const { d6IsLocked, d8IsLocked, d10IsLocked } = useSelector(
    (state) => state.diceReducer
  );
  const dispatch = useDispatch();

  const getD6RollState = d6IsLocked ? false : canRoll;
  const getD8RollState = d8IsLocked ? false : canRoll;
  const getD10RollState = d10IsLocked ? false : canRoll;

  const handleCallback = (result) => {
    resultsCallback(result);
  };

  const handleCallbackAndLockD6 = (result) => {
    dispatch(setD6Lock(true));
    resultsCallback(result);
  };

  const handleCallbackAndLockD8 = (result) => {
    dispatch(setD8Lock(true));
    resultsCallback(result);
  };

  const handleCallbackAndLockD10 = (result) => {
    dispatch(setD10Lock(true));
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
      style={{ opacity: getD6RollState && canRoll ? 1 : 0.4 }}
      DieType={dieType.D6}
      Color={Color}
      canRoll={getD6RollState}
      results={results}
      resultsCallback={(result) => handleCallbackAndLockD6(result)}
    />,
    <Die
      style={{ opacity: getD8RollState && canRoll ? 1 : 0.4 }}
      DieType={dieType.D8}
      Color={Color}
      canRoll={getD8RollState}
      results={results}
      resultsCallback={(result) => handleCallbackAndLockD8(result)}
    />,
    <Die
      style={{ opacity: getD10RollState && canRoll ? 1 : 0.4 }}
      DieType={dieType.D10}
      Color={Color}
      canRoll={getD10RollState}
      results={results}
      resultsCallback={(result) => handleCallbackAndLockD10(result)}
    />,
    <Die
      DieType={dieType.D20}
      Color={Color}
      canRoll={canRoll}
      results={results}
      resultsCallback={(result) => handleCallback(result)}
    />,
  ];

  const currentDice = diceArray[dieIndex];

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
      <View style={styles.diceContainer}>
        {currentDice}
        {d6IsLocked && currentDice == diceArray[1] && canRoll && (
          <View style={styles.lockButton}>
            <Button
              Graphic={LockGraphic}
              sound={sounds.PLUS}
              onPress={() => dispatch(setD6Lock(false))}
            />
          </View>
        )}
        {d8IsLocked && currentDice == diceArray[2] && canRoll && (
          <View style={styles.lockButton}>
            <Button
              Graphic={LockGraphic}
              sound={sounds.PLUS}
              onPress={() => dispatch(setD8Lock(false))}
            />
          </View>
        )}
        {d10IsLocked && currentDice == diceArray[3] && canRoll && (
          <View style={styles.lockButton}>
            <Button
              Graphic={LockGraphic}
              sound={sounds.PLUS}
              onPress={() => dispatch(setD10Lock(false))}
            />
          </View>
        )}
      </View>
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
    alignItems: "center",
    flex: 0.7,
    justifyContent: "center",
  },
  lockButton: {
    height: "45%",
    width: "45%",
    position: "absolute",
  },
  navButtons: {
    flex: 0.15,
    paddingTop: 45,
  },
});

export default DiceSelector;
