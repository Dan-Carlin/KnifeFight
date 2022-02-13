import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";

import useFonts from "./app/hooks/useFonts";
import MainNavigator from "./app/navigation/MainNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";

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
      <NavigationContainer theme={NavigationTheme}>
        <MainNavigator />
      </NavigationContainer>
    </>
  );
}
