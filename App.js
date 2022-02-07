import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import AppLoading from "expo-app-loading";

import KFHomeScreen from "./app/screens/home/KFHomeScreen";
import KFSetupStepOneScreen from "./app/screens/setup/KFSetupStepOneScreen";
import KFSetupStepTwoScreen from "./app/screens/setup/KFSetupStepTwoScreen";
import KFSetupStepThreeScreen from "./app/screens/setup/KFSetupStepThreeScreen";
import KFBannerScreen from "./app/screens/tools/KFBannerScreen";
import KFToolsScreen from "./app/screens/tools/KFToolsScreen";
import useFonts from "./app/hooks/useFonts";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={() => {}}
      />
    );
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="transparent" />
      <KFToolsScreen />
    </>
  );
}
