import { View, Text, ImageBackground, Image, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../context/cardContext";
import { TouchableOpacity } from "react-native-gesture-handler";
import Tarjeta from "../assets/img/veniConocelo.png";
import MIO from "../assets/img/MIO_icon.png";

export default function HomeScreen() {
  const { user, setUser } = useContext(userContext);
  const [info, setInfo] = useState("");
  console.log(
    "Username: " + user.cardNo + " - " + "Password: " + user.password
  );

  const GetInfo = async () => {
    try {
      const response = await fetch(
        `https://rfidtaptogo.vercel.app/api/user/${user.cardNo}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setInfo(data);
      console.log(data);
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
      <View style={{ marginTop: "10%", flexDirection: "row", height: "7%" }}>
        <Text style={{ color: "#706868", fontSize: 25, fontFamily: "" }}>
          Hola,{" "}
        </Text>
        <Text style={{ color: "#0367A6", fontSize: 25, fontWeight: "bold" }}>
          {info.name}
        </Text>
      </View>
      <View style={{ height: "93%", paddingHorizontal: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}>
          Tarjetas
        </Text>
        <View
          style={{
            height: "25%",
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
          <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 20 }}>
            Transacciones
          </Text>
        </View>
        <ScrollView style={{ margin: 10 }}>
          <View>
            <Text style={{ color: "#8D8D8D" }}>Hoy</Text>
          </View>
          <View
            style={{
              height: 60,
              marginTop: 10,
              borderRadius: 15,
              padding:5,
            }}
          >
            <Text>hola</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
