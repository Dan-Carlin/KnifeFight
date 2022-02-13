import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import KFBannerScreen from "../screens/tools/KFBannerScreen";
import KFToolsScreen from "../screens/tools/KFToolsScreen";
import InstructionsNavigator from "./InstructionsNavigator";

const Stack = createNativeStackNavigator();

const GameNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      orientation: "landscape",
      presentation: "containedTransparentModal",
    }}
  >
    <Stack.Screen name="Tools" component={KFToolsScreen} />
    <Stack.Screen name="Banner" component={KFBannerScreen} />
    <Stack.Screen name="Instructions" component={InstructionsNavigator} />
  </Stack.Navigator>
);

export default GameNavigator;
