/*
KFSetupStepTwoViewModel - ViewModel for the second setup screen.
*/

// External libraries
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Resources
import gangColors from "../../data/gangColors";

function KFSetupStepTwoViewModel(props) {
  const [gangColor, setGangColor] = useState(gangColors.NONE);
  const [colorIsSelected, setColorIsSelected] = useState(false);

  const setGangColorValue = (value) => {
    if (value != gangColors.NONE) {
      setColorIsSelected(true);
    } else {
      setColorIsSelected(false);
    }
    setGangColor(value);
  };

  const storeGangColorValue = async () => {
    try {
      const jsonValue = JSON.stringify(gangColor);
      await AsyncStorage.setItem("@gangColor", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    gangColor,
    colorIsSelected,
    setGangColorValue,
    storeGangColorValue,
  };
}

export default KFSetupStepTwoViewModel;
