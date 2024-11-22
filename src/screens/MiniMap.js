import tw from "twrnc";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import mapStyle from "./mapStyle";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { Button, Image, Text } from "react-native";
import React from "react";

const MiniMap = ({ navigation, style }) => {
  const [location, setLocation] = useState({
    latitude: 5.0215614,
    longitude: -73.9920667,
  });

  const [pin, setPin] = useState({
    latitude: 5.0215614,
    longitude: -73.9920667,
  });

  useEffect(() => {
    // Función para obtener la ubicación actual
    const getLocation = async () => {
      try {
        // Solicitar permisos de ubicación si aún no se han otorgado
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          console.error("Permiso de ubicación no otorgado");
          return;
        }

        // Obtener la ubicación actual
        const location = await Location.getCurrentPositionAsync({});
        console.log(location);
        setLocation(location.coords);
        setPin(location.coords);
      } catch (error) {
        console.error("Error al obtener la ubicación:", error);
      }
    };

    // Llamar a la función de obtención al cargar el componente
    getLocation();
  }, []);

  try {
    return (
      <>
        <MapView
          // customMapStyle={mapStyle}
          initialRegion={{
            latitude: location?.latitude,
            longitude: location?.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
          provider={PROVIDER_GOOGLE}
          style={style}
        >
          <Marker
            coordinate={pin}
            title="Ubica tu negocio"
            description="Manten presionado para poder mover el pin"
            onCalloutPress={() => navigation.navigate("Detalle")}
            draggable
            onDragEnd={(e) => {
              setPin(e.nativeEvent.coordinate);
            }}
          >
            {/* <Image
              source={require("../../assets/negocios/ara.jpg")}
              style={tw`w-10 h-10 rounded-full border-white border-2`}
            /> */}
            {/* <Callout style={tw`w-48 flex-col items-center gap-2 rounded-lg`}>
              <Text style={tw`font-bold`}>Tiendas ARA</Text>
              <Text
                style={tw`bg-blue-200 px-5 py-3 rounded-xl text-blue-600 font-medium`}
              >
                Ver detalle del negocio
              </Text>
            </Callout> */}
          </Marker>
          {/* <Marker
            coordinate={{
              latitude: 5.032305814565343,
              longitude: -73.9942980278316,
            }}
            title="Tiendas Ara"
            description="Utiliza Fidelidapp"
          /> */}
        </MapView>
      </>
    );
  } catch (error) {
    console.error("Error rendering map:", error);
    return <Text>Error rendering map {error}</Text>;
  }
};

export default MiniMap;
