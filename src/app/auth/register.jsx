import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import LenguajeButtons from "../../components/lenguajeButtons";
import { useState } from "react";

const RegisterPage = () => {
  const Navigator = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNo, setCardNo] = useState("");
  const [password, setPassword] = useState("");
  const [repPassword, setRepPassword] = useState("");
  const { t, i18n } = useTranslation();
  return (
    <View className="flex flex-1">
      <LenguajeButtons />
      <View className="h-1/6 w-full items-center justify-center">
        <Text className="font-bold text-4xl text-sky-600">
          {t("Register.Title")}
        </Text>
      </View>
      <View className="h-4/6 w-full px-12">
        <KeyboardAwareScrollView className="h-screen">
          <View className="w-full h-1/4 justify-start">
            <Text className="text-xl font-bold text-sky-500">
              {t("Register.SubTitle")}
            </Text>
            <Text>{t("Register.Paragraph")}</Text>
          </View>
          <View className="h-3/4 w-full gap-y-8">
            <TextInput
              placeholder={t("Register.PlaceHolderName")}
              onChangeText={(value) => setName(value)}
              className="w-full h-16 border border-gray-300 rounded-2xl p-4"
            />
            <TextInput
              placeholder={t("Register.PlaceHolderEmail")}
              onChangeText={(value) => setEmail(value)}
              className="w-full h-16 border border-gray-300 rounded-2xl p-4"
            />
            <TextInput
              placeholder={t("Register.PlaceHolderNoTarjet")}
              onChangeText={(value) => setCardNo(value)}
              className="w-full h-16 border border-gray-300 rounded-2xl p-4"
            />
            <TextInput
              placeholder={t("Register.PlaceHolderPassword")}
              onChangeText={(value) => setPassword(value)}
              className="w-full h-16 border border-gray-300 rounded-2xl p-4"
            />
            <TextInput
              placeholder={t("Register.PlaceHolderRepeatPassword")}
              onChangeText={(value) => setRepPassword(value)}
              className="w-full h-16 border border-gray-300 rounded-2xl p-4"
            />
            <View></View>
            <View></View>
          </View>
        </KeyboardAwareScrollView>
      </View>
      <View className="h-1/6 w-full justify-center items-center">
        <View className="h-14 w-3/4">
          <TouchableOpacity
            className="bg-sky-600 h-full w-full rounded-full justify-center items-center"
            onPress={async () => {
              const RegisterData = {
                name: name,
                email: email,
                password: password,
                rfid: cardNo,
                saldo: 0,
                status: true,
                role:"USER"
              };
              console.log("Entro")
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
                    Alert.alert(
                      "No se pudo crear el usuario",
                      Response.message,
                      [{ text: "OK" }]
                    );
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
            <Text className="text-white text-2xl font-extrabold">
              {t("Register.Button")}
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row gap-x-2">
          <Text>{t("Register.Question")}</Text>
          <TouchableOpacity
            onPress={() => {
              Navigator.navigate("Login");
            }}
          >
            <Text className=" text-emerald-600">{t("Register.Link")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterPage;
