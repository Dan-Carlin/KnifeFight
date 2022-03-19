/*
KFToolsPortraitLayout - Portrait layout for the tools screen.
*/

// External libraries
import React from "react";
import { View, StyleSheet } from "react-native";

// Assets
import {
  ArrowLeftGraphic,
  ArrowRightGraphic,
  BannerGraphic,
  DiceRollerGraphic,
  HpCounterGraphic,
} from "../../../assets/buttons/actions";
import { HomeGraphic } from "../../../assets/buttons/navigation";

// Components
import AutoSizeText from "../../../components/AutoSizeText";
import Button from "../../../components/Button";
import Checkbox from "../../../components/Checkbox";
import DiceSelector from "../../../components/DiceSelector";
import ExitModal from "../../modals/ExitModal";
import HPCounter from "../../../components/HPCounter";
import InstructionsModal from "../../modals/InstructionsModal";
import LastRollBox from "../../../components/LastRollBox";
import ModalWithPressable from "../../../components/ModalWithPressable";
import ModalNoPressable from "../../../components/ModalNoPressable";
import NameDisplay from "../../../components/NameDisplay";
import OpacityButton from "../../../components/OpacityButton";
import RollResults from "../../../components/RollResults";
import Screen from "../../../components/Screen";
import SoundButton from "../../../components/SoundButton";
import Text from "../../../components/Text";
import TraitContainer from "../../../components/TraitContainer";

// Resources
import defaultStyles from "../../../config/styles";
import sounds from "../../../assets/sounds/sounds";
import strings from "../../../config/strings";
import styles from "./KFToolsStyles";

function KFToolsPortraitLayout({ actions, values }) {
  const setToolsMode = values.diceMode ? (
    <DiceSelector
      Color={values.gangColor}
      canRoll={!values.rollResultsVisible}
      results={values.rollResult}
      resultsCallback={(result) => actions.resultsCallback(result)}
    />
  ) : (
    <HPCounter
      hpValue={values.hpCount}
      decreaseHp={() => actions.decreaseCount()}
      increaseHp={() => actions.increaseCount()}
      Color={values.gangColor}
    />
  );

  return (
    <Screen style={defaultStyles.screenContainer} isPortrait={true}>
      <ModalWithPressable
        component={
          <InstructionsModal
            onConfirm={() => actions.instructionsConfirmButton()}
          />
        }
        isVisible={values.instructionsModalVisible}
        setIsVisible={() => actions.instructionsModalVisibility()}
      />

      <ModalWithPressable
        component={
          <ExitModal
            onCancel={() => actions.exitModalCancelButton()}
            onConfirm={() => actions.exitModalConfirmButton()}
          />
        }
        isVisible={values.exitModalVisible}
        setIsVisible={() => actions.exitModalVisibility()}
      />

      <ModalNoPressable
        component={
          <RollResults
            results={values.rollResult}
            onClose={() => actions.rollResultsCloseButton()}
          />
        }
        isVisible={values.rollResultsVisible}
        setIsVisible={() => actions.rollResultsVisibility()}
      />

      <View style={portraitStyles.bodycontainer}>
        <View style={portraitStyles.topContainer}>
          <View style={[styles.topButtons, portraitStyles.topButtons]}>
            <SoundButton
              style={portraitStyles.soundButton}
              enabled={values.enableAudio}
              onPress={() => actions.soundButton()}
            />
          </View>
          <View style={[styles.topButtons, portraitStyles.topButtons]}>
            <OpacityButton
              Graphic={HomeGraphic}
              sound={sounds.CLOSE_EXIT}
              onPress={() => actions.homeButton()}
            />
          </View>
        </View>
        <View style={portraitStyles.nameContainer}>
          <View
            style={[
              styles.nameDisplayContainer,
              portraitStyles.nameDisplayContainer,
            ]}
          >
            <NameDisplay
              gangName={values.gangName}
              Trait={values.gangTrait}
              style={values.nameDisplayStyles}
              Color={values.gangColor}
              isPortrait={true}
            />
          </View>
          <View
            style={[
              styles.styleEditContainer,
              portraitStyles.styleEditContainer,
            ]}
          >
            <View style={styles.styleButtons}>
              <Button
                Graphic={ArrowLeftGraphic}
                sound={sounds.ARROW_LEFT}
                onPress={() => actions.fontArrowLeftButton()}
              />
            </View>
            <View style={styles.fontPickerContainer}>
              <AutoSizeText style={styles.styleLabel}>
                {strings.tools_font_label}
              </AutoSizeText>
              <AutoSizeText style={styles.currentFont}>
                {values.fontName}
              </AutoSizeText>
            </View>
            <View style={styles.styleButtons}>
              <Button
                Graphic={ArrowRightGraphic}
                sound={sounds.ARROW_RIGHT}
                onPress={() => actions.fontArrowRightButton()}
              />
            </View>
            <View style={styles.checkboxAttribute}>
              <Text style={styles.styleLabel}>{strings.tools_bevel_label}</Text>
              <View style={styles.checkbox}>
                <Checkbox
                  checked={values.bevelVisible}
                  onSelect={() => actions.bevelCheckbox()}
                />
              </View>
            </View>
            <View style={styles.checkboxAttribute}>
              <Text style={styles.styleLabel}>
                {strings.tools_shadow_label}
              </Text>
              <View style={styles.checkbox}>
                <Checkbox
                  checked={values.shadowVisible}
                  onSelect={() => actions.shadowCheckbox()}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={portraitStyles.toolsContainer}>
          <TraitContainer
            child={setToolsMode}
            style={styles.traitContainer}
            width={values.screenWidth / 2}
            Trait={values.gangTrait}
            Color={values.gangColor}
          />
        </View>
        <View style={portraitStyles.bottomContainer}>
          <View style={portraitStyles.diceRollButton}>
            {!values.diceMode && (
              <OpacityButton
                Graphic={DiceRollerGraphic}
                sound={sounds.DICE_ROLLER}
                onPress={() => actions.diceRollerButton()}
              />
            )}
            {values.diceMode && (
              <OpacityButton
                Graphic={HpCounterGraphic}
                sound={sounds.DICE_ROLLER}
                onPress={() => actions.hpCounterButton()}
              />
            )}
          </View>
          <View style={portraitStyles.lastRollBox}>
            {values.rollResult.value != 0 && (
              <LastRollBox results={values.rollResult} />
            )}
          </View>
          <View style={portraitStyles.bannerButton}>
            <OpacityButton
              Graphic={BannerGraphic}
              sound={sounds.START_END_TURN}
              onPress={() => actions.bannerButton()}
            />
          </View>
        </View>
      </View>
    </Screen>
  );
}

const portraitStyles = StyleSheet.create({
  bannerButton: {
    height: "100%",
    padding: 5,
    width: "32%",
  },
  bodycontainer: {
    flex: 1,
  },
  bottomContainer: {
    alignItems: "center",
    backgroundColor: defaultStyles.colors.dark,
    borderTopColor: defaultStyles.colors.light,
    borderTopWidth: 6,
    flex: 0.18,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  diceRollButton: {
    height: "100%",
    paddingHorizontal: 16,
    width: "30%",
  },
  lastRollBox: {
    height: "75%",
    marginStart: 6,
    width: "33%",
  },
  nameContainer: {
    flex: 0.47,
    justifyContent: "flex-start",
    paddingHorizontal: 15,
  },
  nameDisplayContainer: {
    alignSelf: "center",
    flex: 0.7,
    height: "70%",
    position: "absolute",
    bottom: 0,
  },
  soundButton: {
    height: "70%",
    width: "70%",
  },
  styleEditContainer: {
    flex: 0.3,
  },
  toolsContainer: {
    flex: 0.25,
    paddingHorizontal: 15,
  },
  topButtons: {
    height: "100%",
    padding: 10,
    width: "20%",
  },
  topContainer: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});

export default KFToolsPortraitLayout;
