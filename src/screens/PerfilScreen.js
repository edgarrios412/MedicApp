import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
import Icon from "react-native-vector-icons/Feather";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { InputText } from "../ui/Inputs/Inputs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const PerfilScreen = ({ navigation }) => {

  const {user, setUser} = useContext(UserContext)

  const cerrarSesion = async () => {
    navigation.navigate("Login")
    await AsyncStorage.removeItem("token")
    setUser(null)
  }

  return (
    <ScrollView style={tw`bg-white h-100% py-3`}>
      <View style={tw`px-6 pb-3 flex-row items-center justify-between`}>
        <TouchableOpacity
          style={tw`px-1 py-2`}
          onPress={() => navigation.goBack()}
        >
          <Icon name={"arrow-left"} size={24} />
        </TouchableOpacity>
        <Text style={tw`font-semibold text-base text-[#222B45]`}>
          Mi perfil
        </Text>
        <View style={tw`flex-row gap-4`}>
          <TouchableOpacity>
            <Icon name={"more-vertical"} color={"white"} size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={tw`overflow-hidden relative px-6 bg-green-700 pt-10 pb-4 mb-4`}
      >
        {/* <Image
          source={require("../../assets/pattern.jpeg")}
          style={tw`w-120 h-55 absolute border-white`}
        /> */}
        <View style={tw`my-4 flex-row gap-4 items-center`}>
          <View
            style={tw`bg-green-600 shadow-lg border-2 border-white h-10 w-10 rounded-lg flex items-center justify-center`}
          >
            <Text style={tw`mx-auto font-medium text-white text-base`}>{user?.name1[0]}</Text>
          </View>
          <View>
            <Text style={tw`text-sm font-bold text-white`}>
            {user?.name1} {user?.lastname1}
            </Text>
            <Text style={tw`text-sm font-normal text-white`}>{user?.phone}</Text>
          </View>
        </View>
      </View>
      <View style={tw`flex-col gap-2`}>
        {/* <TouchableOpacity
          onPress={() => navigation.navigate("EditarPerfil")}
          style={tw`w-full h-12 rounded-xl flex-row items-center justify-between px-8`}
        >
          <View style={tw`flex-row items-center gap-4`}>
            <IconMaterialCommunityIcons
              size={16}
              name="lock-outline"
              style={tw`bg-purple-500 text-white rounded-full p-[6px]`}
            />
            <Text style={tw`m-auto text-black text-base`}>Editar perfil</Text>
          </View>
          <Icon size={20} name="arrow-right" />
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          onPress={() => navigation.navigate("MisNegocios")}
          style={tw`w-full h-12 rounded-xl flex-row items-center justify-between px-8`}
        >
          <View style={tw`flex-row items-center gap-4`}>
            <IconMaterialCommunityIcons
              size={16}
              name="briefcase-outline"
              style={tw`bg-green-500 text-white rounded-full p-[6px]`}
            />
            <Text style={tw`m-auto text-black text-base`}>
              Historia clínica
            </Text>
          </View>
          <Icon size={20} name="arrow-right" />
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          style={tw`w-full h-12 rounded-xl flex-row items-center justify-between px-8`}
        >
          <View style={tw`flex-row items-center gap-4`}>
            <IconMaterialCommunityIcons
              size={16}
              name="message-question-outline"
              style={tw`bg-green-500 text-white rounded-full p-[6px]`}
            />
            <Text style={tw`m-auto text-black text-base`}>Preguntas frecuentes</Text>
          </View>
          <Icon size={20} name="arrow-right" />
        </TouchableOpacity> */}
        <TouchableOpacity
          onPress={cerrarSesion}
          style={tw`w-full h-12 rounded-xl flex-row items-center justify-between px-8`}
        >
          <View style={tw`flex-row items-center gap-4`}>
            <IconMaterialCommunityIcons
              size={16}
              name="exit-to-app"
              style={tw`bg-red-500 text-white rounded-full p-[6px]`}
            />
            <Text style={tw`m-auto text-black text-base`}>Cerrar sesión</Text>
          </View>
          <Icon size={20} name="arrow-right" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default PerfilScreen;
