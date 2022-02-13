import React, { useState } from "react";
import { View, StyleSheet, BackHandler } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import {
  ArrowLeftGraphic,
  ArrowRightGraphic,
  BannerGraphic,
  DiceRollerGraphic,
  MinusGraphic,
  PlusGraphic,
} from "../../assets/buttons/actions";
import Button from "../../components/Button";
import colors from "../../config/colors";
import CounterContainer from "../../components/CounterContainer";
import CustomAlert from "../../components/CustomAlert";
import { HomeGraphic } from "../../assets/buttons/navigation";
import InstructionsModal from "../../components/InstructionsModal";
import Modal from "../../components/Modal";
import NameDisplay from "../../components/NameDisplay";
import OpacityButton from "../../components/OpacityButton";
import routes from "../../navigation/routes";
import Screen from "../../components/Screen";
import SoundButton from "../../components/SoundButton";
import Text from "../../components/Text";
import * as TraitSvgs from "../../assets/traits";

const background = require("../../assets/backgrounds/kf_background_land_xxxhdpi.png");

function KFToolsScreen({ navigation }) {
  const [exitModalVisible, setExitModalVisible] = useState(false);
  const [howToModalVisible, setHowToModalVisible] = useState(true);

  const onBackPress = () => {
    setExitModalVisible(true);
    return true;
  };

  useFocusEffect(
    React.useCallback(() => {
      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [])
  );

  return (
    <Screen style={styles.screenContainer} background={background}>
      <Modal
        component={
          <InstructionsModal onConfirm={() => setHowToModalVisible(false)} />
        }
        isVisible={howToModalVisible}
        setIsVisible={() => setHowToModalVisible(!howToModalVisible)}
      />

      <Modal
        component={
          <CustomAlert
            onCancel={() => setExitModalVisible(false)}
            onConfirm={() => navigation.popToTop()}
          />
        }
        isVisible={exitModalVisible}
        setIsVisible={() => setExitModalVisible(!exitModalVisible)}
      />

      <View style={styles.leftContainer}>
        <View style={styles.topButtons}>
          <SoundButton style={styles.soundButton} />
        </View>
        <View style={styles.diceRollButton}>
          <OpacityButton
            Graphic={DiceRollerGraphic}
            onPress={() => console.log("Dice roller button pressed.")}
          />
        </View>
      </View>
      <View style={styles.centerContainer}>
        <View style={styles.nameContainer}>
          <View style={styles.styleEditContainer}>
            <View style={styles.styleButtons}>
              <Button
                Graphic={ArrowLeftGraphic}
                onPress={() => console.log("Previous style pressed.")}
              />
            </View>
            <View style={styles.fontPickerContainer}>
              <Text style={styles.styleLabel}>Font Style:</Text>
              <Text style={styles.currentFont}>Default</Text>
            </View>
            <View style={styles.styleButtons}>
              <Button
                Graphic={ArrowRightGraphic}
                onPress={() => console.log("Next style pressed.")}
              />
            </View>
          </View>
          <View style={styles.nameDisplayContainer}>
            <NameDisplay
              gangName={"Gang Name"}
              gangTrait={"Unstable"}
              font="default"
              color={colors.gang_red}
            />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.hpButtons}>
            <Button
              Graphic={MinusGraphic}
              onPress={() => console.log("Minus button pressed.")}
            />
          </View>
          <CounterContainer
            width={240}
            Graphic={TraitSvgs.Unstable}
            hpValue="25"
            gangColor={colors.gang_red}
          />
          <View style={styles.hpButtons}>
            <Button
              Graphic={PlusGraphic}
              onPress={() => console.log("Plus button pressed.")}
            />
          </View>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.topButtons}>
          <OpacityButton Graphic={HomeGraphic} onPress={() => onBackPress()} />
        </View>
        <View style={styles.bannerButton}>
          <OpacityButton
            Graphic={BannerGraphic}
            onPress={() => navigation.navigate(routes.BANNER)}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  bannerButton: {
    height: "50%",
    padding: 10,
    width: "100%",
  },
  bottomContainer: {
    alignItems: "center",
    flex: 0.5,
    flexDirection: "row",
    paddingHorizontal: 10,
    width: "100%",
  },
  centerContainer: {
    alignItems: "center",
    flex: 0.6,
  },
  currentFont: {
    fontSize: 18,
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: "center",
  },
  diceRollButton: {
    height: "50%",
    padding: 30,
    width: "100%",
  },
  fontPickerContainer: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    width: "30%",
  },
  hpButtons: {
    bottom: -25,
    flex: 1,
    margin: 10,
  },
  leftContainer: {
    alignItems: "center",
    flex: 0.2,
    justifyContent: "space-between",
  },
  nameContainer: {
    alignItems: "center",
    flex: 0.5,
    width: "100%",
  },
  nameDisplayContainer: {
    flex: 0.65,
    height: "100%",
    width: "100%",
  },
  rightContainer: {
    alignItems: "center",
    flex: 0.2,
    justifyContent: "space-between",
  },
  screenContainer: {
    flex: 1,
    flexDirection: "row",
  },
  soundButton: {
    height: "60%",
    width: "60%",
  },
  styleButtons: {
    height: "100%",
    padding: 14,
    width: "20%",
  },
  styleEditContainer: {
    alignItems: "center",
    flex: 0.35,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  styleLabel: {
    color: colors.medium,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  topButtons: {
    alignItems: "center",
    flexDirection: "row",
    height: "25%",
    justifyContent: "center",
    padding: 15,
    width: "100%",
  },
});

export default KFToolsScreen;
