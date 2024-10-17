import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { userContext } from "../context/userContext.js";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

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
    <View
      style={{
        flexDirection: "row",
        height: "5%",
      }}
    >
      <View style={{ width: "70%", flexDirection: "row" }}>
        <Text style={{ color: "#706868", fontSize: 25, fontFamily: "" }}>
          Hola,{" "}
        </Text>
        <Text style={{ color: "#0367A6", fontSize: 25, fontWeight: "bold" }}>
          {info.name}
        </Text>
      </View>
      <View
        style={{
          width: "30%",
          flexDirection: "row",
          rowGap: 4,
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity
          style={{
            alignContent: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            setUser({ email: null, password: null });
          }}
        >
          <EvilIcons name="user" size={34} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignContent: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            Alert.alert("Alert Title", "My Alert Msg");
          }}
        >
          <Ionicons name="notifications-outline" size={24} color="#0367A6" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
