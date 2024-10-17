import { View, Text, ImageBackground, Image, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../context/userContext.js";
import Tarjeta from "../assets/img/veniConocelo.png";
import { useNavigation } from "@react-navigation/native";
import MIO from "../assets/img/MIO_icon.png";
import Header from "../components/header";
import HistoryCard from "../components/historyCard";

export default function HomeScreen() {
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
    <View style={{ height: "100%", paddingHorizontal: 20 }}>
      <Header />
      <View style={{ height: "100%", paddingHorizontal: 10 }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            marginBottom: 10,
            marginTop: 30,
          }}
        >
          Tarjetas
        </Text>
        <View
          style={{
            height: "21%",
            width: "100%",
            borderRadius: 30,
          }}
        >
          <ImageBackground
            source={Tarjeta}
            resizeMode="stretch"
            imageStyle={{ borderRadius: 20 }}
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            <View
              style={{
                padding: 20,
                height: "100%",
                width: "100%",
                justifyContent: "flex-start",
                alignItems: "flex-end",
                position: "absolute",
              }}
            >
              <Image source={MIO} style={{ height: 20, width: 70 }} />
            </View>
            <View
              style={{
                padding: 20,
                height: "100%",
                width: "100%",
                justifyContent: "flex-end",
              }}
            >
              <Text style={{ color: "#FFFFFF", fontSize: 15 }}>
                No. {info.rfid}
              </Text>
              <Text
                style={{ color: "#FFFFFF", fontSize: 30, fontWeight: "bold" }}
              >
                $ {info.saldo}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View>
          <Text
            style={{ fontSize: 16, fontWeight: "bold", marginVertical: 40 }}
          >
            Transacciones
          </Text>
        </View>
        <ScrollView style={{ paddingHorizontal: 10 }}>
          <View>
            <Text style={{ color: "#8D8D8D" }}>Hoy</Text>
          </View>
          <HistoryCard
            Tittle="Recarga en Universidades"
            Time="Nov 21, 4:00 PM"
            Cost="+ $15,000"
            PositiveOrNegative="Possitive"
          />
          <HistoryCard
            Tittle="Abordo en Universidades"
            Time="Nov 21, 3:57 PM"
            Cost="- $2,400"
            PositiveOrNegative="Negative"
          />
        </ScrollView>
      </View>
    </View>
  );
}
