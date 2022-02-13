import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import KFHowToModalOneScreen from "../screens/instructions/KFHowToModalOneScreen";
import KFHowToModalTwoScreen from "../screens/instructions/KFHowToModalTwoScreen";
import KFHowToModalThreeScreen from "../screens/instructions/KFHowToModalThreeScreen";

const Stack = createNativeStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      orientation: "portrait",
      presentation: "containedModal",
    }}
  >
    <Stack.Screen name="HowToOne" component={KFHowToModalOneScreen} />
    <Stack.Screen name="HowToTwo" component={KFHowToModalTwoScreen} />
    <Stack.Screen name="HowToThree" component={KFHowToModalThreeScreen} />
  </Stack.Navigator>
);

export default MainNavigator;
