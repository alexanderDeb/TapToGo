import { View, ScrollView } from "react-native";
import React from "react";
import Header from "../components/header";
import FormRecharge from "../components/formRecharge";

export default function RechargeScreen() {
  return (
    <View
      style={{ flex: 1, position: "absolute", gap: 15, paddingHorizontal: 20 }}
    >
      <Header />
      <FormRecharge />
    </View>
  );
}
