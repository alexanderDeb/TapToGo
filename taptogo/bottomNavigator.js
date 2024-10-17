import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

// screens
import HomeScreen from "./screens/HomeScreen";
import RechargeScreen from "./screens/RechargeScreen";
//icons
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#0367A6",
        },
        tabBarActiveTintColor: "#4EB1D9",
        tabBarInactiveTintColor: "white",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="Recharge"
        component={RechargeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="creditcard" color={color} size={size} />
          ),
          unmountOnBlur: true,
        }}
      />
    </Tab.Navigator>
  );
}

export default function BottonNavigator() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
