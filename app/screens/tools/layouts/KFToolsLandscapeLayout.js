/*
KFToolsLandscapeLayout - Landscape layout for the tools screen.
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
import Button from "../../../components/Button";
import Checkbox from "../../../components/Checkbox";
import DiceSelector from "../../../components/DiceSelector";
import HPCounter from "../../../components/HPCounter";
import KFExitModal from "../../modals/KFExitModal";
import KFInstructionsModal from "../../modals/KFInstructionsModal";
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

function KFToolsLandscapeLayout({ actions, values }) {
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
    <Screen style={landscapeStyles.screenContainer} isPortrait={false}>
      <ModalWithPressable
        component={
          <KFInstructionsModal
            onConfirm={() => actions.instructionsConfirmButton()}
          />
        }
        isVisible={values.instructionsModalVisible}
        setIsVisible={() => actions.instructionsModalVisibility()}
      />

      <ModalWithPressable
        component={
          <KFExitModal
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

      <View style={landscapeStyles.bottomBar} />
      <View style={styles.leftContainer}>
        <View style={[styles.topButtons, landscapeStyles.topButtons]}>
          <SoundButton
            style={landscapeStyles.soundButton}
            enabled={values.enableAudio}
            onPress={() => actions.soundButton()}
          />
        </View>
        <View style={styles.lastRollBox}>
          {values.rollResult.value != 0 && (
            <LastRollBox results={values.rollResult} />
          )}
        </View>
        <View style={styles.diceRollButton}>
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
      </View>
      <View style={styles.centerContainer}>
        <View style={[styles.nameContainer, landscapeStyles.nameContainer]}>
          <View
            style={[
              styles.nameDisplayContainer,
              landscapeStyles.nameDisplayContainer,
            ]}
          >
            <NameDisplay
              gangName={values.gangName}
              Trait={values.gangTrait}
              style={values.nameDisplayStyles}
              Color={values.gangColor}
            />
          </View>
          <View
            style={[
              styles.styleEditContainer,
              landscapeStyles.styleEditContainer,
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
              <Text style={styles.styleLabel}>{strings.tools_font_label}</Text>
              <Text style={styles.currentFont}>{values.fontName}</Text>
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
        <View style={landscapeStyles.bottomContainer}>
          <TraitContainer
            child={setToolsMode}
            style={styles.traitContainer}
            width={values.screenWidth / 3.5}
            Trait={values.gangTrait}
            Color={values.gangColor}
          />
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={[styles.topButtons, landscapeStyles.topButtons]}>
          <OpacityButton
            Graphic={HomeGraphic}
            sound={sounds.CLOSE_EXIT}
            onPress={() => actions.homeButton()}
          />
        </View>
        <View style={landscapeStyles.bannerButton}>
          <OpacityButton
            Graphic={BannerGraphic}
            sound={sounds.START_END_TURN}
            onPress={() => actions.bannerButton()}
          />
        </View>
      </View>
    </Screen>
  );
}

const landscapeStyles = StyleSheet.create({
  bannerButton: {
    height: "50%",
    padding: 10,
    width: "100%",
  },
  bottomBar: {
    alignSelf: "flex-end",
    backgroundColor: defaultStyles.colors.dark,
    borderTopColor: defaultStyles.colors.light,
    borderTopWidth: 6,
    height: "25%",
    position: "absolute",
    width: "100%",
  },
  bottomContainer: {
    alignItems: "center",
    flex: 0.5,
    paddingHorizontal: 10,
    width: "100%",
  },
  nameContainer: {
    justifyContent: "flex-start",
  },
  nameDisplayContainer: {
    bottom: 0,
    height: "60%",
    position: "absolute",
  },
  screenContainer: {
    flex: 1,
    flexDirection: "row",
  },
  soundButton: {
    height: "60%",
    width: "60%",
  },
  styleEditContainer: {
    flex: 0.4,
  },
  topButtons: {
    height: "25%",
    padding: 15,
    width: "100%",
  },
});

export default KFToolsLandscapeLayout;
