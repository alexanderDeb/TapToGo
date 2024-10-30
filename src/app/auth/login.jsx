import { Text, View, Alert } from "react-native";
import Dialpad from "../../components/dialPad";
import React, { useState, useContext } from "react";
import { userContext } from "../../context/userContext";
import { useTranslation } from "react-i18next";

const LoginPage = () => {
  const [value, setValue] = useState([]);
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [fourth, setFourth] = useState("");
  const { user, setUser } = useContext(userContext);
  const { t } = useTranslation();

  const onFilledInput = async () => {
    const AuthData = {
      email: user.email,
      password: value.join(""),
    };
    try {
      const response = await fetch(`https://rfidtaptogo.vercel.app/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(AuthData),
      });
      const Response = await response.json();
      if (response.status == 201) {
        setUser({ email: user.email, password: value.join("") });
      } else {
        Alert.alert("Error", Response.message, [{ text: "OK" }]);
      }
    } catch (error) {
      console.error(error);
      return 0;
    }
  };

  return (
    <View className="flex flex-1 bg-sky-600 justify-center items-center">
      <View className="h-1/2 w-full justify-start items-center gap-y-12 pt-20">
        <View className="text-start w-full px-8">
          <Text className="text-3xl text-white font-bold">
            {t("Auth.Title")}
          </Text>
        </View>
        <View className="flex justify-center items-center gap-y-2">
          <View className="flex flex-row gap-x-4">
            <View className="bg-slate-50 border border-gray-400 h-20 w-16 rounded-2xl justify-center items-center">
              <Text className="text-3xl">{first}</Text>
            </View>
            <View className="bg-slate-50 border border-gray-400 h-20 w-16 rounded-2xl justify-center items-center">
              <Text className="text-3xl">{second}</Text>
            </View>
            <View className="bg-slate-50 border border-gray-400 h-20 w-16 rounded-2xl justify-center items-center">
              <Text className="text-3xl">{third}</Text>
            </View>
            <View className="bg-slate-50 border border-gray-400 h-20 w-16 rounded-2xl justify-center items-center">
              <Text className="text-3xl">{fourth}</Text>
            </View>
          </View>
          <View>
            <Text className="text-white text-center">{t("Auth.SubTitle")}</Text>
            <Text className="text-white text-center">{t("Auth.SubTitle2")}</Text>
          </View>
        </View>
      </View>
      <View className="h-1/2 w-full justify-start items-center gap-y-8">
        <Dialpad
          onPress={(item) => {
            if (item == "del") {
              value.pop();
            } else {
              if (value.length < 4) {
                value.push(item);
              }
              if (value.length === 0) {
                setFirst("");
                setSecond("");
                setThird("");
                setFourth("");
              }
              if (value.length === 1) {
                setFirst("*");
                setSecond("");
                setThird("");
                setFourth("");
              }
              if (value.length === 2) {
                setFirst("*");
                setSecond("*");
                setThird("");
                setFourth("");
              }
              if (value.length === 3) {
                setFirst("*");
                setSecond("*");
                setThird("*");
                setFourth("");
              }
              if (value.length === 4) {
                setFirst("*");
                setSecond("*");
                setThird("*");
                setFourth("*");
                onFilledInput();
              }
            }
          }}
        />
        <View>
          <Text className="text-white">{t("Auth.Question")}</Text>
        </View>
      </View>
    </View>
  );
};

export default LoginPage;
