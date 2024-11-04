import { View, Text, Image, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

export default function Map() {
  const [origin, setOrigin] = useState({
    latitude: 3.4509226719117008,
    longitude: -76.53116078119933,
  });
  const [stations, setStations] = useState("");

  const GetStations = async () => {
    try {
      const response = await fetch(
        `https://rfidtaptogo.vercel.app/api/stations`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setStations(data);
    } catch (error) {
      console.error(error);
      return 0;
    }
  };

  useEffect(() => {
    GetStations();
  }, []);

  return (
    <View className="flex flex-1 justify-center items-center">
      {stations.length !== 0 ? (
        <MapView
          style={{ height: "100%", width: "100%" }}
          initialRegion={{
            latitude: origin.latitude,
            longitude: origin.longitude,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04,
          }}
          provider={PROVIDER_GOOGLE}
        >
          {stations.map((x, index) => {
            return (
              <Marker
                key={index}
                coordinate={{
                  latitude: parseFloat(x.latitude.$numberDecimal),
                  longitude: parseFloat(x.longitude.$numberDecimal),
                }}
                title={"Estacion MIO " + x.name}
                description={x.direction}
              />
            );
          })}
        </MapView>
      ) : (
        <MapView
          style={{ height: "100%", width: "100%" }}
          initialRegion={{
            latitude: origin.latitude,
            longitude: origin.longitude,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04,
          }}
          provider={PROVIDER_GOOGLE}
        ></MapView>
      )}
    </View>
  );
}
