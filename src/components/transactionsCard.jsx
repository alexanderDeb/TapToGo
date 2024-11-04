import React from "react";
import { View, Text } from "react-native";

export default function TransactionsCard({ title, date, price, state }) {
  return (
    <View className="flex flex-row h-14 w-full rounded-lg items-center justify-between">
      <View>
        <Text className="text-base font-bold">{title}</Text>
        <Text className="text-sm text-gray-400">{date}</Text>
      </View>
      <View>
        {state === true ? (
          <Text className="text-emerald-500 font-bold">+ ${price}</Text>
        ) : (
          <Text className="text-red-500 font-bold">- ${price}</Text>
        )}
      </View>
    </View>
  );
}
