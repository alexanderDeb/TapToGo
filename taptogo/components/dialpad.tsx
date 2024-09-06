import { View, Text, FlatList } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
const dialpad = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "del"];

export default function Dialpad({
  onPress,
}: {
  onPress: (item: (typeof dialpad)[number]) => void;
}) {
  return (
    <FlatList
      numColumns={3}
      style={{ flexGrow: 0 }}
      scrollEnabled={false}
      columnWrapperStyle={{ gap: 70 }}
      contentContainerStyle={{ gap: 50 }}
      data={dialpad}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => {
              onPress(item);
            }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item == "del" ? (
                <Feather name="delete" size={24} color="#D9D9D9" />
              ) : (
                <Text style={{ fontSize: 30, color: "#D9D9D9" }}>{item}</Text>
              )}
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
}
