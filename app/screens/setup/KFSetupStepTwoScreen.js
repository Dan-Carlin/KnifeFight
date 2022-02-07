import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import { BackGraphic, NextGraphic } from "../../assets/buttons/navigation";
import CloseButton from "../../components/CloseButton";
import * as ColorSvgs from "../../assets/buttons/colors/index";
import ColorButton from "../../components/ColorButton";
import NavButton from "../../components/NavButton";
import Screen from "../../components/Screen";
import Text from "../../components/Text";

const background = require("../../assets/backgrounds/kf_background_xxxhdpi.png");

function KFSetupStepTwoScreen(props) {
  return (
    <Screen style={styles.screenContainer} background={background}>
      <View style={styles.topContainer}>
        <View style={styles.closeButton}>
          <CloseButton onPress={() => console.log("Close button pressed.")} />
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>Next...</Text>
        <Text style={styles.text}>Let's choose a gang color.</Text>
        <View style={styles.colorGrid}>
          <View style={styles.colorRow}>
            <View style={styles.colorButton}>
              <ColorButton Graphic={ColorSvgs.Purple} />
            </View>
            <View style={styles.colorButton}>
              <ColorButton Graphic={ColorSvgs.Yellow} />
            </View>
            <View style={styles.colorButton}>
              <ColorButton Graphic={ColorSvgs.Green} />
            </View>
            <View style={styles.colorButton}>
              <ColorButton Graphic={ColorSvgs.Red} />
            </View>
            <View style={styles.colorButton}>
              <ColorButton Graphic={ColorSvgs.Orange} />
            </View>
            <View style={styles.colorButton}>
              <ColorButton Graphic={ColorSvgs.Blue} />
            </View>
          </View>
          <View style={styles.colorRow}>
            <View style={styles.colorButton}>
              <ColorButton Graphic={ColorSvgs.Black} />
            </View>
            <View style={styles.colorButton}>
              <ColorButton Graphic={ColorSvgs.White} />
            </View>
            <View style={styles.colorButton}>
              <ColorButton Graphic={ColorSvgs.Pink} />
            </View>
            <View style={styles.colorButton}>
              <ColorButton Graphic={ColorSvgs.Brown} />
            </View>
            <View style={styles.colorButton}>
              <ColorButton Graphic={ColorSvgs.Cyan} />
            </View>
            <View style={styles.colorButton}>
              <ColorButton Graphic={ColorSvgs.Gold} />
            </View>
          </View>
        </View>
        <View style={styles.navContainer}>
          <NavButton
            style={styles.navButton}
            Graphic={BackGraphic}
            onPress={() => console.log("Back button pressed.")}
          />
          <NavButton
            style={styles.navButton}
            Graphic={NextGraphic}
            onPress={() => console.log("Next button pressed.")}
          />
        </View>
      </View>
      <View style={styles.bottomContainer} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    alignItems: "center",
    flex: 0.5,
    justifyContent: "center",
    paddingHorizontal: 25,
  },
  bottomContainer: {
    alignItems: "center",
    flex: 0.25,
  },
  closeButton: {
    height: 50,
    marginStart: 35,
    marginTop: 20,
    width: 50,
  },
  colorButton: {
    alignItems: "center",
    flex: 0.15,
    justifyContent: "center",
  },
  colorGrid: {
    height: "55%",
    marginVertical: 6,
    width: "95%",
  },
  colorRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 4,
  },
  navButton: {
    height: "100%",
    width: "100%",
  },
  navContainer: {
    flexDirection: "row",
    height: 90,
  },
  text: {
    textAlign: "center",
  },
  topContainer: {
    flex: 0.25,
  },
  screenContainer: {
    flex: 1,
  },
  title: {
    fontFamily: "default",
    fontSize: 50,
    textAlign: "center",
  },
});

export default KFSetupStepTwoScreen;
