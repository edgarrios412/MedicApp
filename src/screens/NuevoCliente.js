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
  
  const NuevoCliente = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
  
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
            Nuevo cliente
          </Text>
          <View style={tw`flex-row gap-4`}>
            <TouchableOpacity>
              <Icon name={"more-vertical"} color={"white"} size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={tw`bg-white h-100%`}>
          <View style={tw`px-6 py-4`}>
            <Text style={tw`font-semibold text-2xl mb-6`}>Agrega un nuevo cliente</Text>
            <View style={tw`flex-row gap-3 mb-4`}>
              <View style={tw`flex-1`}>
                <Text style={tw`mb-1 text-sm`}>Nombre</Text>
                <TextInput
                  style={tw`border-[1px] rounded-md border-gray-200 h-10 px-3 flex-1`}
                  placeholder="Yina"
                ></TextInput>
              </View>
              <View style={tw`flex-1`}>
                <Text style={tw`mb-1 text-sm`}>Apellido</Text>
                <TextInput
                  style={tw`border-[1px] rounded-md border-gray-200 h-10 px-3 flex-1`}
                  placeholder="Garzón"
                ></TextInput>
              </View>
            </View>
            <View>
              <Text style={tw`mb-1 text-sm`}>Teléfono</Text>
              <View style={tw`flex-row gap-2`}>
                <TextInput
                  style={tw`border-[1px] rounded-md border-gray-200 h-10 px-3 flex-1`}
                  placeholder="3211234567"
                ></TextInput>
              </View>
            </View>
            <View>
            <View style={tw`flex-row items-center gap-1 mt-4 mb-1`}>
                <Image
                  source={require("../../assets/moneda.png")}
                  style={tw`w-4 h-4`}
                />
                <Text style={tw`text-sm text-blue-500 font-bold`}>Puntos</Text>
              </View>
              <TextInput
                style={tw`border-[1px] rounded-md border-gray-200 h-10 px-3 text-blue-500`}
                placeholder="Ingresa la cantidad"
              ></TextInput>
            </View>
            {/* <View>
              <Text style={tw`mt-4 mb-1 text-sm`}>Contraseña</Text>
              <TextInput
                style={tw`border-[1px] rounded-md border-gray-200 h-10 px-3`}
                placeholder="Tu contraseña"
                secureTextEntry
              ></TextInput>
            </View>
            <View>
              <Text style={tw`mt-4 mb-1 text-sm`}>Repetir contraseña</Text>
              <TextInput
                style={tw`border-[1px] rounded-md border-gray-200 h-10 px-3`}
                placeholder="Repite tu contraseña"
                secureTextEntry
              ></TextInput>
            </View> */}
            <TouchableOpacity
              style={tw`bg-blue-200 px-5 py-3 rounded-md mt-6`}
              onPress={() => navigation.navigate("AdminClientes")}
            >
              <Text style={tw`mx-auto text-blue-600 font-medium`}>
                Enviar puntos
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  };
  
  export default NuevoCliente;
  