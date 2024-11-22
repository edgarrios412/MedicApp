import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, TouchableOpacity, SafeAreaView, StyleSheet, Button } from "react-native";
import {Camera, CameraView} from "expo-camera";
import tw from "twrnc";
import Icon from "react-native-vector-icons/Feather";
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Overlay } from "../ui/OverlayCamera";
import { ExtraerDatosCedula } from "../utils/ExtraerDatosCedula";
import IconFeather from "react-native-vector-icons/Feather";
import IconOcticons from "react-native-vector-icons/Octicons";
import { downloadAndOpenPDF } from "../utils/downloadAndOpenPDF";

const DownloadResults = ({navigation, route}) => {
  const datosCedula = route.params || {};

  useEffect(() => {
    console.log(datosCedula)
  }, []);

  return (
    <SafeAreaView style={tw`bg-white`}>
      <View
        style={tw`flex-row items-center justify-between px-6 py-3 bg-white shadow-sm z-100`}
      >
        <TouchableOpacity
          style={tw`px-1 py-2`}
          onPress={() => navigation.navigate("Examenes")}
        >
          <Icon name={"arrow-left"} size={24} />
        </TouchableOpacity>
        <Text style={tw`font-semibold text-base text-[#222B45]`}>Descargar</Text>
        <View style={tw`flex-row gap-4`}>
          <TouchableOpacity>
            <Icon name={"more-vertical"} color={"white"} size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw`w-full h-full p-6`}>
        <View style={tw`flex-row items-center gap-2`}>
        <IconOcticons name="verified" size={18} color={"#16a34a"} />
        <Text style={tw`font-semibold text-lg`}>Verificación exitosa</Text>
        </View>
        <Text style={tw`text-slate-500 mt-2`}>{datosCedula.firstName1} hemos verificado tu identidad de forma satisfactoria, ya puedes descargar los resultados de tus exámenes de forma segura</Text>
        
        <TouchableOpacity
        onPress={() => downloadAndOpenPDF("https://www.med.unc.edu/medclerk/wp-content/uploads/sites/877/2018/10/UMNwriteup.pdf")}
        style={tw`bg-green-600 mt-10 h-14 rounded-xl flex-row items-center`}
      >
        <View style={tw`flex-row items-center mx-auto gap-2`}>
          <IconFeather name="lock" color={"white"} size={14} />
          <Text style={tw`font-semibold text-white text-base`}>
            Descargar resultados
          </Text>
        </View>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default DownloadResults