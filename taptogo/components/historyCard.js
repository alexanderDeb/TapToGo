import React from "react";
import { View, Text } from "react-native";

export default function HistoryCard({
  Tittle,
  Time,
  Cost,
  PositiveOrNegative,
}) {
  if (PositiveOrNegative == "Possitive") {
    return (
      <View
        style={{
          height: 70,
          marginTop: 10,
          borderRadius: 15,
          padding: 10,
          backgroundColor: "#ffff",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text style={{ color: "#000000", fontSize: 16, fontWeight: "bold" }}>
            {Tittle}
          </Text>
          <Text style={{ color: "#8D8D8D", fontSize: 12 }}>{Time}</Text>
        </View>
        <View style={{ justifyContent: "center" }}>
          <Text style={{ color: "#049401" }}>{Cost}</Text>
        </View>
      </View>
    );
  } else if (PositiveOrNegative == "Negative") {
    return (
      <View
        style={{
          height: 70,
          marginTop: 10,
          borderRadius: 15,
          padding: 10,
          backgroundColor: "#ffff",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text style={{ color: "#000000", fontSize: 16, fontWeight: "bold" }}>
            {Tittle}
          </Text>
          <Text style={{ color: "#8D8D8D", fontSize: 12 }}>{Time}</Text>
        </View>
        <View style={{ justifyContent: "center" }}>
          <Text style={{ color: "#C30000" }}>{Cost}</Text>
        </View>
      </View>
    );
  }
}
