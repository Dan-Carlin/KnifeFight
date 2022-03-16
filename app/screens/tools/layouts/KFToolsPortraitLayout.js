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
    <Screen style={styles.screenContainer} isPortrait={true}>
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

      <View style={styles.leftContainer}>
        <View style={styles.topButtons}>
          <SoundButton
            style={styles.soundButton}
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
        <View style={styles.nameContainer}>
          <View style={styles.styleEditContainer}>
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
          <View style={styles.nameDisplayContainer}>
            <NameDisplay
              gangName={values.gangName}
              Trait={values.gangTrait}
              style={values.nameDisplayStyles}
              Color={values.gangColor}
            />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <TraitContainer
            child={setToolsMode}
            style={styles.traitContainer}
            width={240}
            Trait={values.gangTrait}
            Color={values.gangColor}
          />
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.topButtons}>
          <OpacityButton
            Graphic={HomeGraphic}
            sound={sounds.CLOSE_EXIT}
            onPress={() => actions.homeButton()}
          />
        </View>
        <View style={styles.bannerButton}>
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

const portraitStyles = StyleSheet.create({
  container: {},
});

export default KFToolsPortraitLayout;
