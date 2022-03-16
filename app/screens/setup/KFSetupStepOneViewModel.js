/*
KFSetupStepOneViewModel - ViewModel for the first setup screen.
*/

// External libraries
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Resources
import useNameGenerator from "../../hooks/useNameGenerator";

function KFSetupStepOneViewModel(props) {
  const [gangName, setGangName] = useState("");
  const [nameIsEntered, setNameIsEntered] = useState(false);
  const { getRandomName } = useNameGenerator();

  const setGangNameValue = (value) => {
    if (value.length >= 2) {
      setNameIsEntered(true);
    } else {
      setNameIsEntered(false);
    }
    setGangName(value);
  };

  const setRandomNameValue = () => {
    setGangNameValue(getRandomName());
  };

  const storeGangNameValue = async () => {
    const trimmedName = gangName.trim();

    try {
      await AsyncStorage.setItem("@gangName", trimmedName);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    gangName,
    nameIsEntered,
    setGangNameValue,
    setRandomNameValue,
    storeGangNameValue,
  };
}

export default KFSetupStepOneViewModel;
