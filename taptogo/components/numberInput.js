import React, { useState } from "react";
import { TextInput } from "react-native";

export default function NumberInput() {
  const [number, setNumber] = useState("");

  const handlerNumberChanges = (text) => {
    const cleanedValue = text.replace(/[^0-9]/g, "");
    const parcedValue = parseInt(cleanedValue, 10);

    if (!isNaN(parcedValue)) {
      setNumber(parcedValue.toString());
    } else {
      setNumber("");
    }
  };

  return (
    <TextInput
      keyboardType="numeric"
      value={number}
      onChangeText={handlerNumberChanges}
      style={{
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#D9D9D9",
        padding: 15,
      }}
      placeholder="¿Cuanto?"
      placeholderTextColor={"#006CCF"}
    />
  );
}
