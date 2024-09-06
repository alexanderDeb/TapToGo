import { View, Text, TextInput, FlatList, Keyboard } from "react-native";
import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { OtpInput } from "react-native-otp-entry";
import { userContext } from "../context/cardContext.js";
// import Dialpad from "../components/dialpad.tsx";

export default function AuthScreen() {
  const [value, setValue] = useState([]);
  const Navigate = useNavigation();
  const { user, setUser } = useContext(userContext);
  console.log(user.cardNo);
  return (
    <View style={{ backgroundColor: "#0367A6", height: "100%" }}>
      <View
        style={{
          marginTop: "20%",
          paddingHorizontal: "6%",
          height: "100%",
        }}
      >
        <View style={{ height: "20%" }}>
          <Text
            style={{
              color: "#F5F5F5",
              textAlign: "left",
              fontWeight: "bold",
              fontSize: 25,
            }}
          >
            Escribe tu clave
          </Text>
          <OtpInput
            numberOfDigits={4}
            focusColor={"#0367A6"}
            containerStyle={{ borderRadius: 12 }}
            onTextChange={(text) => console.log(text)}
            textInputProps={{
              accessibilityLabel: "One-Time Password",
              onPress: () => {
                console.log(Keyboard.dismiss);
              },
            }}
            onFilled={(text) => {
              setUser({ cardNo: user.cardNo, password: text });
            }}
            focusStickBlinkingDuration={1000}
            theme={{
              pinCodeContainerStyle: {
                backgroundColor: "#D9D9D9",
                width: 48,
                height: 48,
                borderRadius: 5,
              },
              containerStyle: { paddingHorizontal: 55, paddingTop: 20 },
            }}
          />
          <View
            style={{
              width: "100%",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#D9D9D9", paddingTop: 10 }}>
              No dudamos que seas tù...
            </Text>
            <Text style={{ color: "#D9D9D9" }}>Pero es mejor confirmar ;)</Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: "80%",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          {/* <Dialpad
            onPress={(item) => {
              setValue(item);
              console.log(item);
            }}
          /> */}
          <Text style={{ color: "#D9D9D9", paddingTop: 10 }}>
            ¿Se te olvido?
          </Text>
        </View>
      </View>
    </View>
  );
}
