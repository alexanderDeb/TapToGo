import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState, useContext } from "react";
import { styles } from "../assets/css/Styles";
import { userContext } from "../context/userContext";

export default function FormRecharge() {
  const [email, setEmail] = useState("");
  const [balance, setBalance] = useState(0);
  const { user, setUser } = useContext(userContext);

  return (
    <View
      style={{
        height: "auto",
        paddingHorizontal: 10,
      }}
    >
      <View style={{ height: "15%", width: "100%" }}>
        <Text style={{ color: "#0083E1", fontSize: 20, fontWeight: "bold" }}>
          Recarga tu tarjeta{" "}
        </Text>
        <Text style={{ color: "#2D2D2D" }}>
          Selecciona la tarjeta que quieres recargar junto con el metodo de pago
          que utilizaras y el monto por el cual harás la recarga.
        </Text>
      </View>
      <View
        style={{
          height: "20%",
          width: "100%",
          gap: 8,
          justifyContent: "center",
        }}
      >
        <TextInput
          style={styles.Input}
          placeholder="Email"
          editable={false}
          value={user.email}
        />
        <TextInput style={styles.Input} placeholder="Targeta debito/credito" />
      </View>
      <View
        style={{
          height: "6%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          color: "#2D2D2D",
          fontWeight: "bold",
        }}
      >
        <Text>Metodo de pago</Text>
      </View>
      <View style={{ height: "39%", width: "100%", gap: 8 }}>
        <TextInput
          style={styles.Input}
          placeholder="Nombre del titular de la tarjeta"
        />
        <TextInput style={styles.Input} placeholder="Numero de tarjeta" />
        <View style={{ flexDirection: "row", width: "100%" }}>
          <TextInput
            style={{
              borderRadius: 15,
              borderWidth: 1,
              borderColor: "#D9D9D9",
              padding: 15,
              width: "49%",
              marginHorizontal: 2,
            }}
            placeholder="Mes"
          />
          <TextInput
            style={{
              borderRadius: 15,
              borderWidth: 1,
              borderColor: "#D9D9D9",
              padding: 15,
              width: "49%",
              marginHorizontal: 2,
            }}
            placeholder="Año"
          />
        </View>
        <TextInput style={styles.Input} placeholder="CVV" />
      </View>
      <View
        style={{
          height: "6%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          color: "#2D2D2D",
          fontWeight: "bold",
        }}
      >
        <Text>Monto a recargar</Text>
      </View>
      <View style={{ height: "10%", width: "100%" }}>
        <TextInput
          style={{
            borderRadius: 15,
            borderWidth: 1,
            borderColor: "#D9D9D9",
            padding: 15,
          }}
          placeholder="¿Cuanto?"
          keyboardType="number-pad"
          placeholderTextColor={"#006CCF"}
          onChangeText={(value) => setBalance(value)}
        />
      </View>
      <View style={{ height: "6%", width: "100%" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#0083E1",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 40,
          }}
          onPress={async () => {
            if (balance != 0) {
              setEmail(user.email);
              const cleanedValue = balance.replace(/[^0-9]/g, "");
              const parcedValue = parseInt(cleanedValue, 10);
              try {
                const response = await fetch(
                  `https://rfidtaptogo.vercel.app/api/user/${email}`,
                  {
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ saldo: parcedValue }),
                  }
                );
                const Response = await response.json();
                if (response.status == 200) {
                  Alert.alert(
                    "Recarga exitosa",
                    `Se realizo la recarga de ${balance} exitosamente`,
                    [{ text: "OK" }]
                  );
                } else {
                  Alert.alert("Error", Response.message, [{ text: "OK" }]);
                }
              } catch (error) {
                console.error(error);
                return 0;
              }
            } else {
              Alert.alert("Error", "Ingrese un valor", [{ text: "OK" }]);
            }
          }}
        >
          <Text style={{ color: "#ffff" }}>Recargar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
