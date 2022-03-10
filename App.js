/*
App.js - App entry point.
*/

// External libraries
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { Store } from "./app/redux/store";
import { RootSiblingParent } from "react-native-root-siblings";

// Components
import MainNavigator from "./app/navigation/MainNavigator";

// Resources
import navigationTheme from "./app/navigation/navigationTheme";
import soundLibrary from "./app/assets/sounds/soundLibrary";
import useAudioController from "./app/hooks/useAudioController";
import useFonts from "./app/hooks/useFonts";

export default function App() {
  const { load } = useAudioController();

  const [assetsLoaded, setAssetsLoaded] = useState(false);

  const LoadAssets = async () => {
    await useFonts();

    const sounds = load(soundLibrary);
    return Promise.all([...sounds]);
  };

  if (!assetsLoaded) {
    return (
      <AppLoading
        startAsync={LoadAssets}
        onFinish={() => setAssetsLoaded(true)}
        onError={() => {}}
      />
    );
  }

  return (
    <NavigationContainer theme={navigationTheme}>
      <StatusBar
        style="light"
        backgroundColor="transparent"
        hidden={true}
        translucent={true}
      />
      <Provider store={Store}>
        <RootSiblingParent>
          <MainNavigator />
        </RootSiblingParent>
      </Provider>
    </NavigationContainer>
  );
}
