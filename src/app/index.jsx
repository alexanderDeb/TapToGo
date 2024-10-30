import React, { useContext, useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { userContext } from "../context/userContext";
import { useNavigation } from "@react-navigation/native";
import MIO from "../assets/Bus.png";
import LenguajeButtons from "../components/lenguajeButtons";
import { useTranslation } from "react-i18next";

export default function Page() {
  const { user, setUser } = useContext(userContext);
  const [email, setEmail] = useState("");
  const Navigator = useNavigation();
  const { t } = useTranslation();

  return (
    <View className="flex flex-1">
      <LenguajeButtons />
      <View className="flex h-3/4 justify-center items-center">
        <Image source={MIO} className="h-72 w-96" />
      </View>
      <View className="h-1/4 justify-end items-center">
        <View className="flex-col justify-end items-center h-full w-screen gap-y-2 px-4">
          <View className="h-1/4"></View>
          <TextInput
            placeholder={t("Login.PlaceHolder")}
            className="bg-neutral-300 rounded-xl h-16 w-full px-2"
            onChangeText={(value) => setEmail(value)}
          />
          <TouchableOpacity
            className="h-16 w-full bg-sky-600 rounded-full items-center justify-center"
            onPress={() => {
              Navigator.navigate("Auth");
              setUser({ email: email, password: null });
            }}
          >
            <Text className="text-center color-white font-bold text-2xl">
              {t("Login.Button")}
            </Text>
          </TouchableOpacity>
          <View className="flex-row gap-x-2 h-1/4">
            <Text>{t("Login.Question")}</Text>
            <TouchableOpacity
              onPress={() => {
                Navigator.navigate("Register");
              }}
            >
              <Text className=" color-green-600">{t("Login.Link")}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
