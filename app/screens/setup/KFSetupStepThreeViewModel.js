/*
KFSetupStepThreeViewModel - ViewModel for the third setup screen.
*/

// External libraries
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Resources
import gangTraits from "../../data/gangTraits";

function KFSetupStepThreeViewModel(props) {
  const [gangTrait, setGangTrait] = useState(gangTraits.NONE);
  const [traitIsSelected, setTraitIsSelected] = useState(false);

  const setGangTraitValue = (value) => {
    if (value != gangTraits.NONE) {
      setTraitIsSelected(true);
    } else {
      setTraitIsSelected(false);
    }
    setGangTrait(value);
  };

  const storeGangTraitValue = async () => {
    try {
      const jsonValue = JSON.stringify(gangTrait);
      await AsyncStorage.setItem("@gangTrait", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    gangTrait,
    traitIsSelected,
    setGangTraitValue,
    storeGangTraitValue,
  };
}

export default KFSetupStepThreeViewModel;
