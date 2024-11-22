import {
    Dimensions,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
import Icon from "react-native-vector-icons/Feather";
import { InputText } from "../ui/Inputs/Inputs";
import QRCode from "react-native-qrcode-svg";
import { useEffect } from "react";
import * as Brightness from 'expo-brightness';

const { width, height } = Dimensions.get('window');

const CanjearProducto = ({ navigation }) => {

  useEffect(() => {
    const setMaxBrightness = async () => {
      // Guarda el estado de brillo automático actual
      const originalBrightness = await Brightness.getSystemBrightnessAsync();
      const originalAutoBrightness = await Brightness.isUsingSystemBrightnessAsync();

      // Configura el brillo al máximo
      await Brightness.setBrightnessAsync(1);
      await Brightness.useSystemBrightnessAsync(false);

      // Restaura el brillo al desmontar el componente
      return () => {
        Brightness.setBrightnessAsync(originalBrightness);
        Brightness.useSystemBrightnessAsync(originalAutoBrightness);
      };
    };

    setMaxBrightness();
  }, []);

  return (
    <ScrollView style={tw`bg-[#f2f5ff] h-100%`}>
      <View
        style={tw`flex-row items-center justify-between px-6 py-3 bg-white shadow-sm`}
      >
        <TouchableOpacity
          style={tw`px-1 py-2`}
          onPress={() => navigation.goBack()}
        >
          <Icon name={"arrow-left"} size={24} />
        </TouchableOpacity>
        <Text style={tw`font-semibold text-base text-[#222B45]`}>Canjear</Text>
        <View style={tw`flex-row gap-4`}>
          <TouchableOpacity>
            <Icon name={"more-vertical"} color={"white"} size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw`flex items-center justify-center my-4 flex-col gap-2 px-6 py-1 h-[${height/5}]`}>
        <View style={tw`flex items-center justify-center w-full h-full`}>
        <View
              onPress={() => navigation.navigate("Canjear")}
              style={tw`bg-white flex-row rounded-lg shadow-sm px-2 py-4 w-full gap-4 mb-10`}
            >
              <View style={tw`w-20 h-20`}>
                <Image
                  source={require("../../assets/product.jpg")}
                  resizeMode="contain"
                  style={tw`w-full h-full`}
                />
              </View>
              <View>
                <Text style={tw`text-[#222B45] font-bold mb-0`}>
                  Iphone XR 256GB
                </Text>
                <View style={tw`flex-row items-center gap-1`}>
                  <Image
                    source={require("../../assets/moneda.png")}
                    style={tw`w-4 h-4`}
                  />
                  <Text style={tw`text-sm text-blue-500 font-bold`}>236</Text>
                </View>
                <Text style={tw`text-slate-600 mt-0`}>Valor</Text>
                <Text style={tw`font-bold`}>$ 199.999</Text>
              </View>
            </View>
          <QRCode value="https://google.com" size={250}/>
          <Text style={tw`mt-5 text-slate-500`}>Esperando escaneo</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default CanjearProducto;
