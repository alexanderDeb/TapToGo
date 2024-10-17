import { View, Text, TextInput, Alert, ScrollView } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../assets/css/Styles";

export default function FormRegister() {
  const Navigator = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNo, setCardNo] = useState("");
  const [password, setPassword] = useState("");
  const [repPassword, setRepPassword] = useState("");
  return (
    <View
      style={{
        height: "100%",
        marginHorizontal: 30,
      }}
    >
      <View style={{ height: "40%", width: "100%", gap: 10 }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "#0083E1", fontSize: 40, fontWeight: "bold" }}>
            Bienvenido
          </Text>
        </View>
        <Text style={{ color: "#0083E1", fontSize: 20, fontWeight: "bold" }}>
          Registrate{" "}
        </Text>
        <Text style={{ color: "#2D2D2D" }}>
          Ingresa la informacion solicitada en los campos establecidos para
          poder generar un registro con tus datos y puedas ingresar a la
          plataforma.
        </Text>
      </View>
      <View
        style={{
          height: "38%",
          width: "100%",
          gap: 20,
          justifyContent: "center",
          marginBottom: 80,
        }}
      >
        <TextInput
          style={styles.Input}
          placeholder="Nombre"
          onChangeText={(value) => setName(value)}
        />
        <TextInput
          style={styles.Input}
          placeholder="Correo electronico"
          onChangeText={(value) => setEmail(value)}
        />
        <TextInput
          style={styles.Input}
          placeholder="Numero de tarjeta"
          onChangeText={(value) => setCardNo(value)}
        />
        <TextInput
          style={styles.Input}
          placeholder="Contraseña"
          secureTextEntry={true}
          keyboardType="numeric"
          onChangeText={(value) => setPassword(value)}
        />
        <TextInput
          style={styles.Input}
          placeholder="Repetir contraseña"
          secureTextEntry={true}
          keyboardType="numeric"
          onChangeText={(value) => setRepPassword(value)}
        />
      </View>
      <View style={{ height: "20%", width: "100%", justifyContent: "center" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#0083E1",
            justifyContent: "center",
            height: "70%",
            alignItems: "center",
            borderRadius: 40,
          }}
          onPress={async () => {
            const RegisterData = {
              name: name,
              email: email,
              password: password,
              rfid: cardNo,
              saldo: 0,
              status: true,
            };
            if (password == repPassword) {
              try {
                const response = await fetch(
                  `https://rfidtaptogo.vercel.app/api/user`,
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(RegisterData),
                  }
                );
                const Response = await response.json();
                if (response.status == 200) {
                  Alert.alert(
                    "Registrado",
                    "Se creo exitosamente el usuario, puedes ahora ingresar con tsu credenciales respectivas",
                    [{ text: "OK" }]
                  );
                } else {
                  Alert.alert("No se pudo crear el usuario", Response.message, [
                    { text: "OK" },
                  ]);
                }
              } catch (error) {
                return 0;
              }
            } else {
              Alert.alert(
                "Contraseñas no coinciden",
                "Las contraseñas ingresadas no coinciden por favor vuelva a intentar.",
                [{ text: "OK" }]
              );
            }
          }}
        >
          <Text style={{ color: "#ffff", fontSize: 25, fontWeight: "bold" }}>
            Registrar
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            gap: 5,
            justifyContent: "center",
            alignItems: "flex-start",
            height: "30%",
          }}
        >
          <Text>No tienes una cuenta?</Text>
          <TouchableOpacity
            onPress={() => {
              Navigator.navigate("Login");
            }}
          >
            <Text style={{ color: "#32A65A" }}>Ingresa aqui</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
