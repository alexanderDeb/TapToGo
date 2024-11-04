import React, { useEffect, useState, useContext } from "react";
import { userContext } from "../../context/userContext";
import { ImageBackground, Text, View, Image, ScrollView } from "react-native";
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
        <View className="h-1/6 w-full justify-end pl-12 pb-8">
          <Text className="text-lg font-bold">{t("Home.Title")}</Text>
        </View>
        <View className="flex h-1/6 items-center justify-center">
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
        <View className="h-3/6 px-10 pt-12 gap-y-10">
          <View className="h-auto">
            <Text className="font-bold text-xl">{t("Home.SubTitle")}</Text>
          </View>
          {info.length != 0 ? (
            <ScrollView className="h-auto px-2">
              <View className="flex flex-col h-full w-full gap-y-4 px-4">
                {info.transactions.map((x, index) => {
                  let tipoTransaccion;
                  let monto;
                  let status;

                  if (x.Recarga) {
                    tipoTransaccion = "Recarga en la aplicación";
                    monto = x.Recarga;
                    status = true;
                  } else if (x.Descuento) {
                    tipoTransaccion = "Pago en estación";
                    monto = x.Descuento;
                    status = false;
                  }

                  return (
                    <TransactionsCard
                      key={index} // Importante: Agrega una key única para cada elemento del map
                      title={tipoTransaccion}
                      price={monto}
                      date={info.updatedAt} // Se esta agarrando la fecha de actualizacion
                      state={status}
                    />
                  );
                })}
              </View>
            </ScrollView>
          ) : (
            <View>
              <Text>No hay historial todavia</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default HomePage;
