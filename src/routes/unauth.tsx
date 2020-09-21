import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

const LoginComponent = React.lazy(
  () => import("../pages/unaunthenticate/login")
);

const Stack = createStackNavigator();

const UnAuthenticationNavigator = () => {
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
      <Stack.Screen name="Login" component={LoginComponent} />
    </Stack.Navigator>
  );
};

export default UnAuthenticationNavigator;
