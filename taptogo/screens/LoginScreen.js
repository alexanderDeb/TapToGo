import { View, Text, Image } from "react-native";
import React, { useState, useContext } from "react";
import { userContext } from "../context/cardContext.js";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

//importo el archivo de estilos
import { styles } from "../assets/css/Styles.js";

// importo el icono svg
import Bus from "../assets/img/Bus.png";
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
          placeholder="No. Tarjeta"
          style={styles.LoginInput}
          onChangeText={(value) => setNumeroTargeta(value)}
        />
        <TouchableOpacity
          onPress={() => {
            Navigator.navigate("Auth");
            setUser({ cardNo: numeroTargeta.toUpperCase(), password: null });
            console.log(numeroTargeta);
          }}
          style={styles.Button}
        >
          <Text style={styles.ButtonText}>Entrar</Text>
        </TouchableOpacity>
        <View style={styles.ContainerFlex}>
          <View>
            <TouchableOpacity>
              <Text style={{ color: "#706868" }}>Ayuda</Text>
            </TouchableOpacity>
          </View>
          <View>
            <View style={{ flex: 1, flexDirection: "row", gap: 6 }}>
              <Text style={{ color: "#706868" }}>By</Text>
              <Image source={MIO} style={{ height: 20, width: 70 }} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
