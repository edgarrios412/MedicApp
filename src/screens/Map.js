import tw from "twrnc";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
// import mapStyle from "./mapStyle";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { Alert, Button, Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { buttonColorBg, buttonColorText } from "../variables";
import axios from "axios";

const Map = ({ navigation, route }) => {
  const [location, setLocation] = useState(null);

  const [laboratories, setLaboratories] = useState([])

  useEffect(() => {

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
        setLocation(location.coords);
      } catch (error) {
        console.error("Error al obtener la ubicación:", error);
      }
    };

    if (route?.params?.ubicacion) {
      setLocation(route?.params?.ubicacion);
    }else{
      getLocation();
    }

    //TAREA: CADA VEZ QUE SE MONTA EL MAPA DEBE HACER ESTO:
    axios.get("/laboratory").then(({data}) => {setLaboratories(data)})

    // Función para obtener la ubicación actual
  }, []);

  try {
    return (
      <View>
        <View
          style={tw`flex-row items-center justify-between px-6 py-3 bg-white shadow-sm`}
        >
          <TouchableOpacity
            style={tw`px-1 py-2`}
            onPress={() => navigation.goBack()}
          >
            <Icon name={"arrow-left"} size={24} />
          </TouchableOpacity>
          <Text style={tw`font-semibold text-base text-[#222B45]`}>
            Mapa
          </Text>
          <View style={tw`flex-row gap-4`}>
            <TouchableOpacity>
              <Icon name={"more-vertical"} color={"white"} size={20} />
            </TouchableOpacity>
          </View>
        </View>
        {location && <MapView
          // customMapStyle={mapStyle}
          initialRegion={{
            latitude: location?.latitude,
            longitude: location?.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
          provider={PROVIDER_GOOGLE}
          style={tw`h-full w-full`}
        >
          {laboratories.map(lab => <Marker
            coordinate={{
              latitude: lab.lat,
              longitude: lab.lon,
            }}
            key={lab.id}
            onCalloutPress={() => navigation.navigate("Detalle", lab)}
          >
            <Image
              source={{uri:lab.image}}
              style={tw`w-10 h-10 rounded-full border-white border-2`}
            />
            <Callout style={tw`w-48 flex-col items-center gap-2 rounded-lg`}>
              <Text style={tw`font-bold`}>{lab.name}</Text>
              <Text
                style={tw`${buttonColorBg} px-5 py-3 rounded-xl ${buttonColorText} font-medium`}
              >
                Ver detalles
              </Text>
            </Callout>
          </Marker>)}
        </MapView>}
      </View>
    );
  } catch (error) {
    console.error("Error rendering map:", error);
    return <Text>Error rendering map {error}</Text>;
  }
};

export default Map;
