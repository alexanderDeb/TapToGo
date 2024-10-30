import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { userContext } from "../context/userContext";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { t } from "i18next";

export default function Header() {
  const { user, setUser } = useContext(userContext);
  const [info, setInfo] = useState("");

  const GetInfo = async () => {
    try {
      const response = await fetch(
        `https://rfidtaptogo.vercel.app/api/user/${user.email}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setInfo(data);
    } catch (error) {
      console.error(error);
      return 0;
    }
  };

  useEffect(() => {
    GetInfo();
  }, []);

  return (
    <View className="flex h-10 w-full justify-center items-end absolute mt-10 pr-4 z-20">
      <View className="flex flex-row w-2/3 items-center">
        <View className="w-2/3 flex-row items-center">
          <Text className="text-2xl text-gray-500">
            {t("Header.Greet")}{" "}
          </Text>
          <Text className="text-2xl text-sky-600 font-bold">
            {info.name}
          </Text>
        </View>
        <View
          className="flex flex-row w-1/3 justify-end items-center"
        >
          <TouchableOpacity
            className="justify-center items-center"
            onPress={() => {
              setUser({ email: null, password: null });
            }}
          >
            <EvilIcons name="user" size={34} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
