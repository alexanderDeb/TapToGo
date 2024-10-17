import { View, Text, Image } from "react-native";
import React, { useState, useContext } from "react";
import { userContext } from "../context/userContext.js";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

//importo el archivo de estilos
import { styles } from "../assets/css/Styles.js";

// importo el icono svg
import Bus from "../assets/img/Bus2.png";
import MIO from "../assets/img/MIO_icon.png";

export default function LoginScreen() {
  const Navigator = useNavigation();
  const [numeroTargeta, setNumeroTargeta] = useState("");
  const { user, setUser } = useContext(userContext);
  return (
    <View style={styles.container}>
      <View style={styles.LoginImageContainer}>
        <Image source={Bus} style={styles.LoginImage} />
      </View>
      <View style={styles.LoginContentContainer}>
        <TextInput
          placeholder="Correo electronico"
          style={styles.LoginInput}
          onChangeText={(value) => setNumeroTargeta(value)}
        />
        <TouchableOpacity
          onPress={() => {
            Navigator.navigate("Auth");
            setUser({ email: numeroTargeta, password: null });
          }}
          style={styles.Button}
        >
          <Text style={styles.ButtonText}>Entrar</Text>
        </TouchableOpacity>
        <View
          style={{
            width: "100%",
            height: "15%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Text>No tienes una cuenta?</Text>
            <TouchableOpacity
              onPress={() => {
                Navigator.navigate("Register");
              }}
            >
              <Text style={{ color: "#32A65A" }}>Ingresa aqui</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
