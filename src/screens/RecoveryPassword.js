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
import Toast from "react-native-toast-message";
import { buttonColorBg, buttonColorBorderDominant, buttonColorText } from "../variables";
  
  const RecoveryPassword = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const enviarCodigo = () => {
      Toast.show({
        type: 'success',
        text1: 'Codigo enviado',
        text2: 'Revisa tu telefono para ver el codigo'
      });
    }
  
    const cambiarContraseña = () => {
      Toast.show({
        type: 'success',
        text1: 'Cambio exitoso',
        text2: 'Tu contraseña ha sido cambiada exitosamente'
      });
      navigation.navigate("Login")
    }
  
    return (
      <View>
        <View
          style={tw`flex-row items-center justify-between px-6 py-1 bg-white shadow-sm`}
        >
          <View style={tw`flex-row gap-0`}>
            <TouchableOpacity
              style={tw`px-3 py-4 relative`}
            >
              <IconMaterialCommunityIcons
                name={"bell-outline"}
                color="transparent"
                size={24}
              />
            </TouchableOpacity>
          </View>
          <Image source={require("../../assets/name.png")} style={tw`h-6 w-32`} />
          <View style={tw`flex-row gap-0`}>
            <TouchableOpacity
              style={tw`px-3 py-4 relative`}
            ></TouchableOpacity>
          </View>
        </View>
        <ScrollView style={tw`bg-white h-100%`}>
          <View style={tw`px-6 py-4`}>
            <Text style={tw`font-semibold text-2xl mb-6`}>Recupera tu contraseña</Text>
              <View>
                <Text style={tw`mb-1 text-sm`}>Correo electrónico</Text>
                <View style={tw`flex-row gap-2`}>
                  <TextInput
                    style={tw`border-[1px] rounded-md border-gray-200 h-10 px-3 flex-1`}
                    placeholder="ejemplo@gmail.com"
                  ></TextInput>
                  <TouchableOpacity
                  style={tw`${buttonColorBg} px-5 h-10 justify-center rounded-md mt-0`}
                  onPress={enviarCodigo}
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
            <View>
              <Text style={tw`mt-4 mb-1 text-sm`}>Nueva contraseña</Text>
              <TextInput
                style={tw`border-[1px] rounded-md border-gray-200 h-10 px-3`}
                placeholder="Tu contraseña nueva"
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
            </View>
            <TouchableOpacity
              style={tw`${buttonColorBg} px-5 py-3 rounded-md mt-6`}
              onPress={cambiarContraseña}
            >
              <Text style={tw`mx-auto ${buttonColorText} font-medium`}>
                Cambiar contraseña
              </Text>
            </TouchableOpacity>
  
            <TouchableOpacity
              style={tw`${buttonColorBorderDominant} border-[1px] px-5 py-3 rounded-md mt-4`}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={tw`mx-auto ${buttonColorText} font-medium`}>
                Ya recordé mi contraseña
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  };
  
  export default RecoveryPassword;
  