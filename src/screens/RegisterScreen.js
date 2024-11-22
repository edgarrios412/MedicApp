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
  Alert,
} from "react-native";
import { ButtonLogin, ButtonLogout } from "../ui/Buttons/Buttons";
import tw from "twrnc";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Feather";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IconFeather from "react-native-vector-icons/Feather";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCallback, useEffect, useState } from "react";
import TransactionAccordion from "../ui/TransactionAccordion";
import Toast from "react-native-toast-message";
import {
  buttonColorText,
  buttonColorBg,
  buttonColorBorderDominant,
} from "../variables";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";

const RegisterScreen = ({ navigation, route }) => {
  const datosCedula = route.params || {};

  const [form, setForm] = useState({});
  const handleForm = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    setTimeout(() => {
      setForm(route.params);
    }, 100);
  }, [route.params]);

  const enviarCodigo = () => {
    Toast.show({
      type: "success",
      text1: "Codigo enviado",
      text2: "Revisa tu telefono para ver el codigo",
    });
  };

  const registrarCuenta = () => {
    if (!form?.document?.length)
      return Toast.show({
        type: "error",
        text1: "Escanea tu cedula",
        text2: "Debes escanear tu cedula",
      });
    if (form.password !== form.password2)
      return Toast.show({
        type: "error",
        text1: "Contraseña invalida",
        text2: "Las contraseñas no coinciden",
      });
    console.log(form);
    axios.post("/user", form).then(() => {
      Toast.show({
        type: "success",
        text1: "Registro exitoso",
        text2: "Ahora puedes ingresar a tu cuenta",
      });
      navigation.navigate("Login");
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
        <Image source={require("../../assets/name.png")} style={tw`h-6 w-32`} />
        <View style={tw`flex-row gap-0`}>
          <TouchableOpacity style={tw`px-3 py-4 relative`}></TouchableOpacity>
        </View>
      </View>
      <ScrollView style={tw`bg-white h-100%`}>
        <View style={tw`px-6 py-4`}>
          <Text style={tw`font-semibold text-2xl mb-6`}>Registrate ahora</Text>
          <TouchableOpacity
            style={tw`${buttonColorBg} px-5 py-3 rounded-md mb-6`}
            onPress={() => navigation.navigate("EscanearCedula", "Register")}
          >
            <View style={tw`mx-auto flex-row gap-2 items-center`}>
              <IconMaterialCommunityIcons
                size={14}
                name="credit-card-scan-outline"
              />
              <Text style={tw`${buttonColorText} font-medium`}>
                Escanear documento
              </Text>
            </View>
          </TouchableOpacity>
          <View style={tw`flex-row gap-3 mb-4`}>
            <View style={tw`flex-1`}>
              <Text style={tw`mb-1 text-sm`}>Primer nombre</Text>
              <TextInput
                style={tw`border-[1px] rounded-md border-gray-200 h-10 px-3 flex-1`}
                // placeholder="Yina"
                value={form?.name1}
                editable={false}
                onChangeText={(value) => handleForm("name1", value)}
              ></TextInput>
            </View>
            <View style={tw`flex-1`}>
              <Text style={tw`mb-1 text-sm`}>Segundo nombre</Text>
              <TextInput
                style={tw`border-[1px] rounded-md border-gray-200 h-10 px-3 flex-1`}
                // placeholder="Garzón"
                editable={false}
                value={form?.name2}
                onChangeText={(value) => handleForm("name2", value)}
              ></TextInput>
            </View>
          </View>
          <View style={tw`flex-row gap-3 mb-4`}>
            <View style={tw`flex-1`}>
              <Text style={tw`mb-1 text-sm`}>Primer apellido</Text>
              <TextInput
                style={tw`border-[1px] rounded-md border-gray-200 h-10 px-3 flex-1`}
                // placeholder="Yina"
                editable={false}
                value={form?.lastname1}
                onChangeText={(value) => handleForm("lastname1", value)}
              ></TextInput>
            </View>
            <View style={tw`flex-1`}>
              <Text style={tw`mb-1 text-sm`}>Segundo apellido</Text>
              <TextInput
                style={tw`border-[1px] rounded-md border-gray-200 h-10 px-3 flex-1`}
                // placeholder="Garzón"
                editable={false}
                value={form?.lastname2}
                onChangeText={(value) => handleForm("lastname2", value)}
              ></TextInput>
            </View>
          </View>
          <View>
            <Text style={tw`mt-0 mb-0 text-sm`}>Numero de documento</Text>
            <TextInput
              style={tw`border-[1px] rounded-md border-gray-200 h-10 px-3`}
              // placeholder="1075650712"
              value={form?.document}
              editable={false}
              onChangeText={(value) => handleForm("document", value)}
            ></TextInput>
          </View>
          <View>
            <Text style={tw`mb-1 mt-4 text-sm`}>Correo electrónico</Text>
            <View style={tw`flex-row gap-2`}>
              <TextInput
                style={tw`border-[1px] rounded-md border-gray-200 h-10 px-3 flex-1`}
                placeholder="ejemplo@gmail.com"
                value={form?.email}
                onChangeText={(value) => handleForm("email", value)}
              ></TextInput>
              {/* <TouchableOpacity
                style={tw`${buttonColorBg} px-5 h-10 justify-center rounded-md mt-0`}
                onPress={enviarCodigo}
              >
                <Text style={tw`mx-auto ${buttonColorText} font-medium`}>
                  Enviar código
                </Text>
              </TouchableOpacity> */}
            </View>
          </View>
          {/* <View>
            <Text style={tw`mt-4 mb-1 text-sm`}>Codigo</Text>
            <TextInput
              style={tw`border-[1px] rounded-md border-gray-200 h-10 px-3`}
              placeholder="Ingresa el codigo"
            ></TextInput>
          </View> */}
          <View>
            <Text style={tw`mt-4 mb-1 text-sm`}>Teléfono</Text>
            <TextInput
              style={tw`border-[1px] rounded-md border-gray-200 h-10 px-3`}
              placeholder="3211234567"
              value={form?.phone}
              onChangeText={(value) => handleForm("phone", value)}
            ></TextInput>
          </View>
          {/* <View>
            <Text style={tw`mt-4 mb-1 text-sm`}>Fecha nacimiento</Text>
            <TextInput
              style={tw`border-[1px] rounded-md border-gray-200 h-10 px-3`}
              placeholder="04/12/2001"
            ></TextInput>
          </View> */}
          <View>
            <Text style={tw`mt-4 mb-1 text-sm`}>Contraseña</Text>
            <TextInput
              style={tw`border-[1px] rounded-md border-gray-200 h-10 px-3`}
              placeholder="Tu contraseña"
              secureTextEntry
              value={form?.password}
              onChangeText={(value) => handleForm("password", value)}
            ></TextInput>
          </View>
          <View>
            <Text style={tw`mt-4 mb-1 text-sm`}>Repetir contraseña</Text>
            <TextInput
              style={tw`border-[1px] rounded-md border-gray-200 h-10 px-3`}
              placeholder="Repite tu contraseña"
              secureTextEntry
              value={form?.password2}
              onChangeText={(value) => handleForm("password2", value)}
            ></TextInput>
          </View>
          <TouchableOpacity
            style={tw`${buttonColorBg} px-5 py-3 rounded-md mt-6`}
            onPress={registrarCuenta}
          >
            <Text style={tw`mx-auto ${buttonColorText} font-medium`}>
              Registrarme
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`${buttonColorBorderDominant} border-[1px] px-5 py-3 rounded-md mt-4 mb-20`}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={tw`mx-auto ${buttonColorText} font-medium`}>
              Ya tengo cuenta
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default RegisterScreen;
