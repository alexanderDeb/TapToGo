import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

// screens
import HomePage from "../app/home/home";
import RechargePage from "../app/recharge/recharge";
//icons
import { AntDesign } from "@expo/vector-icons";
import { t } from "i18next";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName={t("BottomNavigator.Home")}
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
        name={t("BottomNavigator.Home")}
        component={HomePage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name={t("BottomNavigator.Recharge")}
        component={RechargePage}
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
    <NavigationContainer independent={true}>
      <MyTabs />
    </NavigationContainer>
  );
}
