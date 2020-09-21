import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { Home, Settings } from "../pages/authenticate";

/**
 * Remove Component Lazy Loading due to flicker problem during first time navigation in Android
 */
// const HomeComponent = React.lazy(() => import("../views/authenticate/home"));

const Stack = createStackNavigator();

function MainStackScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        gestureEnabled: false,
        animationEnabled: true,
      }}
      mode="card"
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

const AuthenticationNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        cardOverlayEnabled: true,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <Stack.Screen
        name="Main"
        component={MainStackScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};
export default AuthenticationNavigator;
