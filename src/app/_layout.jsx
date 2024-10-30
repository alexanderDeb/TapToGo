import "../global.css";
import { Stack, Tabs } from "expo-router";
import { userContext } from "../context/userContext";
import StackNavigator from "../Navigator/stackNavigator";
import BottonNavigator from "../Navigator/bottomNavigator";
import React, { useState } from "react";
import "../lenguajes/i18n.config"

export default function Layout() {
  const [user, setUser] = useState({ email: null, password: null });
  const value = { user, setUser };
  return (
    <userContext.Provider value={value}>
      {user.email == null || user.password == null ? (
        <StackNavigator />
      ) : (
        <BottonNavigator />
      )}
    </userContext.Provider>
  );
}
