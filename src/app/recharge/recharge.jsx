import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import Header from "../../components/header";
import LenguajeButtons from "../../components/lenguajeButtons";
import { useContext, useState } from "react";
import { userContext } from "../../context/userContext";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { t } from "i18next";
import { Picker } from "@react-native-picker/picker";

const RechargePage = () => {
  const { user, setUser } = useContext(userContext);
  const [cardType, setCardType] = useState("");
  const [mount, setMount] = useState(0);
  const [email, setEmail] = useState("");

  return (
    <View className="flex flex-1">
      <LenguajeButtons />
      <Header />
      <View className="flex flex-col h-1/5 justify-end items-center pb-4 px-8">
        <View className="h-auto w-full gap-y-2">
          <Text className="font-bold text-xl text-sky-600">
            {t("Recharge.Title")}
          </Text>
          <Text>{t("Recharge.Paragraph")}</Text>
        </View>
      </View>
      <View className="h-3/5 w-full px-12 justify-center items-center">
        <KeyboardAwareScrollView className="h-screen">
          <View className="h-auto w-full gap-y-3 items-center">
            <TextInput
              editable={false}
              value={user.email}
              placeholder={t("Register.PlaceHolderEmail")}
              className="w-full h-16 border border-gray-300 rounded-2xl p-4"
            />
            <View className="flex w-full h-16 border border-gray-300 rounded-2xl">
              <Picker
                selectedValue={"Selecciona una opcion"}
                style={{
                  height: "100%",
                  width: "100%",
                  borderColor: "#8D8D8D",
                  color: "#8D8D8D",
                }}
                onValueChange={(itemValue) => {
                  setCardType(itemValue);
                  console.log(cardType);
                }}
              >
                <Picker.Item
                  label={t("Recharge.Select")}
                  value="0"
                  enabled={false}
                />
                <Picker.Item
                  label={t("Recharge.SelectOption1")}
                  value="Credit"
                />
                <Picker.Item
                  label={t("Recharge.SelectOption2")}
                  value="Debit"
                />
              </Picker>
            </View>

            <View>
              <Text>{t("Recharge.FirstText")}</Text>
            </View>
            <TextInput
              placeholder={t("Recharge.Label1")}
              className="w-full h-16 border border-gray-300 rounded-2xl p-4"
            />
            <TextInput
              placeholder={t("Recharge.Label2")}
              className="w-full h-16 border border-gray-300 rounded-2xl p-4"
            />
            <View className="flex flex-row">
              <TextInput
                placeholder={t("Recharge.Label3")}
                className="w-1/2 h-16 border border-gray-300 rounded-2xl p-4"
              />
              <TextInput
                placeholder={t("Recharge.Label4")}
                className="w-1/2 h-16 border border-gray-300 rounded-2xl p-4"
              />
            </View>
            <TextInput
              placeholder="CVV"
              className="w-full h-16 border border-gray-300 rounded-2xl p-4"
            />
            <View>
              <Text>{t("Recharge.SecondText")}</Text>
            </View>
            <TextInput
              placeholder={t("Recharge.LabelMount")}
              placeholderTextColor={"#0284c7"}
              keyboardType="number-pad"
              onChangeText={(value) => setMount(value)}
              className="w-full h-16 border border-gray-300 rounded-2xl p-4"
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
      <View className="h-1/5 justify-start items-center pt-10">
        <TouchableOpacity
          className="bg-sky-600 h-16 w-4/5 justify-center items-center rounded-full"
          onPress={async () => {
            if (mount != 0) {
              setEmail(user.email);
              const cleanedValue = mount.replace(/[^0-9]/g, "");
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
                    `Se realizo la recarga de ${mount} exitosamente`,
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
          <Text className="font-bold text-xl text-white">
            {t("Recharge.Button")}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RechargePage;
