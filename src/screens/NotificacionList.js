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
  import { InputText } from "../ui/Inputs/Inputs";
  
  const NotificacionList = ({ navigation }) => {
    return (
      <ScrollView style={tw`bg-white h-100% px-6 py-4`}>
        <View style={tw`flex-row items-center justify-between`}>
          <TouchableOpacity style={tw`px-1 py-2`} onPress={() => navigation.goBack()}>
            <Icon name={"arrow-left"} size={24} color={"black"}/>
          </TouchableOpacity>
          <Text style={tw`font-semibold text-base text-[#222B45]`}>
            Notificaciones
          </Text>
          <View style={tw`flex-row gap-4`}>
            <TouchableOpacity>
              <Icon name={"more-vertical"} color={"white"} size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={tw`my-6 flex-col gap-5`}>
          <View onPress={() => navigation.navigate("Chat")} style={tw`flex-row items-center justify-between gap-4 pr-2`}>
            <View style={tw`flex-row gap-4 items-start`}>
              <Image
                source={require("../../assets/negocios/logo.jpg")}
                style={tw`w-10 h-10 rounded-full mt-1`}
              />
              <View>
                <Text style={tw`text-[#222B45] w-3/4`}>
                  <Text style={tw`font-bold`}>Clinica Casanare</Text><Text> ha emitido el resultado de tus exámenes, ya puedes verlos</Text>
                </Text>
            <Text style={tw`text-gray-500 text-xs`}>Hace 1h</Text>
              </View>
            </View>
          </View>
          <View onPress={() => navigation.navigate("Chat")} style={tw`flex-row items-center justify-between gap-4 pr-2`}>
            <View style={tw`flex-row gap-4 items-start`}>
              <Image
                source={require("../../assets/negocios/logo.jpg")}
                style={tw`w-10 h-10 rounded-full mt-1`}
              />
              <View>
                <Text style={tw`text-[#222B45] w-1/2`}>
                  <Text style={tw`font-bold`}>Clinica Casanare</Text><Text> ha agendado tu cita para el 04/12 a las 09:00AM, confirma tu asistencia</Text>
                </Text>
            <View style={tw`w-full flex flex-row gap-4 my-2`}>
            <TouchableOpacity
                  style={tw`bg-blue-200 px-5 py-2 rounded-xl`}
                >
                  <Text style={tw`mx-auto text-blue-600 font-medium`}>
                    Confirmar
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={tw`px-5 py-2 rounded-xl`}
                >
                  <Text style={tw`mx-auto text-gray-600 font-medium`}>
                    No asistiré
                  </Text>
                </TouchableOpacity>
            </View>
            <Text style={tw`text-gray-500 text-xs`}>Hace 18h</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  };
  
  export default NotificacionList;
  