import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GameNavigator from "./GameNavigator";
import KFHomeScreen from "../screens/home/KFHomeScreen";
import KFSettingsScreen from "../screens/settings/KFSettingsScreen";
import KFSetupStepOneScreen from "../screens/setup/KFSetupStepOneScreen";
import KFSetupStepTwoScreen from "../screens/setup/KFSetupStepTwoScreen";
import KFSetupStepThreeScreen from "../screens/setup/KFSetupStepThreeScreen";

const Stack = createNativeStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
      presentation: "containedTransparentModal",
    }}
  >
    <Stack.Screen name="Home" component={KFHomeScreen} />
    <Stack.Screen name="Settings" component={KFSettingsScreen} />
    <Stack.Screen name="SetupStepOne" component={KFSetupStepOneScreen} />
    <Stack.Screen name="SetupStepTwo" component={KFSetupStepTwoScreen} />
    <Stack.Screen name="SetupStepThree" component={KFSetupStepThreeScreen} />
    <Stack.Screen name="GameNavigator" component={GameNavigator} />
  </Stack.Navigator>
);

export default MainNavigator;
