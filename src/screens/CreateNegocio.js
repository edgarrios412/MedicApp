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

const CreateNegocio = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const emojisWithIcons = [
    {title: 'Gastronomía', icon: 'emoticon-happy-outline'},
    {title: 'Accesorios', icon: 'emoticon-cool-outline'},
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
          Crear negocio
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
            Crea tu negocio ahora
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
            <Text style={tw`mt-0 mb-1 text-sm`}>Nombre del negocio</Text>
            <TextInput
              style={tw`border-[1px] rounded-md border-gray-200 h-10 px-3`}
              placeholder="Ingresa el nombre"
            ></TextInput>
          </View>
          <View>
            <Text style={tw`mt-4 mb-1 text-sm`}>Sector comercial</Text>
            <SelectDropdown
              data={emojisWithIcons}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              renderButton={(selectedItem, isOpened) => {
                return (
                  <View style={tw`border-[1px] rounded-md border-gray-200 h-10 px-3 flex-row items-center justify-center`}>
                    {/* {selectedItem && (
                      <IconMaterialCommunityIcons
                        name={selectedItem.icon}
                        style={styles.dropdownButtonIconStyle}
                      />
                    )} */}
                    <Text style={(selectedItem ? tw`flex-1` : tw`text-gray-500 flex-1`)}>
                      {(selectedItem && selectedItem.title) ||
                        "Selecciona el sector"}
                    </Text>
                    <IconMaterialCommunityIcons
                      name={isOpened ? "chevron-up" : "chevron-down"}
                      style={tw`text-xl text-gray-400`}
                    />
                  </View>
                );
              }}
              renderItem={(item, index, isSelected) => {
                return (
                  <View
                    style={[tw`h-8 px-3 flex-row justify-center items-center`,{
                      ...(isSelected && { backgroundColor: "#D2D9DF" }),
                    }]}
                  >
                    {/* <IconMaterialCommunityIcons
                      name={item.icon}
                      style={styles.dropdownItemIconStyle}
                    /> */}
                    <Text style={tw`flex-1`}>
                      {item.title}
                    </Text>
                  </View>
                );
              }}
              showsVerticalScrollIndicator={false}
              dropdownStyle={tw`-mt-6 rounded-lg`}
            />
          </View>
          <Text style={tw`mt-4 mb-1 text-lg font-bold`}>Ubica tu negocio</Text>
          <Text style={tw`mb-6 text-slate-500`}>Instrucciones: Mantén presionado el pin rojo para que éste pueda ser deslizado a través del mapa, ubicalo exactamente en la ubicación de tu negocio</Text>
          <MiniMap style={tw`h-70 w-full`}/>
          <TouchableOpacity
            style={tw`bg-blue-200 px-5 py-3 rounded-md mt-6`}
            //   onPress={() => navigation.navigate("Login")}
          >
            <Text style={tw`mx-auto text-blue-600 font-medium`}>
              Crear negocio
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`border-blue-200 border-[1px] px-5 py-3 rounded-md mt-4`}
            //   onPress={() => navigation.navigate("Login")}
          >
            <Text style={tw`mx-auto text-blue-600 font-medium`}>
              Vista previa
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
      backgroundColor: '#E9ECEF',
      borderRadius: 12,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 12,
    },
    dropdownButtonTxtStyle: {
      flex: 1,
      fontSize: 18,
      fontWeight: '500',
      color: '#151E26',
    },
    dropdownButtonArrowStyle: {
      fontSize: 28,
    },
    dropdownButtonIconStyle: {
      fontSize: 28,
      marginRight: 8,
    },
    dropdownMenuStyle: {
      backgroundColor: '#E9ECEF',
      borderRadius: 0,
      marginTop: -26
    },
    dropdownItemStyle: {
      width: '100%',
      flexDirection: 'row',
      paddingHorizontal: 12,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 8,
    },
    dropdownItemTxtStyle: {
      flex: 1,
      fontSize: 18,
      fontWeight: '500',
      color: '#151E26',
    },
    dropdownItemIconStyle: {
      fontSize: 28,
      marginRight: 8,
    },
  });

export default CreateNegocio;
