import React, { useEffect, useState, useContext } from "react";
import { userContext } from "../../context/userContext";
import { ImageBackground, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LenguajeButtons from "../../components/lenguajeButtons";
import Header from "../../components/header";
import Card from "../../assets/veniConocelo.png";
import MIOLogo from "../../assets/MIO_icon.png";
import { t } from "i18next";
import TransactionsCard from "../../components/transactionsCard";

const HomePage = () => {
  const Navigator = useNavigation();
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
    <View className="flex flex-1">
      <LenguajeButtons />
      <Header />
      <View className="flex h-full w-full">
        <View className="h-1/5 w-full justify-end pl-12 pb-8">
          <Text className="text-lg font-bold">{t("Home.Title")}</Text>
        </View>
        <View className="flex h-1/5 items-center justify-center">
          <View className="h-full w-4/5 rounded-2xl">
            <ImageBackground
              source={Card}
              className="flex flex-row w-full h-full"
              imageStyle={{ borderRadius: 20 }}
              resizeMode="stretch"
            >
              <View className="h-full w-1/2 justify-end items-start pl-4">
                <View>
                  <Text className="font-bold text-lg text-white">
                    No. {info.rfid}
                  </Text>
                </View>
                <View>
                  <Text className="font-bold text-3xl text-white">
                    $ {info.saldo}
                  </Text>
                </View>
              </View>
              <View className="h-full w-1/2 justify-end items-end pr-4 pb-2">
                <Image source={MIOLogo} className="h-8 w-28" />
              </View>
            </ImageBackground>
          </View>
        </View>
        <View className="h-3/5 px-10 pt-12 gap-y-10">
          <View className="h-auto">
            <Text className="font-bold text-xl">{t("Home.SubTitle")}</Text>
          </View>
          <View className="h-auto px-2 gap-y-4">
            <Text className="text-gray-400 px-1 text-sm">hoy</Text>
            <TransactionsCard
              title="Recarga en Universidades"
              price="15,000"
              date="Nov 21, 4:00 PM"
              state="true"
            />
            <TransactionsCard
              title="Abordo en Universidades"
              price="2,000"
              date="Nov 21, 3:57 PM"
              state="false"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomePage;
