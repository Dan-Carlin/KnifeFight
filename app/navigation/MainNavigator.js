import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GameNavigator from "./GameNavigator";
import KFHomeScreen from "../screens/home/KFHomeScreen";
import KFSetupStepOneScreen from "../screens/setup/KFSetupStepOneScreen";
import KFSetupStepTwoScreen from "../screens/setup/KFSetupStepTwoScreen";
import KFSetupStepThreeScreen from "../screens/setup/KFSetupStepThreeScreen";

const Stack = createNativeStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      orientation: "portrait",
      presentation: "containedTransparentModal",
    }}
  >
    <Stack.Screen name="Home" component={KFHomeScreen} />
    <Stack.Screen name="SetupStepOne" component={KFSetupStepOneScreen} />
    <Stack.Screen name="SetupStepTwo" component={KFSetupStepTwoScreen} />
    <Stack.Screen name="SetupStepThree" component={KFSetupStepThreeScreen} />
    <Stack.Screen name="GameNavigator" component={GameNavigator} />
  </Stack.Navigator>
);

export default MainNavigator;
