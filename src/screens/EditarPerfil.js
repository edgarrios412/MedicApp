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
import { buttonColorBg, buttonColorBorderDominant, buttonColorText } from "../variables";

const EditarPerfil = ({ navigation }) => {
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
          Editar perfil
        </Text>
        <View style={tw`flex-row gap-4`}>
          <TouchableOpacity>
            <Icon name={"more-vertical"} color={"white"} size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={tw`bg-white h-100%`}>
        <View style={tw`px-6 py-4`}>
          <Text style={tw`font-semibold text-2xl mb-6`}>Edita tus datos</Text>
          <View style={tw`flex-row gap-3 mb-0`}>
            <View style={tw`flex-1`}>
              <Text style={tw`mb-1 text-sm`}>Nombre</Text>
              <TextInput
                value="Edgar"
                style={tw`border-[1px] rounded-md border-gray-200 h-10 px-3 flex-1`}
                placeholder="Yina"
              ></TextInput>
            </View>
            <View style={tw`flex-1`}>
              <Text style={tw`mb-1 text-sm`}>Apellido</Text>
              <TextInput
                value="Vilchez"
                style={tw`border-[1px] rounded-md border-gray-200 h-10 px-3 flex-1`}
                placeholder="Garzón"
              ></TextInput>
            </View>
          </View>
          <View>
            <Text style={tw`mt-4 mb-1 text-sm`}>Telefono</Text>
            <TextInput
              value="3211234567"
              style={tw`border-[1px] rounded-md border-gray-200 h-10 px-3`}
              placeholder="Ingresa el codigo"
            ></TextInput>
          </View>
          <View>
            <Text style={tw`mb-1 mt-4 text-sm`}>Correo electrónico</Text>
            <View style={tw`flex-row gap-2`}>
              <TextInput
                value="ejemplo@gmail.com"
                style={tw`border-[1px] rounded-md border-gray-200 h-10 px-3 flex-1`}
                placeholder="3211234567"
              ></TextInput>
              <TouchableOpacity
                style={tw`${buttonColorBg} px-5 h-10 justify-center rounded-md mt-0`}
                onPress={() => navigation.navigate("TransactionList")}
              >
                <Text style={tw`mx-auto ${buttonColorText} font-medium`}>
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
            style={tw`${buttonColorBg} px-5 py-3 rounded-md mt-6`}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={tw`mx-auto ${buttonColorText} font-medium`}>
              Guardar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`${buttonColorBorderDominant} border-[1px] px-5 py-3 rounded-md mt-4`}
            onPress={() => navigation.navigate("ChangePassword")}
          >
            <Text style={tw`mx-auto ${buttonColorText} font-medium`}>
              Cambiar contraseña
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditarPerfil;
