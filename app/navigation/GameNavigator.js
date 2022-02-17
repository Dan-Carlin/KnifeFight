import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import KFBannerScreen from "../screens/tools/KFBannerScreen";
import KFToolsScreen from "../screens/tools/KFToolsScreen";

const Stack = createNativeStackNavigator();

const GameNavigator = () => (
  <Stack.Navigator
    initialRouteName="Tools"
    screenOptions={{
      headerShown: false,
      orientation: "landscape",
      presentation: "containedTransparentModal",
    }}
  >
    <Stack.Screen name="Tools" component={KFToolsScreen} />
    <Stack.Screen
      name="Banner"
      component={KFBannerScreen}
      options={({ route }) => ({ hp: route.params.hp })}
    />
  </Stack.Navigator>
);

export default GameNavigator;
