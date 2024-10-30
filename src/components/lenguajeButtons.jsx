import React from "react";
import { useTranslation } from "react-i18next";
import { Text, View, TouchableOpacity } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

function LenguajeButtons() {
  const { t, i18n } = useTranslation();
  return (
    <View className="h-10 w-16 absolute z-40 ml-10 mt-10 flex-row gap-x-2 justify-center items-center">
      <TouchableOpacity
        onPress={() => {
          i18n.changeLanguage("en");
        }}
      >
        <Text className="text-sky-400">EN</Text>
      </TouchableOpacity>
      <FontAwesome5 name="exchange-alt" size={16} color="#38bdf8" />
      <TouchableOpacity
        onPress={() => {
          i18n.changeLanguage("es");
        }}
      >
        <Text className="text-sky-400">ES</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LenguajeButtons;
