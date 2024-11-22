import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, TouchableOpacity, SafeAreaView, StyleSheet, Button } from "react-native";
import {Camera, CameraView} from "expo-camera";
import tw from "twrnc";
import Icon from "react-native-vector-icons/Feather";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons" 
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Overlay } from "../ui/OverlayCamera";
import { ExtraerDatosCedula } from "../utils/ExtraerDatosCedula";

const EscanearCedula = ({navigation, route}) => {

    const ruta = route.params;
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  // const [data, setData] = useState("");

  useEffect(() => {
    (async () => {
      // Solicitar permisos de la cámara
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);


  const handleBarCodeScanned = ({ type, data }) => {
    console.log(type)
    setScanned(true);
    if(type == 2048){
      const datosCedula = ExtraerDatosCedula(data)
      // setData(datosCedula);
      // Comparar los datos de la cedula con los de la persona
    //   if(datosCedula.fullName == "Yina Yurley Garzon Molina"){
        // Permite ver los resultados
        navigation.navigate(ruta, datosCedula)
    //   }
    }else{
      // setData(null)
    }
  };

  if (hasPermission === null) {
    return <ScrollView style={tw`bg-white h-100%`}>
    <View
      style={tw`flex-row items-center justify-between px-6 py-3 bg-white shadow-sm`}
    >
      <TouchableOpacity
        style={tw`px-1 py-2`}
        onPress={() => navigation.goBack()}
      >
        <Icon name={"arrow-left"} size={24} />
      </TouchableOpacity>
      <Text style={tw`font-semibold text-base text-[#222B45]`}>Escanear</Text>
      <View style={tw`flex-row gap-4`}>
        <TouchableOpacity>
          <Icon name={"more-vertical"} color={"white"} size={20} />
        </TouchableOpacity>
      </View>
    </View>
    <View style={tw`flex-col items-center mt-40`}>
    <Text>Solicitando permisos de la cámara...</Text>
    </View>
  </ScrollView>;
  }
  if (hasPermission === false) {
    return <ScrollView style={tw`bg-white h-100%`}>
    <View
      style={tw`flex-row items-center justify-between px-6 py-3 bg-white shadow-sm`}
    >
      <TouchableOpacity
        style={tw`px-1 py-2`}
        onPress={() => navigation.goBack()}
      >
        <Icon name={"arrow-left"} size={24} />
      </TouchableOpacity>
      <Text style={tw`font-semibold text-base text-[#222B45]`}>Escanear</Text>
      <View style={tw`flex-row gap-4`}>
        <TouchableOpacity>
          <Icon name={"more-vertical"} color={"white"} size={20} />
        </TouchableOpacity>
      </View>
    </View>
    <View style={tw`flex-col items-center mt-40`}>
    <Text>No se ha concedido permiso para usar la cámara</Text>
    </View>
  </ScrollView>;
  }

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View
        style={tw`flex-row items-center justify-between px-6 py-3 bg-white shadow-sm z-100`}
      >
        <TouchableOpacity
          style={tw`px-1 py-2`}
          onPress={() => navigation.goBack()}
        >
          <Icon name={"arrow-left"} size={24} />
        </TouchableOpacity>
        <Text style={tw`font-semibold text-base text-[#222B45]`}>Escanear</Text>
        <View style={tw`flex-row gap-4`}>
          <TouchableOpacity>
            <Icon name={"more-vertical"} color={"white"} size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw`flex-1`}>
        <Text style={tw`px-6 pt-6 text-slate-500`}>Escanea el codigo de barras que se encuentra detrás de tu cédula para que podamos verificar tu identidad</Text>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={tw`flex-1`} // Esto asegura que ocupe toda la pantalla
        />
        {/* <Overlay/> */}
        {scanned && (
          <TouchableOpacity style={tw`bg-green-600 mb-6 mx-6 h-14 rounded-xl flex-row items-center justify-center gap-2`} onPress={() => setScanned(false)}>
            <IconMaterialCommunityIcons name="reload" size={20} color={"white"}/>
            <Text style={tw`text-white font-bold text-base`}>Escanear de nuevo</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

export default EscanearCedula