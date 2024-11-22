import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Modal,
  Pressable,
  Linking,
  TextInput,
} from "react-native";
import { ButtonLogin, ButtonLogout } from "../ui/Buttons/Buttons";
import tw from "twrnc";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Feather";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IconFeather from "react-native-vector-icons/Feather";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import TransactionAccordion from "../ui/TransactionAccordion";
import SelectDropdown from "react-native-select-dropdown";
import Map from "./Map";
import MiniMap from "./MiniMap";

const NuevoProducto = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const emojisWithIcons = [
    { title: "Gastronomía", icon: "emoticon-happy-outline" },
    { title: "Accesorios", icon: "emoticon-cool-outline" },
  ];

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
          Nuevo producto
        </Text>
        <View style={tw`flex-row gap-4`}>
          <TouchableOpacity>
            <Icon name={"more-vertical"} color={"white"} size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={tw`bg-white h-100%`}>
        <View style={tw`px-6 py-4`}>
          <Text style={tw`font-semibold text-2xl mb-6`}>
            Agrega un nuevo producto
          </Text>
          {/* <View>
                  <Text style={tw`mb-1 text-sm`}>Teléfono</Text>
                  <View style={tw`flex-row gap-2`}>
                    <TextInput
                      style={tw`border-[1px] rounded-md border-gray-200 h-10 px-3 flex-1`}
                      placeholder="3211234567"
                    ></TextInput>
                    <TouchableOpacity
                    style={tw`bg-blue-200 px-5 h-10 justify-center rounded-md mt-0`}
                    onPress={() => navigation.navigate("TransactionList")}
                  >
                    <Text style={tw`mx-auto text-blue-600 font-medium`}>
                      Enviar código
                    </Text>
                  </TouchableOpacity>
                  </View>
                </View>
              <View>
                <Text style={tw`mt-4 mb-1 text-sm`}>Codigo</Text>
                <TextInput
                  style={tw`border-[1px] rounded-md border-gray-200 h-10 px-3`}
                  placeholder="Ingresa el codigo"
                ></TextInput>
              </View> */}
          <View>
            <Text style={tw`mt-0 mb-1 text-sm`}>Nombre del producto</Text>
            <TextInput
              style={tw`border-[1px] rounded-md border-gray-200 h-10 px-3`}
              placeholder="Ingresa el nombre"
            ></TextInput>
          </View>
          <View>
            <Text style={tw`mt-4 mb-1 text-sm`}>Precio regular</Text>
            <TextInput
              style={tw`border-[1px] rounded-md border-gray-200 h-10 px-3`}
              placeholder="$9,999"
            ></TextInput>
          </View>
          <View>
            <View style={tw`flex-row items-center gap-1 mt-4 mb-1`}>
              <Image
                source={require("../../assets/moneda.png")}
                style={tw`w-4 h-4`}
              />
              <Text style={tw`text-sm text-blue-500 font-bold`}>
                Precio en puntos
              </Text>
            </View>
            <TextInput
              style={tw`border-[1px] rounded-md border-gray-200 h-10 px-3 text-blue-500`}
              placeholder="100"
            ></TextInput>
          </View>
          <Text style={tw`mt-4 mb-1 text-lg font-bold`}>Sube una imagen</Text>
          {/* <TouchableOpacity
            style={tw`bg-blue-200 px-5 py-3 rounded-md mt-1 flex-row gap-3 items-center`}
            //   onPress={() => navigation.navigate("Login")}
          >
            <Icon name="camera" size={16} style={tw`text-blue-600 font-medium`}/>
            <Text style={tw`text-blue-600 font-medium`}>Cargar imagen</Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={tw`border-2 border-dashed border-gray-300 w-full h-70 rounded-xl my-2 justify-center`}
          >
            <View style={tw`px-6 z-30 flex-col items-center gap-2`}>
              <IconMaterialCommunityIcons
                name="image-off-outline"
                size={24}
                color={"gray"}
              />
              <Text style={tw`text-gray-400 text-center`}>
                Selecciona una imagen
              </Text>
            </View>
          </TouchableOpacity>
          {/* <Text style={tw`mb-6 text-slate-500`}>Instrucciones: Mantén presionado el pin rojo para que éste pueda ser deslizado a través del mapa, ubicalo exactamente en la ubicación de tu negocio</Text> */}
          {/* <MiniMap style={tw`h-70 w-full`}/> */}
          <TouchableOpacity
            style={tw`bg-blue-200 px-5 py-3 rounded-md mt-10 mb-20`}
              onPress={() => navigation.navigate("AdminNegocio")}
          >
            <Text style={tw`mx-auto text-blue-600 font-medium`}>
              Crear producto
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: 200,
    height: 50,
    backgroundColor: "#E9ECEF",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: "#E9ECEF",
    borderRadius: 0,
    marginTop: -26,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});

export default NuevoProducto;
