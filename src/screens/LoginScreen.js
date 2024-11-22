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
import { useContext, useState } from "react";
import TransactionAccordion from "../ui/TransactionAccordion";
import Toast from "react-native-toast-message";
import {
  buttonColorBg,
  buttonColorBorderDominant,
  buttonColorText,
} from "../variables";
import useNotification from "../utils/hooks/useNotification";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "../context/UserContext";

const LoginScreen = ({ navigation }) => {
  const [telefono, setTelefono] = useState("");
  const expoPushToken = useNotification();
  const { setUser } = useContext(UserContext);

  const [form, setForm] = useState({});
  const handleForm = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const validarIngreso = async () => {
    axios.post("/user/auth", {...form, pushToken:expoPushToken}).then(async ({data}) => {
      navigation.navigate("Home");
      await AsyncStorage.setItem('token', data.token);
      await AsyncStorage.setItem('user', JSON.stringify(data.user));
      setUser(data.user)
      sendPushNotification();
    },() => {
      return Toast.show({
        type: "error",
        text1: "Datos invalidos",
        text2: "El correo o la contraseña son inválidos",
      });
    })
  };

  const sendPushNotification = async () => {
    const message = {
      to: expoPushToken,
      sound: "default",
      title: "Bienvenido",
      body: "Has iniciado sesión en MedicApp con éxito",
      data: { someData: "goes here" },
    };

    await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
  };

  return (
    <View>
      <View
        style={tw`flex-row items-center justify-between px-6 py-1 bg-white shadow-sm`}
      >
        <View style={tw`flex-row gap-0`}>
          <TouchableOpacity style={tw`px-3 py-4 relative`}>
            <IconMaterialCommunityIcons
              name={"bell-outline"}
              color="transparent"
              size={24}
            />
          </TouchableOpacity>
        </View>
        {/* <Text style={tw`font-semibold text-lg text-[#222B45]`}>FidelizApp</Text> */}
        <Image source={require("../../assets/name.png")} style={tw`h-6 w-32`} />
        <View style={tw`flex-row gap-0`}>
          <TouchableOpacity style={tw`px-3 py-4 relative`}>
            {/* <IconMaterialCommunityIcons
                name={"bell-outline"}
                color={"#3b82f6"}
                size={22}
              /> */}
            {/* <View
                style={tw`w-3.5 h-3.5 bg-blue-500 absolute rounded-full border-[3px] border-white inset-x-7 inset-y-3`}
              ></View> */}
          </TouchableOpacity>
          {/* <TouchableOpacity
              style={tw`px-3 py-4`}
              onPress={() => navigation.navigate("Calendario")}
            >
              <Icon name={"calendar"} size={24} />
            </TouchableOpacity> */}
          {/* <TouchableOpacity>
              <Icon name={"more-vertical"} color={"white"} size={20} />
            </TouchableOpacity> */}
        </View>
      </View>
      <ScrollView style={tw`bg-white h-100%`}>
        <View style={tw`px-6 py-4`}>
          <Text style={tw`font-semibold text-2xl mb-6`}>Ingresa ahora</Text>
          <View>
            <Text style={tw`mb-1 text-sm`}>Correo electrónico</Text>
            <TextInput
              style={tw`border-[1px] rounded-md border-gray-200 h-10 px-3`}
              placeholder="ejemplo@gmail.com"
              onChangeText={(value) => handleForm("email", value)}
            ></TextInput>
          </View>
          <View>
            <Text style={tw`mt-4 mb-1 text-sm`}>Contraseña</Text>
            <TextInput
              style={tw`border-[1px] rounded-md border-gray-200 h-10 px-3 mb-6`}
              secureTextEntry
              placeholder="Tu contraseña"
              onChangeText={(value) => handleForm("password", value)}
            ></TextInput>
          </View>
          {/* <TouchableOpacity
            onPress={() => navigation.navigate("RecoveryPassword")}
          >
            <Text style={tw`my-4 text-sm text-gray-600 underline`}>
              Olvidé mi contraseña
            </Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={tw`${buttonColorBg} px-5 py-3 rounded-md mt-0`}
            onPress={validarIngreso}
          >
            <Text style={tw`mx-auto ${buttonColorText} font-medium`}>
              Ingresar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`${buttonColorBorderDominant} border-[1px] px-5 py-3 rounded-md mt-4`}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={tw`mx-auto ${buttonColorText} font-medium`}>
              Registrate ahora
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
