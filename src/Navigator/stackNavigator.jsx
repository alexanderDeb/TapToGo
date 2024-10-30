import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// screens
import Page from "../app/index";
import RegisterPage from "../app/auth/register";
import LoginPage from "../app/auth/login";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Login"
        component={Page}
      />
      <Stack.Screen
        name="Register"
        component={RegisterPage}
      />
      <Stack.Screen
        name="Auth"
        component={LoginPage}
      />
    </Stack.Navigator>
  );
}

export default function StackNavigator() {
  return (
    <NavigationContainer independent={true}>
      <MyStack />
    </NavigationContainer>
  );
}