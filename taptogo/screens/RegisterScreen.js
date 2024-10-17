import React from "react";
import FormRegister from "../components/formRegister";
import { View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function RegisterScreen() {
  return (
    <View style={{ flex: 1, position: "absolute" }}>
      <FormRegister />
    </View>
  );
}
